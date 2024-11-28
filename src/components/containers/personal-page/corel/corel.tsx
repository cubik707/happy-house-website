import { ProjectType } from '../person-data.ts';
import { Project } from '../project/project.tsx';
import { Icon } from '../../../core/icon/icon.tsx';
import corelIcon from '../../../../assets/icons/corel.svg';
import styles from './corel.module.css';

type Props = {
  projects: ProjectType[];
};
export const Corel = ({ projects }: Props) => {
  return (
    <>
      <section className={styles.presentation}>
        <Icon src={corelIcon} />
        <h2>corel draw</h2>
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
