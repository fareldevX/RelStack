import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import { LuInstagram, LuLinkedin, LuMail } from "react-icons/lu";
import {
  SiReact,
  SiZod,
  SiReacthookform,
  SiReactrouter,
  SiReactquery,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMongoose,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const icons = [
  SiReact,
  SiZod,
  SiReacthookform,
  SiReactrouter,
  SiReactquery,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMongoose,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
];

function AboutSection() {
  return (
    <Section id="about" className="scroll-m-14 sm:scroll-m-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 sm:gap-24">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-semibold text-primary dark:text-surface uppercase tracking-wider">
                About Me
              </h2>
              <p className="text-sm text-secondary dark:text-secondary-dark leading-relaxed text-justify">
                A student specializing in Computer Network Engineering focusing
                as a Full-Stack Web Developer. Experienced in building dynamic
                frontend interfaces using React and designing large-scale
                backend systems with Express.js and the Bun runtime. Has a
                strong understanding of clean code architecture and Linux server
                infrastructure management. Committed to applying these technical
                skills in an internship program or entry-level position in the
                tech industry.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-semibold text-primary dark:text-surface uppercase tracking-wider">
                Education
              </h2>

              <div className="flex flex-col min-[480px]:flex-row gap-1 min-[480px]:gap-4 text-sm font-semibold text-primary dark:text-surface">
                <p>2024 - Present</p>
                <div>
                  <p>SMK Negeri 1 Adiwerna</p>
                  <span className="font-normal text-secondary dark:text-secondary-dark">
                    Teknik Jaringan dan Komputer
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <a
                href="https://www.instagram.com/p4eel11"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-surface dark:bg-primary text-primary dark:text-surface rounded-lg shadow-lg hover:bg-primary dark:hover:bg-surface hover:text-surface dark:hover:text-primary hover:-translate-y-2 transition-all duration-500"
              >
                <LuInstagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/farel-arlish-orlando-8a5370399/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-surface dark:bg-primary text-primary dark:text-surface rounded-lg shadow-lg hover:bg-primary dark:hover:bg-surface hover:text-surface dark:hover:text-primary hover:-translate-y-2 transition-all duration-500"
              >
                <LuLinkedin size={22} />
              </a>
              <a
                href="mailto:farelarlishorlandoo@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-surface dark:bg-primary text-primary dark:text-surface rounded-lg shadow-lg hover:bg-primary dark:hover:bg-surface hover:text-surface dark:hover:text-primary hover:-translate-y-2 transition-all duration-500"
              >
                <LuMail size={22} />
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-base sm:text-lg font-semibold text-primary dark:text-surface tracking-wider uppercase">
              Technical Skill
            </h2>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {icons.map((icon, index) => {
                const Icon = icon;

                return (
                  <div
                    key={index}
                    className="w-14 h-14 flex items-center justify-center bg-surface dark:bg-primary text-primary dark:text-surface rounded-lg shadow-lg hover:bg-primary dark:hover:bg-surface hover:text-surface dark:hover:text-primary hover:-translate-y-2 transition-all duration-500"
                  >
                    <Icon size={32} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutSection;
