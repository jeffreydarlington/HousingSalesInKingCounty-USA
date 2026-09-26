import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () =>{
    return (
    <section id="projects" className="min-h-screen flex item-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent text-center"> 
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Weather App</h3>
                    <p className="text-gray-400 mb-4">
                    This is a simple Weather App that allows users to fetch current weather data and a 24-hour forecast for a specified city using the OpenWeatherMap API.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML","JavaScript","CSS"].map((tech, key)=>(
                            <span 
                            key={key}
                                className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/jeffreydarlington/WeatherApp" 
                        className="text-red-400 hover:text-yellow-300 transition-colors my-4"
                        >View Project → {""}</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Landing Page</h3>
                    <p className="text-gray-400 mb-4">
                    This project is a responsive and stylish login page. The page includes both Sign Up and Sign In forms, with smooth transitions and social media login options. The design is user-friendly and adapts well to different screen sizes.                    </p>
                    <div>
                        {["HTML","JavaScript","CSS"].map((tech, key)=>(
                            <span 
                            key={key}
                                className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/jeffreydarlington/Landing_Pages" 
                        className="text-red-400 hover:text-yellow-300 transition-colors my-4"
                        >View Project → {""}</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Digital Clock</h3>
                    <p className="text-gray-400 mb-4">
                    This project is a simple digital clock that displays the current time with hours, minutes, and seconds. The clock is designed with a modern UI, using HTML, CSS, and JavaScript. It updates every second to reflect the real-time clock.                    </p>
                    <div>
                        {["HTML","JavaScript","CSS"].map((tech, key)=>(
                            <span 
                            key={key}
                                className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/jeffreydarlington/DigitalClock" 
                        className="text-red-400 hover:text-yellow-300 transition-colors my-4"
                        >View Project → {""}</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">To-Do List App</h3>
                    <p className="text-gray-400 mb-4">
                    A simple to-do list application built using HTML, CSS, and JavaScript.</p>
                    <div>
                        {["HTML","JavaScript","CSS"].map((tech, key)=>(
                            <span 
                            key={key}
                                className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/jeffreydarlington/To-Do-List-App" 
                        className="text-red-400 hover:text-yellow-300 transition-colors my-4"
                        >View Project → {""}</a>
                    </div>
                </div>
                
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">ThemeSwitcher</h3>
                    <p className="text-gray-400 mb-4">
                    A simple JavaScript project that allows users to toggle between Light Mode and Dark Mode using a slider switch.
                    The selected theme is saved using localStorage, so it persists across page reloads.                    </p>
                    <div>
                        {["HTML","JavaScript","CSS"].map((tech, key)=>(
                            <span 
                            key={key}
                                className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/jeffreydarlington/ThemeSwitcher" 
                        className="text-red-400 hover:text-yellow-300 transition-colors my-4"
                        >View Project → {""}</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">Simple Banking System</h3>
                    <p className="text-gray-400 mb-4">
                    This is a simple C++ Bank Account Management System that allows users to create an account, log in, deposit and withdraw money, and view transaction history. The system supports both credit and debit accounts.                    </p>
                    <div>
                        {["C++","STL","Regex","ctime","cstring"].map((tech, key)=>(
                            <span 
                            key={key}
                                className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/jeffreydarlington/SimpleBanckAccountSystem" 
                        className="text-red-400 hover:text-yellow-300 transition-colors my-4"
                        >View Project → {""}</a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    <h3 className="text-xl font-bold mb-2">CPU_Simulator</h3>
                    <p className="text-gray-400 mb-4">
                    A virtual CPU simulator written in C++ that can execute simple assembly-like programs. This educational tool demonstrates fundamental CPU concepts including instruction execution, register management, memory operations, and program flow control.                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["C++"].map((tech, key)=>(
                            <span 
                            key={key}
                                className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                            "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/jeffreydarlington/CPU_Simulator" 
                        className="text-red-400 hover:text-yellow-300 transition-colors my-4"
                        >View Project → {""}</a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>)
}