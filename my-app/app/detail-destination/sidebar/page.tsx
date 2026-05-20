export default function sidebar () {
    return (
        <div className="h-screen flex">
            <div className="w-full  bg-black p-4 h-full">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <div className="bg-blue-600 px-3 flex items-center justify-center rounded">
                            <img src="square-chevrons-up.svg"/>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-white">
                        Acme Inc
                    </h2>
                    <p className="text-sm text-white font-sans">
                        Enterprise
                    </p>
                </div>
            </div>
        </div>
    )
}