import Home from '~/Pages/Home';
import EditUser from '~/Pages/EditUser';
import AddUser from '~/Pages/AddUser';
import InfoUser from '~/Pages/InfoUser';
import About from '~/Pages/About';
// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/addUser', component: AddUser },
  { path: '/editUser/:id', component: EditUser },
  { path: '/infoUser/:id', component: InfoUser },
  { path: '/about', component: About },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
