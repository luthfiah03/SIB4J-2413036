export default function Menubutton ({title, imgsrc}: {title: string, imgsrc: string}) {
    return (
        <button className="py-2 flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
                <img src={imgsrc}/>
                <p className="text-lg">{title}
                </p>
            </div>
            <img src="chevron-right.svg" />
        </button>
    )
}
