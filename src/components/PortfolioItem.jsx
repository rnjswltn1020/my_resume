import { useState, useRef } from 'react';

export default function PortfolioItem({ id, description, tag, onClickEvt, thumbImage, viewMore }) {
    const [loading, setLoading] = useState(true);
    const imgBox = useRef(null);

    return (
        <li className="w-300 cursor-pointer">
            <div className=" relative overflow-hidden mb-5" onClick={onClickEvt}>
                {loading && <div className="placeholderImg" />}
                <div ref={imgBox} className="imageWrapper">
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
            <ul>
                {tag.map(item => (
                    <li key={`${id}-${item}`} className="portfolio__tag">
                        {item}
                    </li>
                ))}
            </ul>
            <p>{description}</p>
        </li>
    );
}
