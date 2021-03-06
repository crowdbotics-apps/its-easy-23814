import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView1192555Navigator from '../features/CalendarView1192555/navigator';
import Camera2192554Navigator from '../features/Camera2192554/navigator';
import SignIn23192553Navigator from '../features/SignIn23192553/navigator';
import BlankScreen1192552Navigator from '../features/BlankScreen1192552/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView1192555: { screen: CalendarView1192555Navigator },
Camera2192554: { screen: Camera2192554Navigator },
SignIn23192553: { screen: SignIn23192553Navigator },
BlankScreen1192552: { screen: BlankScreen1192552Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
