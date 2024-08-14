export const EventCard = ({ title, image, des, location, date }) => {
    return (
        <div className="p-4">
            <ul>
                <li className="relative bg-gray-900 flex flex-col justify-between border border-gray-700 rounded-lg shadow-lg hover:shadow-lg hover:shadow-teal-500 transition-shadow duration-300 ease-in-out">
                    <div className="relative w-full aspect-video">
                        <img
                            className="rounded-t-lg w-full h-full object-cover"
                            src={image}
                            alt={title}
                            loading="lazy"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent text-white">
                            <h2 className="text-2xl font-bold text-white">{title}</h2>
                            <p className="text-sm font-medium">{location}</p>
                            <p className="text-xs text-gray-400">{date}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-3 px-4 py-3 bg-gray-800 rounded-b-lg">
                        <p className="text-gray-300 two-lines">{des}</p>
                        <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li
                                title="Pricing type"
                                className="flex items-center cursor-pointer gap-1 bg-teal-600 text-white px-3 py-1 rounded-full hover:bg-teal-500 transition-colors duration-300 ease-in-out"
                            >
                                <div>Register Now</div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};