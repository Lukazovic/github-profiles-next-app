import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

import Head from '../components/Head';
import Header from '../components/Header';

const SearchPage = () => {
  const [userName, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!userName) return;

    router.push(`/profile/${userName}`);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div className="page">
      <Head />

      <Header />

      <main id="search">
        <div className="search-wrapper">
          <h1 className="search-title">Create your Own Github Profile</h1>

          <div className="search-description">
            <p>
              You can type your Github Username in the Input bellow and Generate
              your Profile.
            </p>

            <p>
              In your Profile page you will see the main information about your
              Github Profile as well as your Repositories. And you will be able
              to share that profile with your friends.
            </p>
          </div>

          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={handleInputChange}
              placeholder="Github Username"
            />
            <button type="submit" disabled={!userName}>
              Generate Profile
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
