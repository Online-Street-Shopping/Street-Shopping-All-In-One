import React from 'react'
import { Text } from 'react-native'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MyHeader from "./layout/Header";
import Profile from "./screens/Profile";
import ChangePassword from "./screens/ChangePassword";
import Tabs from "./navigation/Tabs";

import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = ()=>{
	return (
		<>
			{/* <NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						header: ()=> <MyHeader/>
					}}
				>
					<Stack.Screen name="Home" component={ SignUp } />
				</Stack.Navigator>
			</NavigationContainer> */}
			{/* <StatusBar backgroundColor={ COLORS.primary } /> */}
			{/* <SignIn /> */}
			{/* <SignUp/> */}
			<MyHeader/>
			<Tabs/>
			{/* <Profile/> */}
			{/* <ChangePassword/> */}
			{/* <SignUp/> */}
			{/* <SignIn /> */}
		</>
	);
};

export default App;
