import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { LoadingIndicator } from "@features/ui";
import { LoadingError } from "@features/ui";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    console.log(error);
    return <LoadingError />;
  }
  return (
    <ul className={styles.list} data-testid="project-list">
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
