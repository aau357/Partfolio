import { AtSign, GitBranchPlus } from "lucide-react"
import Mephoto from "../assets/temp.jpg"
import { IconBrandInstagram } from "@tabler/icons-react"

const Home = () => {
    return (
        // maindiv
        <div className="md:flex md:items-center md:justify-center">
            <div className="p-5 md:flex lg:border lg:rounded-xl lg:w-250 lg:m-30 ">
                <div className="relative w-full lg:w-1/3">
                    <img className="w-full h-full  lg:rounded-2xl lg:w-50 lg:right-5 "

                        src={Mephoto}
                        alt="ilustratsiya" />
                    <div className="absolute inset-0 bottom-0  top-70 bg-gradient-to-t from-black/100 via-black/85 to-transparent lg:hidden"></div>
                    <div className="absolute bottom-4 left-4 text-white lg:hidden">
                        <p className="text-sm opacity-80 lg:hidden">Hi, I am</p>
                        <h2 className="text-xl font-bold lg:hidden">Alimardon Ashurboyev</h2>
                        <p className="text-xs opacity-70 lg:hidden">Frontend Developer</p>
                    </div>
                    <div className="lg:hidden ">
                        <div className="absolute bottom-4 right-4 flex gap-2 ">

                            <a className="w-8 h-8 rounded-full bg-white/90 text-blue-950 " href="https://github.com/aau357"><GitBranchPlus className="absolute bottom-1 left-1" /></a>
                            <a className="w-8 h-8 bg-white/90 rounded-full text-blue-950" href="https://t.me/milliydevoloper">  <AtSign className="absolute bottom-1 right-1" /></a>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1">
                    <div className="mt-5 lg:mt-0 lg:w-2/3 flex items-center">
                        <p className="text-2xl lg:text-4xll">
                            You can see in this portfolio my activities.
                        </p>
                    </div>

                    {/* for icon */}
                    <div>
                     <h1 className="">   <IconBrandInstagram stroke={2} /> </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home