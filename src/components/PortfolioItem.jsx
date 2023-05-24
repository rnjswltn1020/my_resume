import { useState } from 'react';

export default function PortfolioItem({
    data: {
        id,
        projectName,
        period,
        description,
        whatdiddo,
        myJob,
        link,
        techStack,
        thumbImage,
        detailImage,
    },
    onClickEvt,
}) {
    return (
        <li
            key={projectName}
            className="flex gap-3 flex-col md:flex-row gap-5 bg-slate-50 rounded-lg ">
            <div className="flex justify-center md:justify-start items-center w-full md:w-2/5">
                <img
                    className={`${detailImage || link ? 'cursor-pointer' : ''} `}
                    src={`/img/portfolio/${thumbImage ? id : 'admin'}-thumb.png`}
                    alt={id}
                    onClick={onClickEvt}
                />
            </div>
            <div className="flex-1 text-lg flex flex-col gap-2 p-2">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <h2 className="font-bold mb-1 text-xl">프로젝트명: {projectName}</h2>
                    <h4 className="text-sm">{`[${period}]`}</h4>
                </div>
                <div>
                    <h2 className="font-bold mb-1">Description</h2>
                    <p className="text-sm">{description}</p>
                </div>
                {whatdiddo && (
                    <div>
                        <h2 className="font-bold underline decoration-pink-500 decoration-wavy mb-1">
                            프로젝트 회고
                        </h2>
                        <p dangerouslySetInnerHTML={{ __html: whatdiddo }} className="text-sm" />
                    </div>
                )}
                <div>
                    <h2 className="font-bold  mb-1">맡은 직무</h2>
                    <p className="text-sm">{myJob}</p>
                </div>
                <div>
                    <h2 className="font-bold ">사용 언어</h2>
                    <span className="text-sm">{techStack.join(', ')}</span>
                </div>
            </div>
        </li>
    );
}
