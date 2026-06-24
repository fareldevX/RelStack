function Button({
  children,
  variant = "primary",
  size = "sm",
  className = "",
  ...props
}) {
  const baseClass =
    "cursor-pointer rounded-md border-none font-medium transition-colors duration-200";
  const variantClass = {
    primary: "bg-accent text-inverse-primary hover:bg-accent/80",
    secondary:
      "bg-[var(--btn-bg-secondary)] text-[var(--btn-text-secondary)] hover:bg-[var(--btn-bg-secondary-hover)]",
  };
  const sizeClass = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-5 py-3.5 text-lg",
  };

  return (
    <button
      className={`${baseClass} ${variantClass[variant] ?? variantClass.primary} ${sizeClass[size] ?? sizeClass.sm} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
