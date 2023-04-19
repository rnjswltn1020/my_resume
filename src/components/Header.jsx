import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
    const targetHeader = useRef(null);
    const [scrollEvt, setScrollEvt] = useState(true);
    const menuList = [
        {
            title: 'About 권지수',
            value: 'about',
        },
        { title: 'Portfolio', value: 'portfolio' },
    ];
    let lastScrollY = 0;
    const handleScroll = e => {
        const scrollY = window.scrollY;

        const direction = scrollY > lastScrollY ? 'UP' : 'DOWN';
        lastScrollY = scrollY;

        if (direction === 'UP') {
            targetHeader.current.style.transform = 'translateY(-100%)';
        } else {
            targetHeader.current.style.transform = 'translateY(0)';
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            window.addEventListener('scroll', handleScroll);
        }, 100);

        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollEvt) {
        }
    }, [scrollEvt]);

    return (
        <header
            ref={targetHeader}
            className="w-full h-19 border-b-8 border-amber-400 px-4 fixed top-0 duration-500 bg-slate-50">
            <nav>
                <ul className="flex justify-end items-center gap-x-4 text-lg duration-3000">
                    {menuList.map(m => (
                        <li key={m.value} className="hover:font-bold">
                            <Link to={m.value}>{m.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
