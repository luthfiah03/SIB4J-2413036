export default function LearnPage() {
    return (
    <div className="bg-White h-screen flex gap-4">
        <div className="bg-purple-300 h-72 w-96 p-8 flex flex-col justify-between rounded-2xl"> 
            <div className="flex gap-4">
                <img src={"/palette.svg"} alt="icon palette"/>
                <p>Design</p>
            </div>
            <div>
            <h1 className="text-4xl font-bold">Figma</h1>
            <p>8 Hours</p>
            </div>
        </div>

        <div className="bg-pink-300 h-72 w-96 p-8 flex flex-col justify-between rounded-2xl"> 
            <div className="flex gap-4">
                <img src={"/palette.svg"} alt="icon palette"/>
                <p>Design</p>
            </div>
            <div>
            <h1 className="text-4xl font-bold">Figma</h1>
            <p>8 Hours</p>
            </div>
        </div>

        <div className="bg-purple-300 h-72 w-96 p-8 flex flex-col justify-between rounded-2xl"> 
            <div className="flex gap-4">
                <img src={"/palette.svg"} alt="icon palette"/>
                <p>Design</p>
            </div>
            <div>
            <h1 className="text-4xl font-bold">Figma</h1>
            <p>8 Hours</p>
            </div>
        </div>
    </div>
    )
}
