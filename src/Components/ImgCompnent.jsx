export const ImgComponent = ({ img, text, subText }) => {
    return (
        <div className="relative h-3/4 overflow-hidden">

            <img src={img} alt="img" className="w-full h-full object-cover rounded-lg" />

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent"></div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h2 className="text-3xl font-bold text-white font-serif">{text}</h2>
                <p className="font-mono text-gray-50">{subText}</p>
            </div>
        </div>
    );
};
