import { GetStaticProps } from 'next';

import ProfileTemplate, { ProfileTemplateProps } from '../templates/Profile';

import UserResources from '../services/resources/user';
import RepositoryResources from '../services/resources/repository';

const DEFAULT_USER_NAME = 'Lukazovic';

const HomePage = ({ user, repositories }: ProfileTemplateProps) => (
  <ProfileTemplate user={user} repositories={repositories} />
);

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const { data: user } = await UserResources.getUserData(DEFAULT_USER_NAME);
  const { data: repositories } =
    await RepositoryResources.getAllRepositoriesFromUser(DEFAULT_USER_NAME);

  return {
    props: {
      user,
      repositories,
    },
    revalidate: 60,
  };
};
