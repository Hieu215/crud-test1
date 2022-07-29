import axios from 'axios';

const loadUsersApi = async () => {
  try {
    const data = await axios.get('https://62d92a8b5d893b27b2dfa3ee.mockapi.io/crud-test1');
    return data;
  } catch (error) {
    console.error(error.toString());
  }
};
const createUserApi = async (user) => {
  console.log('nnnn');
  try {
    const create = await axios.post('https://62d92a8b5d893b27b2dfa3ee.mockapi.io/crud-test1', user);
    return create;
  } catch (error) {
    console.error(error.toString());
  }
};
export { loadUsersApi, createUserApi };