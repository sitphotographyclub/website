export const Header = ({text, subText}) => {
    return (
        <div className="text-center">
            <div className="text-xl font-light text-gray-100 font-mono">{subText}</div>
            <div className="text-4xl md:text-4xl lg:text-5xl text-white">{text}</div>
        </div>
    )
}