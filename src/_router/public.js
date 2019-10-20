import Signup from '../_view/public/routes/Home/Home';
import NotFound from '../_view/public/routes/NotFound/NotFound';
import store from '../_store'

const publicRoutes = [{
  path: '/',
  name: 'signup',
  component: Signup
}, {
  path: '/verify',
  name: 'verify',
  component: Verify,
  beforeEnter: function validateAuth (to, from, next) {
    if (!store.getters['mobile']) {
      next({
        name: 'signup'
      })
    } else {
      next();
    }
  }
}, {
  path: '/role',
  name: 'role',
  component: Role
}, {
  path: '/details',
  name: 'details',
  component: Details
}, {
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard
}, {
  path: '/*',
  name: 'not-found',
  component: NotFound
}];

export default publicRoutes;
