import { useEffect, useRef, useState } from 'react';
import CarrerItem from '../components/CarrerItem';
import myData from '../myCarrerData';
import TrainingItem from '../components/TrainingItem';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const linkBox = useRef(null);
    const navigate = useNavigate();
    const [profile, setProfile] = useState(false);
    const checkScroll = () => {
        if (linkBox.current !== null) {
            const scrollY = window.scrollY;

            if (scrollY > 300) {
                linkBox.current.style.opacity = '1';
                linkBox.current.style.visibility = 'visible';
            } else {
                linkBox.current.style.opacity = '0';
                linkBox.current.style.visibility = 'hidden';
            }
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            window.addEventListener('scroll', checkScroll);
        }, 100);

        return () => {
            clearInterval(timer);
            window.addEventListener('scroll', checkScroll);
        };
    }, []);

    console.log(profile);

    return (
        <main className="flex justify-center items-center flex-col gap-2">
            <div className="flex flex-col md:flex-row mb-12 md:mb-32 mt-12 md:mt-32 p-3 gap-10 items-center">
                <div className="w-9/12 sm:w-5/12 md:w-4/12 h-full overflow-hidden rounded-full shadow-xl relative">
                    {!profile && (
                        <div className="absolute top-0 left-0 w-full h-full animate-pulse bg-amber-50" />
                    )}
                    <img
                        className={`duration-300 ${!profile ? 'opacity-0' : 'opacity-1'}`}
                        src="/img/profile.jpg"
                        alt="profileImage"
                        onLoad={e => {
                            setProfile(true);
                        }}
                    />
                </div>
                <div className="flex-1">
                    <h2 className="text-4xl mb-10 md:text-5xl">
                        안녕하세요,
                        <br /> 저는 권지수입니다.
                    </h2>
                    <p className="text-2xl md:text-3xl">
                        새로운 경험을 쌓는것에 열정적이며,
                        <br />
                        한번 시작하면 진득하게 버텨내는 인내심이 저의 가장 큰 장점입니다. <br />
                    </p>
                </div>
            </div>
            <h3 className="text-4xl text-right w-full border-b-4 inline-block max-w-screen-lg border-amber-400 md:text-5xl">
                Skills.
            </h3>
            <article className="w-full mb-10 p-5">
                <ul className="flex gap-5 flex flex-wrap text-sm md:text-base">
                    {myData.skills.map((s, idx) => (
                        <li key={idx} className="rounded-xl bg-slate-100 p-1">
                            {s}
                        </li>
                    ))}
                </ul>
            </article>
            <h3 className="text-4xl text-right w-full border-b-4 inline-block max-w-screen-lg border-amber-400 md:text-5xl">
                Contact.
            </h3>
            <article className="w-full mb-10 p-5">
                <ul className="flex gap-5 flex flex-col text-sm md:text-base">
                    {myData.contact.map((c, idx) => {
                        return (
                            <li key={idx} className="rounded-xl bg-slate-100 p-1">
                                <span> {c.method} : </span>
                                {c.method === 'Phone' && <a href={`tel:${c.url}`}>{c.url}</a>}
                                {c.method !== 'Phone' && (
                                    <a
                                        href={c.method === 'E-mail' ? `mailto:${c.url}` : c.url}
                                        target={c.method !== 'E-mail' ? '_black' : ''}>
                                        {c.url}
                                    </a>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </article>
            <h3 className="text-4xl text-right w-full border-b-4 inline-block max-w-screen-lg border-amber-400 md:text-5xl">
                Work Experience.
            </h3>
            <section className="w-full mb-10">
                <ul className="p-5">
                    {myData !== null && myData.works.map(c => <CarrerItem key={c.id} data={c} />)}
                </ul>
            </section>
            <h3 className="text-4xl text-right w-full border-b-4 inline-block max-w-screen-lg border-amber-400 md:text-5xl">
                Education.
            </h3>
            <article className="w-full mb-1 p-5">
                <h2 className="text-2xl md:text-3xl mb-3 font-bold">한성대학교</h2>
                <h4>패션디자인 전공</h4>
                <h4 className="mb-5">2011.03-2016.02</h4>
            </article>
            <h3 className="text-4xl text-right w-full border-b-4 inline-block max-w-screen-lg border-amber-400 md:text-5xl">
                Training.
            </h3>
            <article className="w-full mb-10 p-5">
                <ul className="flex gap-10 flex-col text-1xl">
                    {myData.trainings.map(t => (
                        <TrainingItem data={t} key={t.id} />
                    ))}
                </ul>
            </article>
            <span
                ref={linkBox}
                onClick={() => navigate('/portfolio')}
                className="fixed bottom-10 md:bottom-40 right-10 bg-red-400 rounded-2xl p-3 text-xs text-white cursor-pointer animate-bounce transition duration-500 opacity-0">
                포트폴리오 <br />
                보러가기🎈
            </span>
        </main>
    );
}
