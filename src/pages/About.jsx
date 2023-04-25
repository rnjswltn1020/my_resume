import CarrerItem from '../components/CarrerItem';
import myData from '../myCarrerData';
import TrainingItem from '../components/TrainingItem';

export default function About() {
    return (
        <main className="flex justify-center items-center flex-col gap-2">
            <div className="mb-48 mt-48 p-5">
                <h2 className="text-4xl mb-10 md:text-5xl">
                    안녕하세요,
                    <br /> 저는 권지수입니다.
                </h2>
                <p className="text-3xl md:text-4xl">
                    남들보다 첫 시작이 늦은만큼, 더 발빠르게 성장해나갈 자신 있습니다! <br /> 현재
                    웹 프론트엔드 엔지니어 2년차로 일하고 있습니다.{' '}
                </p>
            </div>
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
            <article className="w-full mb-10 p-5">
                <h2 className="text-2xl md:text-3xl mb-3 font-bold">한성대학교</h2>
                <h4>패션디자인 전공</h4>
                <h4 className="mb-5">2011.03-2016.02</h4>
                <p>
                    패션 디자인전공으로 4년동안 공부하였으며, 졸업 작품으로 한복과 여성 기성복을
                    만들어서 패션쇼를 진행한 경험이 있습니다.
                </p>
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
                                <a
                                    href={c.method === 'E-mail' ? `mailto:${c.url}` : c.url}
                                    target={c.method !== 'E-mail' ? '_black' : ''}>
                                    {c.url}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </article>
        </main>
    );
}
