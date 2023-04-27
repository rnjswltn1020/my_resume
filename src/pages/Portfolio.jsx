import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PortfolioData from '../portfolioData';
import PortfolioItem from '../components/PortfolioItem';
import Modal from '../components/common/Modal';
import PortfolioDetail from '../components/PortfolioDetail';

export default function Portfolio() {
    const modal = useRef(null);
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
    const [getShowCount, setShowCount] = useState(6);

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
        setShowCount(6);
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
                <ul className="w-full flex mb-6 gap-4 border-b-4 border-black cursor-pointer">
                    {Object.keys(getTabData).map(item => {
                        return (
                            <li
                                key={item}
                                onClick={() => navigate(`/portfolio?type=${item}`)}
                                className={`${
                                    getNowTab === item
                                        ? 'text-highlight translate-y-0 rounded-t-lg'
                                        : 'text-normal translate-y-full rounded-b-lg'
                                } bg-black p-1.5 duration-300 text-sm cursor-pointer"
                                `}>
                                <span className="w-full text-white">{item}</span>
                                <span className="text-xs text-highlight">[{getTabData[item]}]</span>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex flex-col justify-center flex-1 mt-7 items-center">
                    <ul className="w-full flex flex-wrap align-center gap-5 p-5 lg:p-0 md:justify-between lg:mb-10">
                        {getPortFolio.map((item, idx) => {
                            if (idx < getShowCount) {
                                return (
                                    <PortfolioItem
                                        key={item.id}
                                        id={item.id}
                                        description={item.title}
                                        viewMore={item.detailImage}
                                        name={item.title}
                                        section={item.section}
                                        whatTodo={item.whatTodo}
                                        thumbImage={item.thumbImage}
                                        link={item.link && item.link}
                                        onClickEvt={() => {
                                            setShowIdx(idx);
                                            if (item.detailImage) {
                                                modal.current.open();
                                            } else if (!item.detailImage && item.link) {
                                                window.open(item.link);
                                            }
                                        }}
                                    />
                                );
                            }
                            return false;
                        })}
                    </ul>
                    {getPortFolio.length < 7 || getShowCount > getPortFolio.length ? (
                        ''
                    ) : (
                        <button
                            type="button"
                            className="bg-amber-200 w-150 text-sm p-3 rounded-2xl border-rose-600 mb-10 md:mb-8 hover:bg-amber-300 duration-300"
                            onClick={() => {
                                showMore();
                            }}>
                            MORE
                        </button>
                    )}
                </div>
            </div>
            <Modal ref={modal}>
                <PortfolioDetail data={getPortFolio} showItemIdx={getShowIdx} />
            </Modal>
        </>
    );
}
