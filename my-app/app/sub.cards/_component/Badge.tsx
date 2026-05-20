export default function Badge ({name}: {name: string}) {
    return (
        <div className="bg-blue-200 p-1 text-xs rounded-2xl">
            <p>{name}</p>
        </div>
    )
}