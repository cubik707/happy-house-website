import { ProjectType } from '../person-data.ts';
import styles from './flash.module.css';
import { Project } from '../project/project.tsx';

type Props = {
  projects: ProjectType[];
};
export const Flash = ({ projects }: Props) => {
  return (
    <>
      <section className={styles.presentation}>
        <h2>Flash</h2>
      </section>
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          photo={project.photo}
          isOdd={index % 2 !== 0} // Передаём информацию о четности
        />
      ))}
    </>
  );
};
