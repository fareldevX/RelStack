function Section({ id, ref, children, variant = "default", className }) {
  const variantClass = {
    default: "h-auto",
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`w-full py-8 min-[620px]:py-22 ${variantClass[variant] ?? variantClass.default} ${className ?? ""}`}
    >
      {children}
    </section>
  );
}

export default Section;
