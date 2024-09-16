export const Header = ({text, subText}) => {
    return (
        <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-6xl font-sans font-bold text-white pt-2 pb-2">{subText}</div>
        </div>
    )
}