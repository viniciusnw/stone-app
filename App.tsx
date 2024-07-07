import Constants from "expo-constants";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "@Theme";
import Navigation from "./app/navigation/navigation";
import { SafeAreaView } from "react-native";
import { SWRConfig } from "swr";

function App() {
  return (
    <SWRConfig
      value={{
        provider: () => new Map(),
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <SafeAreaView style={{ flex: 1 }}>
          <Navigation />
        </SafeAreaView>
      </ThemeProvider>
    </SWRConfig>
  );
}

let AppEntryPoint = App;

if (Constants?.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}
export default AppEntryPoint;
