function NotificationItem({ type, message }) {
  const toneClass = {
    info: "bg-blue-500",
    success: "bg-green-500",
    error: "bg-red-500",
  };

  return (
    <div
      className={`min-w-70 rounded-xl px-4.5 py-3.5 text-sm text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-[slideIn_0.3s_ease-out] ${toneClass[type] ?? toneClass.info}`}
    >
      {message}
    </div>
  );
}

export default NotificationItem;
