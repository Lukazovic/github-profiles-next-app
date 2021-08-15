import DateTools from './date';

import { UserApiData } from '../resources/user';
import { RepositoryApiData } from '../resources/repository';

export type UserData = {
  id: string;
  userName: string;
  name: string;
  description: string;
  avatarUrl: string;
  profileUrl: string;
  publicReposCount: number;
  followersCount: number;
  createdAt: string;
  createdDistance: string;
};

const userMapper = (userData: UserApiData): UserData => ({
  id: userData.id,
  userName: userData.login,
  name: userData.name,
  description: userData.bio,
  avatarUrl: userData.avatar_url,
  profileUrl: userData.html_url,
  publicReposCount: userData.public_repos,
  followersCount: userData.followers,
  createdAt: userData.created_at,
  createdDistance: DateTools.dateDistance(userData.created_at),
});

export type RepositoryData = {
  id: string;
  name: string;
  description: string;
  language: string;
  repoUrl: string;
  starsCount: number;
  watchersCount: number;
  forksCount: number;
  updatedAt: string;
  updatedDistance: string;
};

const repositoriesMapper = (
  repositories: RepositoryApiData[]
): RepositoryData[] =>
  repositories.map(repo => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    language: repo.language,
    repoUrl: repo.html_url,
    starsCount: repo.stargazers_count,
    watchersCount: repo.watchers_count,
    forksCount: repo.forks_count,
    updatedAt: repo.updated_at,
    updatedDistance: DateTools.dateDistance(repo.updated_at),
  }));

export default {
  userMapper,
  repositoriesMapper,
};
