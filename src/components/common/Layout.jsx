import Header from '../Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div className="w-full h-full flex flex-col justify-center">
            <Header />
            <section className="max-w-screen-lg mx-auto">
                <Outlet />
            </section>
        </div>
    );
}
