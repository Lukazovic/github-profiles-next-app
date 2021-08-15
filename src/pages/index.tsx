import { GetStaticProps } from 'next';

import Head from '../components/Head';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Repositories from '../components/Repositories';
import Footer from '../components/Footer';

import UserResources from '../services/resources/user';
import RepositoryResources from '../services/resources/repository';

import { UserData, RepositoryData } from '../services/tools/mappers';

const DEFAULT_USER_NAME = 'Lukazovic';

type HomePageProps = {
  user: UserData;
  repositories: RepositoryData[];
};

const HomePage = ({ user, repositories }: HomePageProps) => (
  <div className="page">
    <Head />

    <Header />
    <Profile
      name={user.name}
      userName={user.userName}
      description={user.description}
      avatarUrl={user.avatarUrl}
      followersCount={user.followersCount}
      publicReposCount={user.publicReposCount}
      profileUrl={user.profileUrl}
      createdDistance={user.createdDistance}
    />
    <Repositories repositories={repositories} />
    <Footer />
  </div>
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
