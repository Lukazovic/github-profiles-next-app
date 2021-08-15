import GithubApiTools from '../tools/githubApi';
import MapperTools from '../tools/mappers';

export type RepositoryApiData = {
  id: string;
  name: string;
  description: string;
  language: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  updated_at: string;
};

const getAllRepositoriesFromUser = async (userName: string) => {
  try {
    const response = await GithubApiTools.get(`users/${userName}/repos`);

    return {
      data: MapperTools.repositoriesMapper(
        response.data as RepositoryApiData[]
      ),
    };
  } catch (error) {
    return { error };
  }
};

export default { getAllRepositoriesFromUser };
