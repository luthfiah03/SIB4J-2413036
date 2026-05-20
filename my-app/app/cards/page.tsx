export default function Cards() {
    return (
            <div className="bg-gray-300 h-screen p-2 gap-6 flex items-center justify-center">
                    <div className="bg-gray-100 w-75 p-4 rounded-2xl">     
                        <div className="bg-blue-100 flex flex-col gap-4 p-6 rounded-2xl">
                        <h1 className="text-2xl font-bold">Web Design</h1>
                        <p>Crafts engaging, user-friendly websites.</p>
                        <div className="flex flex-wrap gap-2 w-40">
                            <div className="bg-blue-200 p-1 text-xs rounded-2xl">Landing Page</div>
                            <div className="bg-blue-200 p-1 text-xs rounded-2xl">Website</div>
                            <div className="bg-blue-200 p-1 text-xs rounded-2xl">One Page</div>
                        </div>
                        </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="text-xl font-bold">Explore</h2>
                                <img src={"/arrow-narrow-right.svg"} alt="icon arrow-narrow-right"/>
                            </div>
                    </div>
                       
                       
                    <div className="bg-gray-100 w-75 p-4 rounded-2xl"> 
                        <div className="bg-orange-100 flex flex-col gap-4 p-6 rounded-2xl">
                        <h1 className="text-2xl font-bold">Graphic Design</h1>
                        <p>Crafts engaging, user-friendly websites.</p>
                        <div className="flex gap-2 flex-wrap w-50">
                            <div className="bg-orange-200 p-1 text-xs rounded-2xl">Packaging</div>
                            <div className="bg-orange-200 p-1 text-xs rounded-2xl">Brand Identity</div>
                            <div className="bg-orange-200 p-1 text-xs rounded-2xl">Illustrations</div>
                            <div className="bg-orange-200 p-1 text-xs rounded-2xl">Logo</div>
                            <div className="bg-orange-200 p-1 text-xs rounded-2xl">Signage</div>
                        </div>
                        </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="text-xl font-bold">Explore</h2>
                                <img src={"/arrow-narrow-right.svg"} alt="icon arrow-narrow-right"/>
                            </div>
                    </div>

                        
                    <div className="bg-gray-100 w-75 p-4 rounded-2xl"> 
                        <div className="bg-purple-100 flex flex-col gap-4 p-6 rounded-2xl">
                        <h1 className="text-2xl font-bold">Developers</h1>
                        <p>Build Functional and scalable solutions</p>
                        <div className="flex gap-2 flex-wrap">
                            <div className="bg-purple-200 p-1 text-xs rounded-2xl">Web Application</div>
                            <div className="bg-purple-200 p-1 text-xs rounded-2xl">Mobile Apps</div>
                            <div className="bg-purple-200 p-1 text-xs rounded-2xl">Database</div>
                            <div className="bg-purple-200 p-1 text-xs rounded-2xl">Add-ons</div>
                        </div>
                        </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="text-xl font-bold">Explore</h2>
                                <img src={"/arrow-narrow-right.svg"} alt="icon arrow-narrow-right"/>
                            </div>
                    </div>


                    <div className="bg-gray-100 w-75 p-4 rounded-2xl"> 
                        <div className="bg-green-100 flex flex-col gap-4 p-6 rounded-2xl">
                        <h1 className="text-2xl font-bold">Copywriting</h1>
                        <p>Delivers persuasive and creative content.</p>
                        <div className="flex gap-2 flex-wrap w-40">
                            <div className="bg-green-200 p-1 text-xs rounded-2xl">Blog Posts</div>
                            <div className="bg-green-200 p-1 text-xs rounded-2xl">Video Scripts</div>
                            <div className="bg-green-200 p-1 text-xs rounded-2xl">Sales Pages</div>
                            <div className="bg-green-200 p-1 text-xs rounded-2xl">Slogans</div>
                        </div>
                        </div>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="text-xl font-bold">Explore</h2>
                                <img src={"/arrow-narrow-right.svg"} alt="icon arrow-narrow-right"/>
                            </div>
                    </div>
            </div>
    
        );
    }