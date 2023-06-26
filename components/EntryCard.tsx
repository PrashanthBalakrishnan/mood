const EntryCard = ({ entry }) => {
    const date = new Date(entry.createdAt).toDateString()

    return (
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow h-[250px]">
            <div
                className="w-full h-2"
                style={{ backgroundColor: entry?.analysis?.color }}
            ></div>
            <div className="px-4 py-5 ">{date}</div>
            <div className="px-4 py-5 ">
                <span className="font-semibold">Summary: </span>
                {entry?.analysis?.summary}
            </div>
            <div className="px-4 py-4 ">
                {' '}
                <span className="font-semibold">Mood: </span>
                {entry?.analysis?.mood}
            </div>
        </div>
    )
}
export default EntryCard
