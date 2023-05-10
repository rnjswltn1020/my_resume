export default function CarrerItem({ data: { company, task, period, details } }) {
    return (
        <li className="flex w-full border-1 border-stone">
            <div className="w-2/4 border-r">
                <h2 className="text-3xl md:text-4xl mb-3 font-bold">{company}</h2>
                <h4 className="mb-2">{task}</h4>
                <h4 className="text-sm md:text-1xl">{period}</h4>
            </div>
            <ul className="flex gap-10 w-2/4 pl-5 flex-col">
                {details.map(d => {
                    return (
                        <li key={d.projectName} className="flex gap-3 flex-col">
                            <div>
                                <img
                                    className="mb-3"
                                    src={`/img/portfolio/${
                                        d.thumbImage ? d.id : 'admin'
                                    }-thumb.png`}
                                    alt={d.id}
                                    onClick={() => {}}
                                />
                                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                    {d.projectName}
                                </h2>
                                <h4 className="text-sm md:text-1xl">{`[${d.period}]`}</h4>
                            </div>
                            <div>
                                <h2 className="font-bold text-1xl md:text-2xl mb-1">Description</h2>
                                <p>{d.description}</p>
                            </div>
                            {d.whatdiddo && (
                                <div>
                                    <h2 className="font-bold text-1xl md:text-2xl underline decoration-pink-500 decoration-wavy mb-1">
                                        프로젝트 회고
                                    </h2>
                                    <p dangerouslySetInnerHTML={{ __html: d.whatdiddo }} />
                                </div>
                            )}
                            <div>
                                <h2 className="font-bold text-1xl md:text-2xl mb-1">맡은 직무</h2>
                                <p>{d.myJob}</p>
                            </div>
                            <div>
                                <h2 className="font-bold text-1xl md:text-2xl">사용 언어</h2>
                                <p>{d.techStack}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
}
