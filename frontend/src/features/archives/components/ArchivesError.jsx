function ArchivesError({ message }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className="text-secondary dark:text-secondary-dark">
        {message || "Something went wrong. Please try again."}
      </p>
    </div>
  );
}

export default ArchivesError;
