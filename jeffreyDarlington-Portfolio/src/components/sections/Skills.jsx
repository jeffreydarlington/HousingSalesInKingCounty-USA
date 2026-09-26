import { RevealOnScroll } from "../RevealOnScroll"

export const Skills = () => {
  return (
    <section id="Skills" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-yellow-300  bg-clip-text text-transparent text-center">
            Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Data & Analytics */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Data & Analytics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python (Pandas, NumPy)",
                  "SQL",
                  "Excel",
                  "Power BI / Tableau",
                  "APIs",
                  "Data Cleaning",
                  "Visualization"
                ].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span> 
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "TailwindCSS",
                  "Next.js",
                  "Redux",
                ].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "MongoDB",
                ].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other / Programming Foundations */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Programming Foundations</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "C++",
                  "OOP",
                  "Version Control (Git/GitHub)",
                  "Problem Solving",
                ].map((skill, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
