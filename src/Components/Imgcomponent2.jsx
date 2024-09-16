export const ImgComponent2 = ({ img, text, subText, des }) => {
    return <div>
        <div className="relative h-3/4 overflow-hidden">
            <img src={img} alt="img" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-100"></div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h2 className="text-3xl font-bold text-white font-serif">{text}</h2>
                <p className="text text-gray-50 font-serif">{subText}</p>
            </div>
        </div>
        <div className="pt-8">
            <p className=" lg:px-28 text-lg text-gray-100 text-center">{des}</p>
        </div>
    </div>
}