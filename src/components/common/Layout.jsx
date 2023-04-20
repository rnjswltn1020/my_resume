import Header from '../Header';
import Footer from '../../pages/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <div className="w-full h-auto flex flex-col justify-center min-h-full pb-14">
                <Header />
                <section className="max-w-screen-lg mx-auto mt-14 flex-1">
                    <Outlet />
                </section>
            </div>
            <Footer />
        </>
    );
}
