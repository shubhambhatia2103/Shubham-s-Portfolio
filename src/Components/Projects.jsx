import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import project1 from "../assets/project 1.jpg";
import pr2 from "../assets/project 2.jpg";
import pr3 from "../assets/project 3.jpg";
import pr4 from "../assets/project 4.jpg";
import Reveal from "./Reveal";

const projects = [
  {
    title: "Community Connect App",
    image: project1,
    tags: ["Figma", "Wireframing", "PRD", "Notion"],
    github: "https://github.com/shubhambhatia2103/Build-a-Virtual-Private-Cloud",
    medium:
      "https://medium.com/@shubhambhatia2103/building-the-community-connect-app-applying-product-sense-and-strategy-df1eecbc64bb",
    description:
      "Led the development of a mobile platform to boost resident engagement, with features like a maintenance tracker and event calendar. Created wireframes in Figma and a PRD in Notion, resulting in a 40% faster maintenance response, 20% higher event participation, and 25% better operational efficiency.",
  },
  {
    title: "Netflix Catalog Trends Visualization",
    image: pr2,
    tags: ["AWS", "S3 Buckets", "Amazon QuickSight"],
    github: "https://github.com/shubhambhatia2103/Visualize-data-with-AWS-QuickSight",
    medium:
      "https://medium.com/@shubhambhatia2103/unlocking-insights-visualizing-netflixs-content-trends-with-amazon-quicksight-2df068443708",
    description:
      "Explored Amazon QuickSight, a powerful business analytics service provided by AWS, to visualize and analyze Netflix's catalog trends. This hands-on experience allowed me to delve into data-driven decision-making by creating insightful visualizations.",
  },
  {
    title: "Conversational Chatbot - Groq API Chat Assistant",
    image: pr3,
    tags: ["Streamlit", "NLP", "Groq API", "LangChain", "LLM"],
    github: "https://github.com/shubhambhatia2103/Conversational-Chatbot-Groq",
    medium:
      "https://medium.com/@shubhambhatia2103/building-a-conversational-chatbot-with-groq-and-langchain-a-step-by-step-guide-cb6fc9895dc0",
    description:
      "A Streamlit-based app that allows users to interact with a conversational chatbot powered by the LangChain API. The application uses the Groq API to generate responses and maintains a history of the conversation to provide context for the chatbot's responses.",
  },
  {
    title: "AWS Virtual Cloud Architect",
    image: pr4,
    tags: ["AWS", "VPC", "Subnet Management", "Security Group Configuration"],
    github: "https://github.com/shubhambhatia2103/Build-a-Virtual-Private-Cloud",
    medium:
      "https://medium.com/@shubhambhatia2103/creating-a-secure-and-scalable-vpc-a-product-managers-perspective-9033fd7d580f",
    description:
      "Designed a Virtual Private Cloud (VPC) on AWS, creating a public subnet with automatic IP assignment for accessible EC2 instances. Also attached an internet gateway to enable seamless internet traffic flow, deepening my understanding of cloud infrastructure and networking.",
  },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-6 md:py-7 lg:py-14">
      <Reveal>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold font-playFair text-ink dark:text-body-dark">
          Projects
        </h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 4) * 0.08}>
            <div className="group flex h-full flex-col gap-3 rounded-2xl bg-surface-elevated dark:bg-surface-dark-elevated border border-transparent dark:border-line-dark shadow-lg shadow-ink/5 dark:shadow-none px-5 py-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-caramel/20">
              <div className="h-36 w-full overflow-hidden rounded-lg flex items-center justify-center bg-surface dark:bg-surface-dark">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-lato text-lg font-semibold text-ink dark:text-body-dark">
                {project.title}
              </h3>
              <ul className="flex flex-wrap items-center gap-2 text-xs">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-surface border border-line dark:bg-surface-dark dark:border-line-dark px-2 py-1 text-ink dark:text-body-dark font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="flex-1 text-justify font-lato text-sm text-body dark:text-muted-dark">
                {project.description}
              </p>
              <div className="flex items-center gap-4 pt-1 text-lg text-body dark:text-muted-dark">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="hover:text-caramel-text dark:hover:text-caramel-dark transition-colors duration-200"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} write-up on Medium`}
                  className="hover:text-caramel-text dark:hover:text-caramel-dark transition-colors duration-200"
                >
                  <FaMedium />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
