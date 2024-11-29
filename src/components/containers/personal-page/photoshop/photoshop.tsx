import { ProjectType } from '../person-data.ts';
import styles from './photoshop.module.css';
import { Icon } from '../../../core/icon/icon.tsx';
import photoshop from '../../../../assets/icons/photoshop.svg';
import { Project } from '../project/project.tsx';

type Props = {
  projects: ProjectType[];
};
export const Photoshop = ({ projects }: Props) => {
  return (
    <>
      <section className={styles.presentation}>
        <Icon src={photoshop} />
        <h2>Adobe photoshop</h2>
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
