import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';

export enum Screens {
  HOME = 'Home',
  DETAILS = 'Details'
}

export type PageRouteProps = {
  route: RouteProp<ParamListBase, Screens>;
  navigation: StackNavigationHelpers;
};
