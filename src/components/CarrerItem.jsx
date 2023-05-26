export default function CarrerItem({ data: { company, task, period, details }, onClickImg }) {
    return (
        <li className="flex w-full border-1 border-stone flex-col gap-3 md:gap-0 md:flex-row bg-slate-50 px-1 py-1 rounded-xl">
            <div className="w-full md:w-2/4 border-double md:border-solid border-b-4 md:border-b-0 md:border-r py-3 md:py-0 ">
                <h2 className="text-3xl md:text-4xl mb-3 font-bold">{company}</h2>
                <h4 className="mb-2 text-sm md:text-sm">{task}</h4>
                <h4 className="text-xs md:text-sm">{period}</h4>
            </div>
            <ul className="flex gap-10 w-full md:w-2/4 md:pl-5 flex-col">
                {details.map((d, idx) => {
                    return (
                        <li key={d.projectName} className="flex gap-3 flex-col">
                            <div className="flex justify-center md:justify-center items-center">
                                {d.detailImage && (
                                    <div className="relative cursor-pointer">
                                        <div className="relative">
                                            <img
                                                className="mb-3"
                                                src={`/img/portfolio/${
                                                    d.thumbImage ? d.id : 'admin'
                                                }-thumb.png`}
                                                alt={d.id}
                                            />
                                            <div
                                                className={`absolute top-0 left-0 w-full h-full transition duration-300 opacity-0 hover:opacity-100 hover:bg-modalBg flex justify-center items-center  ${
                                                    d.detailImage ? 'cursor-pointer' : ''
                                                }`}
                                                onClick={() => onClickImg(idx)}>
                                                <span
                                                    className={`p-2 bg-amber-400 rounded-2xl text-sm`}>
                                                    상세보기
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold mb-1">
                                    {d.projectName}
                                </h2>
                                <h4 className="text-sm">{`${d.period}`}</h4>
                            </div>
                            <div>
                                <h2 className="font-bold text-base md:text-2xl mb-1">
                                    Description
                                </h2>
                                <p className="text-sm">{d.description}</p>
                            </div>
                            {d.whatdiddo && (
                                <div>
                                    <h2 className="font-bold text-base md:text-2xl underline decoration-pink-500 decoration-wavy mb-1">
                                        프로젝트 회고
                                    </h2>
                                    <p
                                        dangerouslySetInnerHTML={{ __html: d.whatdiddo }}
                                        className="text-sm"
                                    />
                                </div>
                            )}
                            <div>
                                <h2 className="font-bold text-base md:text-2xl mb-1">맡은 직무</h2>
                                <p className="text-sm">{d.myJob}</p>
                            </div>
                            <div>
                                <h2 className="font-bold text-base md:text-2xl">사용 언어</h2>
                                <p className="text-sm">{d.techStack}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </li>
    );
}
