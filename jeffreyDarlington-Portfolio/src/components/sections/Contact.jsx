import { useForm, ValidationError } from "@formspree/react";
import { RevealOnScroll } from "../RevealOnScroll";
import { SocialIcon } from "react-social-icons";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xvgqrnpp");

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          {state.succeeded ? (
            <p className="text-green-400 text-center">
              Thanks for your message!
            </p>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-100 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5"
                  placeholder="Name..."
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-100 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5"
                  placeholder="example@gmail.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-100 bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-500 focus:bg-yellow-500/5"
                  placeholder="Your Message..."
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.4)]"
              >
                Send Message
              </button>
            </form>
          )}

          <h2 className="text-3xl font-bold mt-16 mb-8 bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent text-center">
            Social
          </h2>

          <div className="flex justify-center gap-4 mt-10 mb-6 flex-wrap">
            {[
              {
                network: "github",
                url: "https://github.com/jeffreydarlington",
              },
              {
                network: "linkedin",
                url: "https://www.linkedin.com/in/jeffrey-darlington/",
              },
              { network: "twitter", url: "https://x.com/Jeffdton" },
            ].map((social, index) => (
              <div
                key={index}
                className="p-1 rounded-full bg-gradient-to-r from-red-500 to-yellow-400"
              >
                <div className="bg-black rounded-full p-1">
                  <SocialIcon
                    network={social.network}
                    url={social.url}
                    target="_blank"
                    bgColor="transparent"
                    fgColor="#ffffff"
                    style={{ height: 36, width: 36 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
