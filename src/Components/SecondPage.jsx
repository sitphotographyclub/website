import { ImgComponent } from "./ImgCompnent"
import bridge from "/Home/images/bridge2.jpg"
import { Header } from "./Header"
export const SecondPage = () => {
    return (
        <div className="bg-neutral-800">
            <div className="container mx-auto px-4">
                <Header text="Our Photos an Arts" subText="This is my site" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-10 lg:grid-cols-4 lg:gap-6 lg:pt-20 sm:gap-4 md:gap-5">
                    <ImgComponent img={bridge} text={"Architecture"} subText={"The Bridge"}/>
                    <ImgComponent img={bridge} text={"Architecture"} subText={"The Bridge"}/>
                    <ImgComponent img={bridge} text={"Architecture"} subText={"The Bridge"}/>
                    <ImgComponent img={bridge} text={"Architecture"} subText={"The Bridge"}/>
                </div>
            </div>
        </div>
    )
}