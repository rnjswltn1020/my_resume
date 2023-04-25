import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PortfolioData from '../portfolioData';
import PortfolioItem from '../components/PortfolioItem';

export default function Portfolio() {
    const navigate = useNavigate();
    const [currentQueryParameters] = useSearchParams();
    const [getTabData, setTabData] = useState({
        ALL: 0,
        WORK: 0,
        SIDE: 0,
    });

    // 현재 탭을 알아내는
    const nowTab = () => {
        if (window.location.search) {
            return window.location.search.split('?type=')[1];
        }
        return 'ALL';
    };
    const [getNowTab, setNowTab] = useState(nowTab());
    const [getShowIdx, setShowIdx] = useState(0);
    const [getPortFolio, setPortFolio] = useState([]);
    const [getShowCount, setShowCount] = useState(9);

    // 포트폴리오 데이터 카운트 계산
    const calcPortfolioLen = () => {
        const data = PortfolioData;
        const tabData = { ...getTabData };

        tabData.ALL = data.length;

        data.forEach(item => {
            if (item.type === 'work') {
                tabData.WORK += 1;
            }
            if (item.type === 'side') {
                tabData.SIDE += 1;
            }
        });

        setTabData(tabData);
    };

    // 타겟 변경시 필터링 함수.
    const changeTab = tab => {
        console.log(tab);
        setShowCount(9);
        setShowIdx(0);

        let filtering = [];

        if (tab === 'WORK') {
            filtering = PortfolioData.filter(item => item.type === 'work');
        } else if (tab === 'SIDE') {
            filtering = PortfolioData.filter(item => item.type === 'side');
        } else if (tab === 'ALL') {
            filtering = [...PortfolioData];
        }

        setNowTab(tab);
        setPortFolio(filtering);
    };

    const showMore = () => {
        setShowCount(prev => prev + 6);
    };

    useEffect(() => {
        calcPortfolioLen();
        changeTab(nowTab());
    }, []);

    useEffect(() => {
        changeTab(nowTab());
    }, [currentQueryParameters]);

    return (
        <>
            <div className="flex w-full flex-col">
                <ul className="w-full flex mb-6 gap-5 border-b-4 border-black">
                    {Object.keys(getTabData).map(item => {
                        return (
                            <li
                                key={item}
                                onClick={() => navigate(`/portfolio?type=${item}`)}
                                className={`${
                                    getNowTab === item
                                        ? 'text-highlight translate-y-0 rounded-t-lg'
                                        : 'text-normal rounded-b-lg'
                                } bg-black p-1.5 translate-y-full duration-300  text-sm cursor-pointer
                                `}>
                                <span className="w-full text-white">{item}</span>
                                <span className="text-xs text-highlight">[{getTabData[item]}]</span>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex flex-col justify-center flex-1 mt-7">
                    <ul>
                        {getPortFolio.map((item, idx) => {
                            if (idx < getShowCount) {
                                return (
                                    <li key={item.id}>
                                        <PortfolioItem
                                            key={item.id}
                                            id={item.id}
                                            description={item.title}
                                            viewMore={item.detailImage}
                                            name={item.title}
                                            tag={item.section}
                                            onClickEvt={() => {
                                                setShowIdx(idx);
                                                if (item.detailImage) {
                                                    // modal.current.open();
                                                }
                                            }}
                                        />
                                    </li>
                                );
                            }
                            return false;
                        })}
                    </ul>
                    {getPortFolio.length < 10 || getShowCount > getPortFolio.length ? (
                        ''
                    ) : (
                        <button
                            type="button"
                            className="portfolio__btn"
                            onClick={() => {
                                showMore();
                            }}>
                            MORE
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
