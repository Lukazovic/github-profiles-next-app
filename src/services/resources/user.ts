import GithubApiTools from '../tools/githubApi';
import MapperTools from '../tools/mappers';

export type UserApiData = {
  id: string;
  login: string;
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  created_at: string;
};

const getUserData = async (userName: string) => {
  try {
    const response = await GithubApiTools.get(`users/${userName}`);

    return { data: MapperTools.userMapper(response.data as UserApiData) };
  } catch (error) {
    return { error };
  }
};

export default { getUserData };
