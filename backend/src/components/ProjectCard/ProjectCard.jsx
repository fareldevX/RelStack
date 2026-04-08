import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

function ProjectCard({ project }) {
  const { project_name, imageUrl, brief_description, tech_stack } = project;

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={imageUrl} alt={project_name} />
      </div>

      <div className={styles.cardDescription}>
        <h3>{project_name}</h3>
        <p>{brief_description}</p>

        <div className={styles.techStack}>
          {tech_stack.map((stack, index) => (
            <span key={index} className={styles.badge}>
              {stack}
            </span>
          ))}
        </div>
      </div>

      <Link to={`/projects/${project._id}`} className={styles.details}>
        <span>View Details</span>
        <FiArrowRight size={16} />
      </Link>
    </div>
  );
}

export default ProjectCard;
