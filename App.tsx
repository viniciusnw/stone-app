import Constants from "expo-constants";
import { ThemeProvider } from "styled-components/native";
import { darkTheme } from "@Theme";
import Navigation from "./app/navigation/navigation";
import { SafeAreaView, Text } from "react-native";
import { SWRConfig } from "swr";
import ErrorBoundary from "./Error.handler";
import Label from "@Components/Label";

function App() {
  return (
    <ErrorBoundary
      fallback={<Label color="danger" label="Something went wrong" />}
    >
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
    </ErrorBoundary>
  );
}

let AppEntryPoint = App;

if (Constants?.expoConfig?.extra?.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}
export default AppEntryPoint;
