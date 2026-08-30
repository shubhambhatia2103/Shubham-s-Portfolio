import lap from "../assets/laptop.png";
import Reveal from "./Reveal";

const tools = ["AWS", "Figma", "Notion", "SQL", "A/B Testing", "Roadmapping"];

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 rounded-2xl bg-surface-elevated dark:bg-surface-dark-elevated shadow-xl shadow-navy/5 dark:shadow-none border border-transparent dark:border-line-dark px-4 py-6 md:px-6 md:py-7 lg:px-10 lg:py-14"
    >
      <Reveal>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold font-playFair text-navy dark:text-body-dark">
          About <span className="italic">Me</span>
        </h2>
      </Reveal>

      <div className="mt-6 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 lg:mt-10">
        <Reveal delay={0.1} className="hidden lg:block lg:w-5/12">
          <img src={lap} alt="Shubham working" className="w-full h-auto object-cover" />
        </Reveal>

        <Reveal delay={0.15} className="lg:w-7/12">
          <div className="space-y-4 text-base/[22px] md:text-base/7 lg:text-lg text-justify font-lato text-body dark:text-muted-dark lg:space-y-6">
            <p>
              I&apos;m Shubham Bhatia, deeply passionate about product management and bridging technical
              expertise with user-centric design. Fully focused on building meaningful products, it&apos;s
              exciting to bring ideas to life—whether through feature prioritization, roadmapping, or A/B
              testing. Every decision is made with a keen appreciation for user experience, seamless
              functionality, and delivering meaningful value.
            </p>
            <p>
              The journey began in 2020, and over time, I&apos;ve grown into a role that aligns
              data-driven insights with product strategies. By leveraging strong cloud technologies like
              AWS and tools such as Figma, the aim is always to ensure a seamless connection between the
              technical and product sides. Now, with four years of relevant experience, the focus is on
              pushing boundaries to create products that are efficient, intuitive, and user-friendly.
            </p>
            <p>
              Outside of work, you can generally find me messing around in the kitchen trying out a new
              recipe or finding a just-so way to relax with some jazz playing in the background. I&apos;m
              also deeply inspired by stoic philosophy and find it really helps me stay grounded, which is
              a little bit of a lifesaver when it&apos;s crunch time with a product cycle. Feel free to
              connect with me on LinkedIn or check out my GitHub where I share my latest projects and
              ideas!
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li
                key={tool}
                className="text-xs font-lato font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent-text dark:bg-accent/10 dark:text-accent-dark"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
