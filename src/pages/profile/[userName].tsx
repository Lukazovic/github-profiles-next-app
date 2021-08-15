import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import Head from '../../components/Head';
import Header from '../../components/Header';
import Profile from '../../components/Profile';
import ProfileLoading from '../../components/ProfileLoading';
import Repositories from '../../components/Repositories';
import Footer from '../../components/Footer';

import UserResources from '../../services/resources/user';
import RepositoryResources from '../../services/resources/repository';

import { UserData, RepositoryData } from '../../services/tools/mappers';

type UserProfileProps = {
  user: UserData;
  repositories: RepositoryData[];
};

const UserProfile: React.FC<UserProfileProps> = ({ user, repositories }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <div className="page">
        <Head />
        <Header />
        <ProfileLoading />
      </div>
    );
  }

  return (
    <div className="page">
      <Head title={`${user.name} - Profile`} description={user.description} />

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
};

export default UserProfile;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

type Context = {
  params: {
    userName: string;
  };
};

export const getStaticProps: GetStaticProps = async (context: Context) => {
  const { userName } = context.params;

  const { data: user } = await UserResources.getUserData(userName);
  const { data: repositories } =
    await RepositoryResources.getAllRepositoriesFromUser(userName);

  return {
    props: {
      user,
      repositories,
    },
    revalidate: 60,
  };
};
