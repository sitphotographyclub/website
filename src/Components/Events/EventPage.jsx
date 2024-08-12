export const EventPageComp = ({ title, image, des, location, date, timing, rules }) => {
    return (
        <div className="relative min-h-screen bg-black p-6 flex justify-center z-0">
            <div className="max-w-6xl w-full bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                <div className="lg:flex">
                    <div className="w-full lg:w-2/3">
                        <img 
                            src={image} 
                            alt="Event" 
                            className="w-full h-auto rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                        />
                    </div>
                    <div className="w-full lg:w-1/3 p-6 bg-gray-900">
                        <h1 className="text-2xl font-bold mb-2 text-white">{title}</h1>
                        <p className="text-sm text-gray-400 mb-4">SIT Photography Club</p>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400">{date}</p>
                            <p className="text-sm text-gray-400">{timing}</p>
                        </div>
                        
                        <div className="flex items-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-m text-gray-300">{location}</p>
                        </div>
                        <button className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-500 transition-colors duration-300 ease-in-out mb-6">Register Now</button>
                    </div>
                </div>
                <div className="p-6 bg-gray-900">
                    <div className="md:flex justify-between">
                        <div className="w-full md:w-2/3 pr-6">
                            <h2 className="text-2xl font-bold mb-2 text-white">Event Description</h2>
                            <p className="text-sm text-gray-300 mb-4">{des}</p>
                            <h2 className="text-xl font-bold mb-2 text-white">Rules</h2>
                            <ul className="list-disc pl-6">
                                {rules.map((rule, index) => (
                                    <li key={index} className="text-sm text-gray-300 mb-2">{rule}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/3 md:px-10">
                            <h3 className="text-lg font-bold mb-2 text-white">Hosted by</h3>
                            <div className="flex items-center">
                                <img src="https://example.com/host-avatar.jpg" alt="club logo" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="text-sm text-gray-300 font-bold">SIT Photography Club</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};