import { useState } from 'react';

export default function PortfolioItem({
    id,
    description,
    section,
    whatTodo,
    onClickEvt,
    thumbImage,
    viewMore,
}) {
    const [loading, setLoading] = useState(true);

    return (
        <li className="w-full md:w-2/5 lg:w-300 cursor-pointer mb-2.5 md:mb-5">
            <div className="relative overflow-hidden mb-5 pt-portfolioPd" onClick={onClickEvt}>
                {loading && (
                    <div className="absolute w-full h-full top-0 left-0 bg-gray-400 animate-pulse" />
                )}
                <div className="absolute top-0 left-0 w-full">
                    <img
                        className={`w-full z-900 opacity-0 duration-6000`}
                        src={`/img/portfolio/${thumbImage ? id : 'admin'}-thumb.png`}
                        alt={`${description}`}
                        onLoad={e => {
                            setLoading(false);
                            const { target } = e;
                            target.classList.remove('opacity-0');
                            target.classList.add('opacity-1');
                        }}
                    />
                </div>
            </div>
            <p className="text-1xl font-semibold text-zinc-600">{description}</p>
            <ul className="mb-1.5">
                {section.map(item => (
                    <li key={`${id}-${item}`} className="text-sm">
                        {item}
                    </li>
                ))}
            </ul>
            <p className="text-sm">작업: {whatTodo}</p>
        </li>
    );
}
