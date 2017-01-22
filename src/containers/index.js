import WelcomeScreen from './WelcomeScreen';
import SearchResults from './SearchResults';
import { Navigation } from 'react-native-navigation';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('com.example.WelcomeScreen', () => WelcomeScreen, store, Provider);
  Navigation.registerComponent('com.example.SearchResultsScreen', () => SearchResults, store, Provider);
}
