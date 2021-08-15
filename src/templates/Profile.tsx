import BaseTemplate from './Base';

import Profile from '../components/Profile';
import Repositories from '../components/Repositories';
import Footer from '../components/Footer';

import { UserData, RepositoryData } from '../services/tools/mappers';

export type ProfileTemplateProps = {
  user: UserData;
  repositories: RepositoryData[];
};

const ProfileTemplate = ({ user, repositories }: ProfileTemplateProps) => (
  <BaseTemplate>
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
  </BaseTemplate>
);

export default ProfileTemplate;
