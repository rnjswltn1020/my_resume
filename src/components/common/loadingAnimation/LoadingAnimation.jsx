import styled from './LoadingAnimation.module.css';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

export default function LoadingAnimation() {
    return (
        <div className={styled.first_layer}>
            <h1 className={styled.mainTt}>
                권 지 수
                <br />
                포트폴리오 로딩중 -
            </h1>
            <div className="flex relative w-full">
                <span className={styled.run}>
                    <DirectionsRunIcon fontSize="large" />
                </span>
                <span className={styled.ball}>
                    <SportsBasketballIcon fontSize="small" />
                </span>
            </div>
        </div>
    );
}
