export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({ status: 200, body: 'success' })).catch(() => Error('The fake API is not working currently'));
}
