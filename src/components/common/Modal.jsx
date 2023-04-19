import React, { useState, useEffect, useRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const path = process.env.PUBLIC_URL;

function Modal(props, ref) {
    const [open, setOpen] = useState(false);
    const modal = useRef(null);
    const { closeEvent, children } = props;

    const modalOpen = () => {
        document.body.classList.add('modal-open');
    };

    const modalClose = () => {
        setOpen(false);
        if (closeEvent !== undefined) {
            closeEvent();
        }
        document.body.classList.remove('modal-open');
    };

    const handleClickOutside = e => {
        e.preventDefault();
        if (open && !modal.current.contains(e.target)) {
            modalClose();
        }
    };

    useEffect(() => {
        if (open) {
            // modal 외부 클릭 시 닫히기
            document.addEventListener('mousedown', handleClickOutside);
            // modal 뒷배경 스크롤 막기
            modalOpen();

            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
                modalClose();
            };
        }
    }, [open]);

    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),
        };
    });

    return (
        <AnimatePresence>
            {open && (
                <motion.aside
                    className="modal"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.2 },
                    }}
                    exit={{
                        opacity: 0,
                        scale: 1,
                        transition: { duration: 0.2, delay: 0.5 },
                    }}
                >
                    <motion.div
                        className="modal_overlay"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.2, delay: 0.5 },
                        }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.2, delay: 0.9 },
                        }}
                    >
                        <div className="modal_content_wrapper" ref={modal}>
                            <div className="modal_content">{children}</div>
                            <motion.p
                                className="close_btn"
                                onClick={e => {
                                    e.preventDefault();
                                    modalClose();
                                }}
                            >
                                <img
                                    src={`${path}/img/close-wh/close-wh.png`}
                                    alt="close_btn"
                                />
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.aside>
            )}
        </AnimatePresence>
    );
}

const popup = React.forwardRef(Modal);
export default popup;
