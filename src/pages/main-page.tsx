import { Introduction } from '../components/containers/main/introduction/introduction.tsx';
import { WhyWeAreTeam } from '../components/containers/main/why-we-are-team/why-we-are-team.tsx';
import { Members } from '../components/containers/main/members/members.tsx';
import { Reviews } from '../components/containers/main/reviews/reviews.tsx';
import { CotactWithUs } from '../components/containers/main/contact-with-us/cotact-with-us.tsx';

export const MainPage = () => {
  return (
    <>
      <Introduction />
      <WhyWeAreTeam />
      <Members />
      <Reviews />
      <CotactWithUs />
    </>
  );
};
