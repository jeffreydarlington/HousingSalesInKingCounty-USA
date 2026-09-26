import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {

    const frontendSkills = [
        "React", 
        "TypeScript", 
        "Vercel/Netlify", 
        "Redux" , 
        "Next.js", 
        "TailwindCSS"];
    
    const backendSkills = [
        "Node.js",
        "AWS",
        "MongoDB",
        "CRUD"
    ]
    return <section id="about" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
            </h2>

            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Upcoming developer learning different expertise in building 
                    scalable web applications and creating innovative solutions.
                    Here are my skills.
                </p>
                <div className="grid grid-cols-1 md:grid-cools-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> FrontEnd</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) =>(
                                <span 
                                key={key}
                                    className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,2256,0.2)] transition
                                "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cools-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) =>(
                                <span 
                                key={key}
                                    className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bol mb-4">Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2" >
                        <strong>General Art Program</strong> - SenecaPolytechnic(2024-2025)
                        <li>Relevant CourseWork:</li>
                        <li>Web Programming Principles</li>
                        <li>Intro to Programming Using C</li> 
                        <li>Applied Problem Solving</li>
                        <li>Intro to Database Systems</li>
                        <li>Intro UNIX/Linux and Internet</li>
                        <li>Big Ideas in Philosophy</li>    
                        <li>Pysch of Learning and Careers</li>    
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bol mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4>In progress:</h4>
                            <p>
                           
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}