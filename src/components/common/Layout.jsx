import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../pages/Footer';
import LoadingAnimation from './loadingAnimation/LoadingAnimation';

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            setTimeout(() => {
                navigate('/about');
                // setLoading(false);
                setTimeout(() => {
                    document.querySelector('#root > div').classList.remove('opacity-0');
                }, 500);
            }, 300);
        } else {
            // setLoading(false);
            setTimeout(() => {
                document.querySelector('#root > div').classList.remove('opacity-0');
            }, 300);
        }
    }, []);

    return !loading ? (
        <div className={`wrapper opacity-0 ${!loading && 'opacity-1'} duration-500 `}>
            <div className="w-full h-auto flex flex-col justify-center min-h-full pb-14">
                <section className="max-w-screen-lg mx-auto mt-14 flex-1 w-full">
                    <Outlet />
                </section>
            </div>
            <Footer />
        </div>
    ) : (
        <LoadingAnimation />
    );
}
