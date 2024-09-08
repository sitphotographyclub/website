import { ImgComponent } from "./ImgCompnent"
import bridge from "/Home/images/bridge2.jpg"
import Img1 from "/Home/Slider/3.jpeg"
import Img2 from "/Home/Slider/5.jpeg"
import Img3 from "/Home/Slider/10.png"
import Img4 from "/Home/Slider/9.png"

import { Header } from "./Header"
export const SecondPage = () => {
    return (
        <div className="bg-neutral-800">
            <div className="container mx-auto px-4">
                <Header text="Through the Lens" subText="Capturing Moments, Telling Stories" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 lg:grid-cols-4 lg:gap-6 lg:pt-20 sm:gap-4 md:gap-5">
                    <ImgComponent img={Img1} text={"Kumartuli"} subText={"Durga Thakur"}/>
                    <ImgComponent img={Img2} text={"Spider"} subText={"The Snow"}/>
                    <ImgComponent img={Img3} text={"Plants"} subText={"Nature"}/>
                    <ImgComponent img={Img4} text={"Reality"} subText={"Of World"}/>
                </div>
            </div>
        </div>
    )
}