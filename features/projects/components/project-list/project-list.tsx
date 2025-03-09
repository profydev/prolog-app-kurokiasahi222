import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { LoadingIndicator, LoadingError } from "@features/ui";

export function ProjectList() {
  const { data, isLoading, isError, refetch } = useGetProjects();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <LoadingError refetch={refetch} />;
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
