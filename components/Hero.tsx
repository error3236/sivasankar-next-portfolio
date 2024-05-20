import { FaLocationArrow } from "react-icons/fa"
import ShimmerButton from "./Ui/ShimmerButton"
import { Spotlight } from "./Ui/Spotlight"
import { TextGenerateEffect } from "./Ui/TextGenerateEffect"
import { FlipWords } from "./Ui/FlipWords"

const Hero = () => {
    return (
        <section id="hero">
            <div className="pb-20 pt-36">
                <div>
                    <Spotlight
                        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                        fill="white"
                    />
                    <Spotlight
                        className="h-[80vh] w-[50vw] top-10 left-full"
                        fill="purple"
                    />
                    <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
                </div>
                <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>
                <div className="flex justify-start items-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-start justify-start">
                        <h2 className="uppercase tracking-widest text-xs text-start text-blue-100 max-w-80">(ᗒᗣᗕ)՞</h2>
                        <TextGenerateEffect className="text-start text-[40px] md:text-5xl lg:text-6xl" words="Hi i'm Sivasankar" />
                        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                            Superhero approch to
                            <FlipWords  words={["MobileApps", "Web Apps", "Web Pages", "UI/UX Design", "Backend Api",]} />
                        </div>
                        <a href="#about" className="py-20"><ShimmerButton title="Let's Go!!" icon={<FaLocationArrow />} position="left" /> </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero