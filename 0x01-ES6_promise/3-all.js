import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((userRes) => {
      console.log(`${userRes.body.firstName} ${userRes.body.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
