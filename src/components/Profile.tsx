import React from 'react';
import Image from 'next/image';

interface ProfileProps {
  name: string;
  userName: string;
  description: string;
  avatarUrl: string;
  followersCount: number;
  publicReposCount: number;
  profileUrl: string;
  createdDistance: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  userName,
  description,
  avatarUrl,
  followersCount,
  publicReposCount,
  profileUrl,
  createdDistance,
}) => (
  <main id="profile">
    <div className="wrapper">
      <div className="profile-container default-container ">
        <div className="profile-image-container">
          <Image
            src={avatarUrl}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={avatarUrl}
          />
        </div>
        <h1>{name}</h1>
        <h4>{description}</h4>

        <ul className="profile-info-card">
          <li>
            <p>Username: {userName}</p>
          </li>
          <li>
            <p>Public Repositories: {publicReposCount}</p>
          </li>
          <li>
            <p>Folowers: {followersCount}</p>
          </li>
          <li>
            <p>Created {createdDistance}</p>
          </li>
        </ul>

        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`${userName} Github Profile`}
        >
          See more on Github
        </a>
      </div>
    </div>
  </main>
);

export default Profile;
