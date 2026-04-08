import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary",
  size = "sm",
  className = "",
  ...props
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
