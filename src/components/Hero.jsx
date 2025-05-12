import 'boxicons/css/boxicons.min.css';
import Spline from "@splinetool/react-spline";

const Hero = () => {
    return (
        <main className="relative flex flex-col justify-between h-full min-h-screen px-4 md:px-12 py-10 overflow-hidden bg-[#0a1122]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                {/* Using inline styles as a fallback if image path is problematic */}
                <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: "url('/assets/background.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.7
                    }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>

                {/* Abstract Shape Elements */}
                <div className="absolute top-1/4 -left-20 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Main Section */}
            <div className="flex flex-col lg:flex-row items-start gap-10 m-0 p-0">
                {/* Text Content */}
                <div
                    data-aos="fade-right"
                    className="z-10 flex flex-col gap-6 max-w-full md:max-w-[600px]"
                >
                    <div className="introducing-container w-[230px] md:w-[300px] h-[33px] flex items-center justify-center">
                        <div className="flex items-center gap-2">
                            <i className="bx bxs-star-half text-violet-400"></i>
                            <span className="text-sm font-medium tracking-wider">Developer Portfolio</span>
                        </div>
                    </div>

                    <div className="leading-relaxed">
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 via-violet-600 to-white bg-clip-text text-transparent drop-shadow-sm">
                            Profile
                        </h1>
                        <p className="max-w-[90vw] md:max-w-[450px] text-sm md:text-base text-gray-200">
                            An enthusiastic IT professional with 5 years of experience in the industry,
                            committed to continuously learning new technologies and developing skills
                            in Software and Web Development to drive project success and enhance team performance with  Languages: JavaScript,TypeScript,Express.Js, Python,SQL,HTML5,CSS,Bootstrap,Tailwind,Git.Tools: GitHub,VsCode,PyCharm,MySQL,SQLite,MongoDB,PostgreSQL,AWS SageMaker,TaskMonk,Datasaur,Appen.
                            Development: Node.js,Nest.js,Django,Flask,Pytest,Postman.
                        </p>
                    </div>
                </div>

                {/* 3D Animation - pushed more to the right */}
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    className="w-full lg:w-[65%] max-h-[600px] h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden flex items-center justify-end lg:pr-8"
                >
                    <Spline scene="https://prod.spline.design/xPu89kVWaairajDK/scene.splinecode" />
                </div>
            </div>
            <div className='mt-auto '>
                <h1 className='lg:text-9xl md:text-8xl text-3xl font-extrabold mb-8 tracking-wider text-center bg-gradient-radial from-white to-gray-700 bg-clip-text text-transparent [@media(max-width:380px)]:mb-2 *:'>
                    WEB DEVELOPER
                </h1>
                <p className="text-center text-base md:text-lg text-white tracking-widest uppercase -mt-2 font-bold drop-shadow-md">
                        Frontend & Backend Solutions
                    </p>
                {/* Tech stack icons - maximum visibility */}
                    <div className="flex justify-center gap-8 mt-6 text-white text-3xl">
                        <i className="bx bxl-react hover:text-blue-400 transition-colors cursor-pointer drop-shadow-md"></i>
                        <i className="bx bxl-javascript hover:text-yellow-400 transition-colors cursor-pointer drop-shadow-md"></i>
                        <i className="bx bxl-nodejs hover:text-green-400 transition-colors cursor-pointer drop-shadow-md"></i>
                        <i className="bx bxl-css3 hover:text-blue-500 transition-colors cursor-pointer drop-shadow-md"></i>
                        <i className="bx bxl-html5 hover:text-orange-500 transition-colors cursor-pointer drop-shadow-md"></i>
                    </div>

            </div>
            
            
            
        </main >
    );
};

export default Hero;