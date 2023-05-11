export default function TrainingItem({ data: { title, period, when, what } }) {
    return (
        <li className="flex w-full border-1 border-stone flex-col border-b pb-5">
            <div className="flex flex-col md:flex-row md:gap-2 md:items-center mb-3 md:mb-0 ">
                <h2 className="text-xl md:text-2xl font-bold mb-1">{title}</h2>
                <span className="text-sm rounded-xl bg-slate-100 p-1">{when}</span>
            </div>
            <h4 className="mb-3 decoration-pink-500 text-sm underline decoration-wavy underline-offset-4">
                {period}
            </h4>
            <ul>
                {what.map((w, idx) => (
                    <li className="list-disc" key={idx}>
                        {w}
                    </li>
                ))}
            </ul>
        </li>
    );
}
