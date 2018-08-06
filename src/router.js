import { createStackNavigator } from 'react-navigation';
import { Main } from './screens';

const MainRoute = createStackNavigator({
  Main: {
    screen: Main
  }
}, {
  mode: 'card'
});

export default MainRoute;
