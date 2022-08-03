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
  try {
    const createUser = await axios.post('https://62d92a8b5d893b27b2dfa3ee.mockapi.io/crud-test1', user);
    return createUser;
  } catch (error) {
    console.error(error.toString());
  }
};
const deleteUserApi = async (userId) => {
  try {
    const deleteUser = await axios.delete(`https://62d92a8b5d893b27b2dfa3ee.mockapi.io/crud-test1/${userId}`);
    return deleteUser;
  } catch (error) {
    console.error(error.toString());
  }
};
const editUserApi = async (userId, userInfo) => {
  try {
    const editUser = await axios.put(`https://62d92a8b5d893b27b2dfa3ee.mockapi.io/crud-test1/${userId}`, userInfo);
    return editUser;
  } catch (error) {
    console.error(error.toString());
  }
};
export { loadUsersApi, createUserApi, deleteUserApi, editUserApi };
