export const EventCard = ({ title, image, des, location, date }) => {
    return (
        <div>
            <ul>
                <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
                    <div className="relative w-full aspect-video">
                        <img
                            className="rounded w-full h-full object-cover"
                            src={image}
                            alt="Writey A.I"
                            loading="lazy"
                        />

                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                            <h2 className="text-xl font-semibold">{title}</h2>
                            <p className="font-medium text-sm">{location}</p>
                            <p className="text-xs text-gray-200 pb-0 pt-1">{date}</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
                        <p className="text-gray-600 two-lines">{des}</p>

                        <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li
                                title="Pricing type"
                                className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                            >
                                <div>know more..</div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};