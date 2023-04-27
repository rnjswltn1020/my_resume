import { useState } from 'react';

export default function PortfolioItem({
    id,
    description,
    section,
    whatTodo,
    onClickEvt,
    thumbImage,
    percentage,
    tech,
    viewMore,
}) {
    const [loading, setLoading] = useState(true);

    return (
        <li className="w-full md:w-2/5 lg:w-300 mb-2.5 md:mb-5">
            <div
                className="relative overflow-hidden mb-5 pt-portfolioPd cursor-pointer"
                onClick={onClickEvt}>
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
                    <div
                        className={`absolute top-0 left-0 w-full h-full transition duration-300 opacity-0 hover:opacity-100 hover:bg-modalBg flex justify-center items-center`}>
                        <span className={`p-2 bg-amber-400 rounded-2xl text-sm`}>상세보기</span>
                    </div>
                </div>
            </div>
            <p className="text-1xl font-semibold text-zinc-600 mb-2">{description}</p>
            <ul className="mb-1.5">
                {section.map(item => (
                    <li key={`${id}-${item}`} className="text-sm">
                        <span>
                            {item} {percentage ? '/' : ''}
                        </span>
                        {percentage && (
                            <span className="text-sm text-red-600">기여도: {percentage}</span>
                        )}
                    </li>
                ))}
            </ul>
            <p className="text-sm mb-0.5">작업: {whatTodo}</p>
            <ul className="text-sm flex gap-2 items-center">
                사용기술:
                {tech.map((t, idx) => {
                    return (
                        <li className="p-0.5 bg-gray-200 rounded-s" key={idx}>
                            {t}
                        </li>
                    );
                })}
            </ul>
        </li>
    );
}
