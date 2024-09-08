import { Header } from "./Header"
import { ImgComponent2 } from "./Imgcomponent2"
import Img1 from "/Home/Slider/7.jpeg"
import Img2 from "/Home/Slider/11.png"
export const ThirdPage = () => {
    return <div className="bg-neutral-800">
        <div className="container mx-auto px-4">
            <Header text="Capturing Life's Art" subText="Join Us in Capturing Life’s True Essence" />
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 lg:pt-20">
                <ImgComponent2 img={Img1} text="Divine Imagery" subText="The Spirit of Creation" des={"A stunning glimpse into the divine realm, where tradition and creativity come together to form powerful visual stories."} />
                <ImgComponent2 img={Img2} text="Soulful Moments" subText="Expressions of Wisdom" des={"A captivating portrayal of wisdom and experience, frozen in time and brought to life through the lens of photography."} />
            </div>
        </div>
    </div>
}