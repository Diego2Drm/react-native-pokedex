import react from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import UserData from "../components/Auth/UserData";
import LoginForm from "../components/Auth/LoginForm";
import useAuth from "../hooks/useAuth";

function Account() {
  const {auth} = useAuth();

    return(
      <SafeAreaView>
       {
        auth ? <UserData /> : <LoginForm />
       }
      </SafeAreaView>
    );
};

export { Account };