import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";

function ExperienceCard({ experience, index, isActive }) {
  const Icon = experience.icon;
  const isLeft = index % 2 === 0;

  const cardPlacement = isLeft
    ? "md:col-start-1 md:pr-8 md:text-right"
    : "md:col-start-2 md:pl-8 md:text-left";
  const cardState = isActive ? "-translate-y-1 shadow-lg" : "shadow-sm";

  return (
    <article
      className="relative grid grid-cols-[2rem_1fr] items-start gap-5 md:grid-cols-2 md:gap-16"
      data-experience-index={index}
    >
      <div className="relative z-10 col-start-1 row-start-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-page dark:border-page-dark bg-surface dark:bg-primary shadow-sm md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <div
          className={`h-2 w-2 rounded-full transition-all duration-500 ${
            isActive
              ? "scale-150 bg-accent"
              : "bg-secondary/50 dark:bg-secondary-dark/50"
          }`}
        />
      </div>

      <div
        className={`group col-start-2 row-start-1 rounded-xl border bg-surface dark:bg-primary p-5 transition-[border-color,box-shadow] duration-300 ease-out sm:p-7 border-color-border/70 dark:border-color-dark-border/70 ${cardPlacement} ${cardState}`}
      >
        <div
          className={`mb-5 flex items-center gap-3 ${isLeft ? "md:justify-end" : "md:justify-start"}`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-page text-accent dark:bg-page-dark">
            <Icon size={20} />
          </span>

          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary dark:text-secondary-dark">
            {experience.tag}
          </span>
        </div>

        <p className="mb-2 text-sm font-semibold text-accent">
          {experience.period}
        </p>

        <h3 className="font-portfolio text-xl font-bold text-primary dark:text-surface sm:text-2xl">
          {experience.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-secondary dark:text-secondary-dark">
          {experience.description}
        </p>

        {experience.action && (
          <div className="mt-6 border-t border-color-border/70 pt-3 dark:border-color-dark-border/70">
            <Link
              to={experience.action.href}
              className={`group/action inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-primary dark:hover:text-surface ${isLeft ? "flex-row-reverse" : ""}`}
            >
              {experience.action.label}

              <LuArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5"
              />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}

export default ExperienceCard;
