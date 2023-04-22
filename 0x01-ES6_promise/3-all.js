import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((responses) => {
    const [photo, user] = responses;
    console.log(`${user.firstName} ${user.lastName} ${photo.body}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
