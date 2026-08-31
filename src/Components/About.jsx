import lap from "../assets/laptop.png";
import Reveal from "./Reveal";

const tools = ["AWS", "Figma", "Notion", "SQL", "A/B Testing", "Roadmapping"];

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 rounded-2xl bg-surface-elevated dark:bg-surface-dark-elevated shadow-xl shadow-ink/5 dark:shadow-none border border-transparent dark:border-line-dark px-4 py-6 md:px-6 md:py-7 lg:px-10 lg:py-14"
    >
      <Reveal>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold font-playFair text-ink dark:text-body-dark">
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
              I&apos;m Shubham Bhatia. I got into product for the control of it, the design, the
              implementation, the whole shape of a thing before someone else touches it. Spent four years
              in engineering school learning how things are built, then found out the more interesting
              question is why they break. I&apos;m the user first and the analyst second, and I&apos;ve
              never trusted a product I wouldn&apos;t use myself.
            </p>
            <p>
              2 years into doing this properly now, building product for a US healthcare platform. Cloud
              background, AWS, the usual technical scaffolding, but the actual job is smaller and uglier
              than that sounds. Tracing why a field came back wrong. Reading documentation nobody else will
              read. Sitting with something half-built until it isn&apos;t anymore. I&apos;d rather ship
              something badly and fix it in daylight than admire a roadmap for it.
            </p>
            <p>
              Outside of work, same restlessness, different plate, usually messing around in the kitchen
              with a recipe I haven&apos;t quite figured out, jazz on in the background. Stoic philosophy
              keeps me from losing my head when a product cycle goes sideways, which it always does
              eventually.
            </p>
            <p>
              Connect on LinkedIn or check GitHub for what I&apos;m currently building.
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li
                key={tool}
                className="text-xs font-lato font-medium px-3 py-1.5 rounded-full bg-surface border border-line text-ink dark:bg-surface-dark dark:border-line-dark dark:text-body-dark"
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
