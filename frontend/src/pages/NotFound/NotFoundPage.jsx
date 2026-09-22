import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-6 py-24 sm:px-10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="w-full max-w-2xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
          Error 404
        </p>
        <h1 className="font-portfolio text-6xl font-extrabold leading-none text-primary dark:text-surface sm:text-8xl">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-secondary dark:text-secondary-dark sm:text-base">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-md bg-accent px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent/80"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
