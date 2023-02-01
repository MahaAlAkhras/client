import Layout from '../Layout/Layout';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <Layout>
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section></Layout>
  );
};

export default UserProfile;
