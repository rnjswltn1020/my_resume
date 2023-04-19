export default function CarrerItem({ data: { company, task, period, details } }) {
    return (
        <li className="flex w-full border-1 border-stone">
            <div className="w-2/4 border-r">
                <h2 className="text-3xl md:text-4xl  mb-3 font-bold">{company}</h2>
                <h4>{task}</h4>
                <h4>{period}</h4>
            </div>
            <ul className="flex gap-10 w-2/4 pl-5 flex-col">
                {details.map(d => {
                    return (
                        <li key={d.projectName} className="flex gap-3 flex-col">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                                    {d.projectName}
                                </h2>
                                <h4>{d.period}</h4>
                            </div>
                            <div>
                                <h2 className="font-bold text-1xl md:text-2xl">Description</h2>
                                <p>{d.description}</p>
                            </div>
                            <div>
                                <h2 className="font-bold text-1xl md:text-2xl">맡은 직무</h2>
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
