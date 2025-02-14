import Link from "next/link";
import capitalize from "lodash/capitalize";
import { Badge, BadgeColor } from "@features/ui";
import { Routes } from "@config/routes";
import { ProjectLanguage, ProjectStatus } from "@api/projects.types";
import type { Project } from "@api/projects.types";
import styles from "./project-card.module.scss";

type ProjectCardProps = {
  project: Project;
};

const languageNames = {
  [ProjectLanguage.react]: "React",
  [ProjectLanguage.node]: "Node.js",
  [ProjectLanguage.python]: "Python",
};

const statusColors = {
  [ProjectStatus.stable]: BadgeColor.success,
  [ProjectStatus.warning]: BadgeColor.warning,
  [ProjectStatus.critical]: BadgeColor.error,
};

type StatusNames = Record<string, ProjectStatus>;

const statusNames: StatusNames = {
  error: ProjectStatus.critical,
  warning: ProjectStatus.warning,
  info: ProjectStatus.stable,
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, language, numIssues, numEvents24h, status } = project;

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.nameAndIconContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.languageIcon}
            src={`/icons/${language}.svg`}
            alt={language}
          />
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.language}>{languageNames[language]}</div>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.issues}>
            <div className={styles.issuesTitle}>Total issues</div>
            <div className={styles.issuesNumber}>{numIssues}</div>
          </div>
          <div className={styles.issues}>
            <div className={styles.issuesTitle}>Last 24h</div>
            <div className={styles.issuesNumber}>{numEvents24h}</div>
          </div>
          {/* 
          TODO: Project list doesn’t show correct status
          branch: project-list-incorrect-status 
          status = "error", "warning", "info"
          change to status = "critical", "warning", "stable"
          */}
          <div className={styles.status}>
            <Badge color={statusColors[statusNames[status]]}>
              {capitalize(statusNames[status])}
            </Badge>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <Link href={Routes.issues} className={styles.viewIssuesAnchor}>
          View issues
        </Link>
      </div>
    </div>
  );
}
