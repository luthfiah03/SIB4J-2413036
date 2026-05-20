export default function Badge ({name}: {name: string}) {
    return (
        <div className="bg-white p-1 text-xs rounded-2xl">
            <p>{name}</p>
        </div>
    )
}