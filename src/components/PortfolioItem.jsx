import { useState, useRef } from 'react';

export default function PortfolioItem({ id, description, tag, onClickEvt, viewMore }) {
    const [loading, setLoading] = useState(true);
    const imgBox = useRef(null);

    return (
        <>
            <div
                className={`w-px relative overflow-hidden  ${viewMore} ? viewMore : ''`}
                onClick={onClickEvt}>
                {loading && <div className="placeholderImg" />}
                <div ref={imgBox} className="imageWrapper">
                    <img
                        className={`w-full z-900 opacity-0 duration-6000 on && opacity-1`}
                        src={`/img/portfolio/${id}-thumb.webp`}
                        alt={`${description}`}
                        onLoad={e => {
                            setLoading(false);
                            const { target } = e;
                            target.classList.add('on');
                        }}
                    />
                </div>
                <div className="portfolio__gradient" />
            </div>
            <ul>
                {tag.map(item => (
                    <li key={`${id}-${item}`} className="portfolio__tag">
                        {item}
                    </li>
                ))}
            </ul>
            <div>{description}</div>
        </>
    );
}
