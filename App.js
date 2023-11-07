import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import MainNav from "./src/navigation/MainNav";

export default function App() {
  const [fontsLoaded] = useFonts({
    Dancing: require("./assets/Fonts/PlaypenSans-ExtraLight.ttf"),
    Pacifico: require("./assets/Fonts/Caveat-Regular.ttf"),
  });

  //if (fontsLoaded === false) {
  if (!fontsLoaded) {
    return;
  }

  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
}

const styles = StyleSheet.create({});
