import { useState } from "react";
import Reveal from "./Reveal";

const inputClasses =
  "mt-1 block w-full rounded-lg border border-line dark:border-line-dark bg-surface-elevated dark:bg-surface-dark text-navy dark:text-body-dark shadow-sm px-3 py-2 focus:border-accent-text dark:focus:border-accent-dark focus:ring-2 focus:ring-accent-text dark:focus:ring-accent-dark focus:outline-none transition-colors duration-200";

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xblrvkvn", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Thanks for your submission!");
        form.reset();
      } else {
        setFormStatus("Oops! There was a problem submitting your form");
      }
    } catch {
      setFormStatus("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 rounded-2xl bg-surface-elevated dark:bg-surface-dark-elevated shadow-xl shadow-navy/5 dark:shadow-none border border-transparent dark:border-line-dark px-4 py-6 md:px-6 md:py-7 lg:px-10 lg:py-14"
    >
      <Reveal>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold font-playFair text-navy dark:text-body-dark">
          Contact <span className="italic">Me</span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 font-lato lg:mt-10 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-medium text-body dark:text-body-dark">
                Name
              </label>
              <input type="text" id="name" name="name" required className={inputClasses} />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-body dark:text-body-dark">
                Email
              </label>
              <input type="email" id="email" name="email" required className={inputClasses} />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-body dark:text-body-dark">
              Subject
            </label>
            <input type="text" id="subject" name="subject" required className={inputClasses} />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-body dark:text-body-dark">
              Message
            </label>
            <textarea id="message" name="message" rows="4" required className={inputClasses}></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-navy dark:text-surface-dark bg-accent hover:-translate-y-0.5 hover:shadow-lg shadow-sm shadow-accent/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-text dark:focus:ring-accent-dark"
            >
              Send Message
            </button>
          </div>

          {formStatus && (
            <div
              className={`text-center text-sm font-medium ${
                formStatus.includes("Oops") ? "text-red-600 dark:text-red-400" : "text-accent-text dark:text-accent-dark"
              }`}
            >
              {formStatus}
            </div>
          )}
        </form>
      </Reveal>
    </section>
  );
}

export default Contact;
