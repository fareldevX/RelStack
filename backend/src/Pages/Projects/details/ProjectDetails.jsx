import { useParams, Link } from "react-router-dom";
import useProjectDetails from "../../../Hooks/useProjectDetails";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import Section from "../../../components/Section/Section";
import Container from "../../../components/Container/Container";
import Button from "../../../components/Button/Button";
import styles from "./ProjectDetails.module.css";

function ProjectDetails() {
  const { id } = useParams();

  const { projects: project, loading, error } = useProjectDetails(id);

  if (loading) {
    return (
      <div className="containerLoading">
        <div className="loading"></div>
        <p>Loading projects...</p>
      </div>
    );
  }

  if (error) {
    return (
      <p className={styles.error}>
        <span>Error:</span> {error}
      </p>
    );
  }

  if (!project) return <p className={styles.alert}>Project not found.</p>;

  const {
    project_name,
    imageUrl,
    complete_description,
    tech_stack,
    createdAt,
  } = project;

  return (
    <Section className={styles.projectDetailsSection}>
      <Container className={styles.projectDetails}>
        <div className={styles.projectHeader}>
          <h2>{project_name}</h2>
          <Link to="/" state={{ scrollTo: "projects" }}>
            <span>
              <FiArrowRight size={24} />
            </span>
          </Link>
        </div>

        <img
          src={imageUrl}
          alt={project_name}
          className={styles.projectDetailsImage}
        />

        <div className={styles.description}>
          <h3>About this project</h3>
          <p>{complete_description}</p>
          <h4>Tech Stack</h4>

          <div className={styles.techStack}>
            {tech_stack.map((stack, index) => (
              <span key={index} className={styles.badge}>
                {stack}
              </span>
            ))}
          </div>

          <div className={styles.buttons}>
            <Button variant="primary" size="md" className={styles.btn}>
              <FaGithub size={20} />
              <span>View on GitHub</span>
            </Button>
            <Button variant="secondary" size="md" className={styles.btn}>
              <FiExternalLink size={20} />
              <span>Live Demo</span>
            </Button>
          </div>

          <span className={styles.createdAt}>Created At: {createdAt}</span>
        </div>
      </Container>
    </Section>
  );
}

export default ProjectDetails;
