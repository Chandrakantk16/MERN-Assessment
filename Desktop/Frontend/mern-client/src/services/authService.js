import axios from 'axios';
const API_URL = '/api/auth/login';

const login = async (formData) => {
  const res = await axios.post(API_URL , formData);
  return res.data;
};

const authService = {
  login,
};

export default authService;
