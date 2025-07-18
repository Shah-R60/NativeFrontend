const axios = require('axios');
const api = axios.create({
  baseURL: 'http://10.0.2.2:5000/auth',
});

export const googleAuth = (token) => {
  console.log('Sending token to backendslsl:', token);
  return api.get('/google', { params: { token } })
    .then(res => res.data)
    .catch(err => {
      console.error('Google auth failed:', err?.response?.data || err.message);
      throw err;
    });
};
