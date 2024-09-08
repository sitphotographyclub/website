import { Header } from "./Header"
import { ImgComponent2 } from "./Imgcomponent2"
import Img1 from "/Home/Slider/7.jpeg"
import Img2 from "/Home/Slider/11.png"
export const ThirdPage = () => {
    return <div className="bg-neutral-800">
        <div className="container mx-auto px-4">
            <Header text="classes" subText="Learn from the best photographers in the world" />
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 lg:pt-20">
                <ImgComponent2 img={Img1} text="classes" subText="The Creator Of World" des={"This is the best teacher in the world and you can not find bettwr than this anywhere"} />
                <ImgComponent2 img={Img2} text="classes" subText="Learn from the best photographers in the world" des={"This is the best teacher in the world and you can not find better than this anywhere"} />
            </div>
        </div>
    </div>
}