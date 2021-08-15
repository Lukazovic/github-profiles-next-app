import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';

import ProfileTemplate, { ProfileTemplateProps } from '../../templates/Profile';
import ProfileLoadingTemplate from '../../templates/ProfileLoading';

import Head from '../../components/Head';

import UserResources from '../../services/resources/user';
import RepositoryResources from '../../services/resources/repository';

const UserProfilePage = ({ user, repositories }: ProfileTemplateProps) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <ProfileLoadingTemplate />;
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

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const userName = context.params.userName as string;

  const { data: user, error: userError } = await UserResources.getUserData(
    userName
  );
  const { data: repositories, error: repositoriesErros } =
    await RepositoryResources.getAllRepositoriesFromUser(userName);

  if (userError || repositoriesErros) {
    return {
      redirect: { destination: '/404' },
      props: {},
    };
  }

  return {
    props: {
      user,
      repositories,
    },
    revalidate: 60,
  };
};
