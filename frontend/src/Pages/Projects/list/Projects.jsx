import { useState } from "react";
import useDebounce from "../../../Hooks/useDebounce";
import useProjects from "../../../Hooks/useProjects";
import { FiSearch } from "react-icons/fi";
import Section from "../../../components/Section/Section";
import Container from "../../../components/Container/Container";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  const { projects, loading, error } = useProjects();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query.toLowerCase(), 500);

  const filtered = projects.filter((project) => {
    const { project_name } = project;
    return project_name.toLowerCase().includes(debouncedQuery);
  });

  if (loading)
    return (
      <div className="containerLoading">
        <div className="loading"></div>
        <p>Loading projects...</p>
      </div>
    );

  return (
    <Section id="projects">
      <Container className={styles.projects}>
        <div className={styles.projectsContent}>
          <h2>My Work</h2>
          <p>
            A selection of projects that showcase my passion for creating
            meaningful applications.
          </p>
          <div className={styles.projectsSearch}>
            <FiSearch size={22} className={styles.iconSearch} />
            <input
              type="text"
              placeholder="Search projects..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.projectsGrid}>
          {filtered.length > 0 ? (
            filtered.map((p) => <ProjectCard key={p._id} project={p} />)
          ) : error ? (
            <p className={styles.error}>
              <span>Error:</span> {error}
            </p>
          ) : (
            <p className={styles.alert}>No matching projects.</p>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default Projects;
