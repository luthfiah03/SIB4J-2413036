export default function LearnPage() {
    return (
    <div className="bg-white h-screen p-10 flex flex-col gap-8 items-center">
        <div className="grid grid-cols-2 gap-6 max-w-5xl w-full">  
            <div className="bg-blue-100 h-72 p-6 flex flex-col justify-between rounded-2xl"> 
                <div className="flex gap-2">
                    <img src={"/palette.svg"} alt="icon palette"/>
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Adobe Photoshop</h1>
                    <p>in 3 days</p>
                </div>
            </div>

            <div className="bg-green-100 h-72 p-8 flex flex-col justify-between rounded-2xl"> 
                <div className="flex gap-2">
                    <img src={"/terminal-2.svg"} alt="icon terminal-2"/>
                    <p>AI</p>
                    <img className="ml-auto" src={"/star.svg"} alt="icon star"/>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">DALL·E 2, Midjourney, Stable Diffusion</h1>
                    <p>in 5 days</p>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 max-w-5xl w-full">
            <div className="bg-purple-100 h-72 p-8 flex flex-col justify-between rounded-2xl"> 
                <div className="flex gap-2">
                    <img src={"/palette.svg"} alt="icon palette"/>
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Figma</h1>
                    <p>8 Hours</p>
                </div>
            </div>

            <div className="bg-orange-100 h-72 p-8 flex flex-col justify-between rounded-2xl"> 
                <div className="flex gap-2">
                    <img src={"/code.svg"} alt="icon code"/>
                    <p>Coding</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Python</h1>
                    <p>2 days ago</p>
                </div>
            </div>

            <div className="bg-pink-100 h-72 p-8 flex flex-col justify-between rounded-2xl"> 
                <div className="flex gap-2">
                    <img src={"/palette.svg"} alt="icon palette"/>
                    <p>Design</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold">Sketch</h1>
                    <p>4 days ago</p>
                </div>
            </div>
        </div>
    </div>
    )
}