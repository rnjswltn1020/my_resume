import styled from './LoadingAnimation.module.css';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

export default function LoadingAnimation() {
    return (
        <div className={styled.first_layer}>
            <h1 className={styled.mainTt}>
                권 지 수
                <br />
                Portfolio Loading ...
            </h1>
            <div className="flex relative w-full pb-0.5 border-emerald-600 border-b-8 ">
                <span className={styled.run}>
                    <DirectionsWalkIcon fontSize="large" />
                </span>
                <span className={styled.ball}>
                    <SportsSoccerIcon fontSize="small" />
                </span>
            </div>
        </div>
    );
}
