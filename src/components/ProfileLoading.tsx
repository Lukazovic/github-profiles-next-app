const ProfileLoading = () => (
  <main id="profile-loading">
    <div className="wrapper">
      <div className="profile-loading-container">
        <div className="profile-loading-border-image">
          <div className="profile-loading-image-container">
            <div className="profile-loading-image"></div>
          </div>
        </div>
        <div className="profile-loading-name"></div>
        <div className="profile-loading-description"></div>

        <div className="profile-loading-info-card">
          <div className="profile-loading-info-card-item"></div>
          <div className="profile-loading-info-card-item"></div>
          <div className="profile-loading-info-card-item"></div>
          <div className="profile-loading-info-card-item"></div>
        </div>

        <div className="profile-loading-github-link"></div>
      </div>
    </div>
  </main>
);

export default ProfileLoading;
