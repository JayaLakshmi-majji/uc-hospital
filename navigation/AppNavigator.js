import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import UserList from "../components/UserList";
import HomeScreen from "../components/HomeScreen";
import CreateBranch from "../components/CreateBranch";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    UserList,
    HomeScreen,
    CreateBranch
  })
);
