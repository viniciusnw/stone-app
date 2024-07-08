import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Wrapper from "./wrapper.navigator";
import Home from "../pages/Home/home.page";
import Cart from "../pages/Cart/cart.page";
import Product from "../pages/Product/product.page";
import Login from "../pages/Login/login.page";
import Profile from "../pages/Profile/profile.page";
import Wallet from "../pages/Wallet/wallet.page";

export default function Navigation() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen name="Login" options={{ header: (_) => null }}>
          {(props) => <Wrapper {...props} Page={Login} bottomBarType={null} />}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{ header: (_) => null }}>
          {(props) => (
            <Wrapper {...props} Page={Home} header bottomBarType={"nav-bar"} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Cart" options={{ header: (_) => null }}>
          {(props: any) => (
            <Wrapper
              {...props}
              Page={Cart}
              header
              bottomBarType={"action-bar"}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Product" options={{ header: (_) => null }}>
          {(props: any) => (
            <Wrapper
              {...props}
              Page={Product}
              header
              bottomBarType={"action-bar"}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Profile" options={{ header: (_) => null }}>
          {(props: any) => (
            <Wrapper
              {...props}
              Page={Profile}
              header
              bottomBarType={"nav-bar"}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Wallet" options={{ header: (_) => null }}>
          {(props: any) => (
            <Wrapper
              {...props}
              Page={Wallet}
              header
              bottomBarType={"nav-bar"}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
