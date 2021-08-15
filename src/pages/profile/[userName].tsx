import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import BaseTemplate from '../../templates/Base';
import ProfileTemplate, { ProfileTemplateProps } from '../../templates/Profile';

import Head from '../../components/Head';
import ProfileLoading from '../../components/ProfileLoading';

import UserResources from '../../services/resources/user';
import RepositoryResources from '../../services/resources/repository';

const UserProfilePage = ({ user, repositories }: ProfileTemplateProps) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <BaseTemplate>
        <ProfileLoading />
      </BaseTemplate>
    );
  }

  return (
    <>
      <Head title={`${user.name} - Profile`} description={user.description} />

      <ProfileTemplate user={user} repositories={repositories} />
    </>
  );
};

export default UserProfilePage;

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
