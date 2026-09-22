import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function ContactFooter() {
  const navigate = useNavigate();

  return (
    <div className="mt-8 flex items-center justify-center">
      <button
        type="button"
        onClick={() =>
          navigate("/", {
            replace: false,
            state: { fromOutsideHome: true },
          })
        }
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-surface hover:text-accent transition-colors cursor-pointer"
      >
        <FiArrowLeft size={16} />
        Back to Home
      </button>
    </div>
  );
}

export default ContactFooter;
