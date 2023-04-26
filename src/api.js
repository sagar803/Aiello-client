const baseUrl = 'https://aiello-backend.up.railway.app/';

export const apiUrl = (endpoint) => {
  return fetch(baseUrl + endpoint)
}