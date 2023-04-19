import { useEffect, useState } from 'react';
import Spinner from "./common/Spinner";

const path = process.env.PUBLIC_URL;

let dataLength = 0;

function PortfolioImage(props) {
    const { data } = props;
    const [showSpinner, setShowSpinner] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(true);

    // 데이터 값 처음 받음
    useEffect(() => {
        setImageLoaded(false);
    }, [data]);

    // set된 값 받아오기
    useEffect(() => {
        if (imageLoaded) {
            setShowSpinner(false);
        }
    }, [imageLoaded, showSpinner, data]);

    // 다시한번 set된 값 받아오기
    useEffect(() => {
        setTimeout(() => {
            if (imageLoaded) {
                setShowSpinner(false);
            } else {
                setShowSpinner(true);
            }
        }, 100);
    }, [imageLoaded, showSpinner, data]);

    return (
        <>
            {showSpinner && <Spinner />}
            <img
                src={`${path}/img/portfolio/${data.id}-detail.webp`}
                key={data.id}
                alt={data.title}
                style={{ display: !showSpinner ? 'block' : 'none' }}
                className="portfolio_img"
                onLoad={() => {
                    setImageLoaded(true);
                }}
                onError={e => {
                    e.target.src = `${path}/img/errorImage.png`;
                }}
            />
        </>
    );
}

export default function PortfolioDetail({ data, showItemIdx }) {
    const [getShowIdx, setShowIdx] = useState(showItemIdx);

    useEffect(() => {
        dataLength = data.length;
    });

    const targetData = () => {
        return data[getShowIdx];
    };

    const isPrev = () => {
        if (getShowIdx === 0) return -1;
        let ret = -1;

        for (let i = getShowIdx - 1; i >= 0; i--) {
            if (data[i].detailImage) {
                ret = i;
                return ret;
            }
        }
    };

    const isNext = () => {
        if (getShowIdx === dataLength - 1) return -1;
        let ret = -1;
        for (let i = getShowIdx + 1; i < data.length; i++) {
            if (data[i].detailImage) {
                ret = i;
                return ret;
            }
        }
        return ret;
    };

    const changeTargetIdx = targetIdx => {
        setShowIdx(targetIdx);
    };

    return (
        <>
            <div className="scrollView">
                <PortfolioImage data={targetData()} />
            </div>

            {isPrev() > -1 && (
                <div
                    className="modal_btn prev"
                    onClick={() => {
                        changeTargetIdx(isPrev());
                    }}
                >
                    <img
                        src="/img/btn-arrow-wh/btn-arrow-wh.png"
                        alt="이전 포트폴리오"
                    />
                </div>
            )}

            {isNext() > -1 && (
                <div
                    className="modal_btn next"
                    onClick={() => {
                        changeTargetIdx(isNext());
                    }}
                >
                    <img
                        src="/img/btn-arrow-wh/btn-arrow-wh.png"
                        alt="다음 포트폴리오"
                    />
                </div>
            )}
        </>
    );
}
