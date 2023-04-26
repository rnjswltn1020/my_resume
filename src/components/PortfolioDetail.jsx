import { useEffect, useState } from 'react';
import Spinner from './common/Spinner';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

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
            {data.link && (
                <img
                    className="absolute top-3 right-12 cursor-pointer w-5 animate-bounce"
                    src={`${path}/img/like.png`}
                    alt="링크이동버튼"
                />
            )}
            <img
                src={`${path}/img/portfolio/${data.id}-detail.png`}
                key={data.id}
                alt={data.title}
                style={{ display: !showSpinner ? 'block' : 'none' }}
                className="w-full"
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
            <div className="flex justify-center items-center w-full h-full overflow-y-scroll flex items-baseline z-11002">
                <PortfolioImage data={targetData()} />
            </div>

            {isPrev() > -1 && (
                <div
                    className="w-10 h-10 p-1.5 absolute opacity-75 rounded-3xl flex justify-center items-center cursor-pointer left-5 bottom-24 z-11002 backdrop-contrast-200 bg-white"
                    onClick={() => {
                        changeTargetIdx(isPrev());
                    }}>
                    <ArrowCircleLeftIcon fontSize="large" />
                </div>
            )}

            {isNext() > -1 && (
                <div
                    className="w-10 h-10 p-1.5 absolute opacity-75 rounded-3xl flex justify-center items-center cursor-pointer right-5 bottom-24 z-11002 backdrop-contrast-200 bg-white"
                    onClick={() => {
                        changeTargetIdx(isNext());
                    }}>
                    <ArrowCircleRightIcon fontSize="large" />
                </div>
            )}
        </>
    );
}
