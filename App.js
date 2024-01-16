import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignUp from './Screens/signup';
import Login from './Screens/login';
import Welcome from './Screens/welcome';
import AdminPage from './Screens/admin';
import ClientPage from './Screens/doc';
import AppointmentBooking from './Screens/docDet';
const AppNavigator = createStackNavigator(
  {
    SignUp: SignUp,
    Login: Login,
    Welcome: Welcome,
    AdminPage: AdminPage,
    ClientPage: ClientPage,
    AppointmentBooking: AppointmentBooking,
  },
  {
    initialRouteName: 'Welcome',
  },
);

export default createAppContainer(AppNavigator);
