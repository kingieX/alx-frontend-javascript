import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()]).then((responses) => {
    const [photo, user] = responses;
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
