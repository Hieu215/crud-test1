import Home from '~/Pages/Home';
import EditUser from '~/Pages/EditUser';
import AddUser from '~/Pages/AddUser';
import InfoUser from '~/Pages/InfoUser';
import About from '~/Pages/About';
import Register from '~/Pages/Register/Register';
import Login from '~/Pages/Login/Login';
// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/addUser/:id', component: AddUser },
  { path: '/editUser/:id', component: EditUser },
  { path: '/infoUser/:id', component: InfoUser },
  { path: '/about', component: About },
  { path: '/login/:id', component: Login },
  { path: '/register/:id', component: Register },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
