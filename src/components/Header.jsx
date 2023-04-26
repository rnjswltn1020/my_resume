import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
    const location = useLocation();
    const [targetMenu, setTargetMenu] = useState(location.pathname.slice(1));
    const targetHeader = useRef(null);
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

    const handleMenu = e => {
        const { ariaLabel } = e.target;
        setTargetMenu(ariaLabel);
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

    return (
        <header
            ref={targetHeader}
            className="w-full h-19 border-b-8 border-amber-400 px-4 fixed top-0 duration-500 bg-main p-2 backdrop-blur-sm z-9999">
            <nav>
                <ul className="flex justify-end items-center gap-x-4 text-lg duration-3000">
                    {menuList.map(m => (
                        <li
                            key={m.value}
                            className={
                                targetMenu === m.value
                                    ? `text-highlight font-semibold`
                                    : `text-normal`
                            }>
                            <Link to={m.value} onClick={handleMenu} aria-label={m.value}>
                                {m.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
