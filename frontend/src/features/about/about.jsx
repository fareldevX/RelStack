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
              <h2 className="text-lg font-semibold text-primary-text uppercase tracking-wider">
                About Me
              </h2>
              <p className="text-sm text-secondary-text leading-relaxed text-justify">
                Siswa kompetensi keahlian Teknik Jaringan Komputer yang berfokus
                sebagai Full-Stack Web Developer. Berpengalaman dalam membangun
                antarmuka frontend dinamis menggunakan React serta merancang
                sistem backend berskala besar dengan Express.js dan runtime Bun.
                Memiliki pemahaman kuat mengenai arsitektur kode yang bersih
                (clean code) dan pengelolaan infrastruktur Linux Server.
                Berkomitmen mengaplikasikan keterampilan teknis ini dalam
                program magang atau posisi entry-level di industri teknologi.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-primary-text uppercase tracking-wider">
                Education
              </h2>

              <div className="flex flex-col min-[480px]:flex-row gap-1 min-[480px]:gap-4 text-sm font-semibold text-primary">
                <p>2024 - Present</p>
                <div>
                  <p>SMK Negeri 1 Adiwerna</p>
                  <span className="font-normal text-secondary-text">
                    Teknik Jaringan dan Komputer
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-accent dark:bg-slate-900 text-inverse-primary dark:text-accent rounded-lg shadow-lg hover:bg-white dark:hover:bg-accent hover:text-accent dark:hover:text-slate-900 hover:-translate-y-2 transition-all duration-600"
              >
                <LuInstagram size={22} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-accent dark:bg-slate-900 text-inverse-primary dark:text-accent rounded-lg shadow-lg hover:bg-white dark:hover:bg-accent hover:text-accent dark:hover:text-slate-900 hover:-translate-y-2 transition-all duration-600"
              >
                <LuLinkedin size={22} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-accent dark:bg-slate-900 text-inverse-primary dark:text-accent rounded-lg shadow-lg hover:bg-white dark:hover:bg-accent hover:text-accent dark:hover:text-slate-900 hover:-translate-y-2 transition-all duration-600"
              >
                <LuMail size={22} />
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-primary-text tracking-wider uppercase">
              Technical Skill
            </h2>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              {icons.map((icon, index) => {
                const Icon = icon;

                return (
                  <div
                    key={index}
                    className="w-14 h-14 flex items-center justify-center bg-accent active:bg-white dark:bg-slate-900 dark:active:bg-white text-inverse-primary active:text-accent dark:text-accent dark:active:text-slate-900 rounded-lg shadow-lg hover:bg-white dark:hover:bg-accent hover:text-accent dark:hover:text-slate-900 hover:-translate-y-2 active:-translate-y-2 transition-all duration-600"
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
