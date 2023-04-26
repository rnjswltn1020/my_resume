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
                    className="modal w-screen h-screen fixed top-0 left-0 z-10001"
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
                    }}>
                    <motion.div
                        className="w-screen h-screen flex justify-center items-center z-11000 bg-modalBg"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.2, delay: 0.5 },
                        }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.2, delay: 0.9 },
                        }}>
                        <div
                            className="relative w-full h-full max-h-854 max-w-screen-lg"
                            ref={modal}>
                            <div className="w-full h-full max-h-854 max-w-screen-lg relative bg-modalBg p-0 z-11000 overflow-y-scroll">
                                {children}
                            </div>
                            <motion.p
                                className="absolute right-0 top-0 flex justify-center items-center bg-black cursor-pointer z-11002 w-6 md:w-10"
                                onClick={e => {
                                    e.preventDefault();
                                    modalClose();
                                }}>
                                <img src={`${path}/img/close-wh.png`} alt="close_btn" />
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
