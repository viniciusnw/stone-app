import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const setIcon = (icon: string, props: any) => {
  switch (icon) {
    case "left":
      return <AntDesign name="leftcircleo" {...props} />;
    case "right":
      return <AntDesign name="rightcircleo" {...props} />;
    case "more":
      return <Entypo name="dots-three-vertical" {...props} />;
    case "menu":
      return <Feather name="menu" {...props} />;
    case "list":
      return <Ionicons name="ios-list" {...props} />;
    case "calendar":
      return <AntDesign name="calendar" {...props} />;
    case "plus":
      return <Entypo name="plus" {...props} />;
    case "wallet":
      return <MaterialIcons name="attach-money" {...props} />;
    case "user":
      return <Feather name="user" {...props} />;
    case "security":
      return <Feather name="lock" {...props} />;
    case "map":
      return <Feather name="map-pin" {...props} />;
    case "settings":
      return <Feather name="settings" {...props} />;
    case "logout":
      return <AntDesign name="logout" {...props} />;
    case "creditcard":
      return <MaterialIcons name="credit-card" {...props} />;
    case "home":
      return <Entypo name="home" {...props} />;
    case "cart":
      return <Entypo name="shopping-cart" {...props} />;
    case "star":
      return <FontAwesome name="star" {...props} />;
    case "staro":
      return <FontAwesome name="star-o" {...props} />;
    case "starh":
      return <FontAwesome name="star-half" {...props} />;
    default:
      return <></>;
  }
};

const Icon = ({ icon, ...props }: any) => {
  return setIcon(icon, props);
};

export default Icon;
