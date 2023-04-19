import { useEffect, useState, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PortfolioData from '../portfolioData';
import PortfolioItem from '../components/PortfolioItem';

export default function Portfolio() {
    const [currentQueryParameters] = useSearchParams();

    const [getTabData, setTabData] = useState({
        ALL: 0,
        Work: 0,
        Side: 0,
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
            if (item.group.indexOf('SERVICE') > -1) {
                tabData.Service += 1;
            }
            if (item.group.indexOf('ICT') > -1) {
                tabData.ICT += 1;
            }
        });

        setTabData(tabData);
    };

    // 타겟 변경시 필터링 함수.
    const changeTab = tab => {
        setShowCount(9);
        setShowIdx(0);

        let filtering = [];

        if (tab === 'Service') {
            filtering = PortfolioData.filter(item => item.group.indexOf('SERVICE') > -1);
        } else if (tab === 'ICT') {
            filtering = PortfolioData.filter(item => item.group.indexOf('ICT') > -1);
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
            <div className="portfolio_container on">
                <ul className="tabMenu">
                    {Object.keys(getTabData).map(item => {
                        return (
                            <li key={item} className={getNowTab === item ? 'active' : ''}>
                                <Link to={`/portfolio?type=${item}`}>{item}</Link>
                                <span className="portfolio__count">{getTabData[item]}</span>
                            </li>
                        );
                    })}
                </ul>

                <ul className="tabContent">
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
        </>
    );
}
