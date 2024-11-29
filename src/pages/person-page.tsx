import { PersonData } from '../components/containers/personal-page/person-data.ts';
import { PersonInfo } from '../components/containers/personal-page/person-info/person-info.tsx';
import { Corel } from '../components/containers/personal-page/corel/corel.tsx';
import { Photoshop } from '../components/containers/personal-page/photoshop/photoshop.tsx';
import { Flash } from '../components/containers/personal-page/flash/flash.tsx';

type Props = {
  person: PersonData;
};
export const PersonPage = ({ person }: Props) => {
  return (
    <>
      <PersonInfo
        name={person.name}
        photo={person.photo}
        description={person.description}
      />
      <Corel projects={person.coreldrawProjects} />
      <Photoshop projects={person.photoshopProjects} />
      <Flash projects={person.flashProjects} />
    </>
  );
};
