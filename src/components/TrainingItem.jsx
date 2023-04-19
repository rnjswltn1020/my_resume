export default function TrainingItem({ data: { title, period, when, what } }) {
    return (
        <li className="flex w-full border-1 border-stone flex-col border-b pb-5">
            <div className="flex gap-2 items-center ">
                <h2 className="text-lg md:text-2xl font-bold mb-1">{title}</h2>
                <span className="text-sm rounded-xl bg-slate-100 p-1">{when}</span>
            </div>
            <h4 className="mb-3 text-sm">{period}</h4>
            <ul>
                {what.map(w => (
                    <li className="list-disc">{w}</li>
                ))}
            </ul>
        </li>
    );
}
