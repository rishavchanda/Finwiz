import React, { useState } from "react";
import { View, Text, StatusBar } from "react-native";
import InputText from "../../components/text_fields/inputText";
import Button from "../../components/buttons/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styled, { useTheme } from "styled-components/native";
import { Image } from "react-native-elements";
import TextButton from "../../components/buttons/textButton";
import { useThemeContext } from "../../context/themeContext";

const Wrapper = styled.ScrollView`
  flex: 1;
  padding: 26px 0px;
  background-color: ${({ theme }) => theme.bg};
`;

const Logo = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  padding: 14px 0px;
`;

const Verified = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #27ae60;
  height: 22px;
  width: 22px;
`;

const HeadingText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
`;

const SubHeadingText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const ForgotButton = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0px 8px;
`;

const Seperator = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 50px;
  gap: 12px;
`;

const Hr = styled.View`
  height: 1px;
  width: 30%;
  background-color: ${({ theme }) => theme.text_secondary_light};
`;

const OrText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const SocialAuth = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 8px;
`;

const AlreadyAccount = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
`;

const Txt = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const SignIn = () => {
  const theme = useTheme();
  const themeMode = useThemeContext();
  const { toggleTheme } = useThemeContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSignIn = () => {
    toggleTheme();
    // if (username === "" || password === "") {
    //   setError("Username and password are required.");
    // } else {
    //   setError("");
    //   setLoading(true);

    //   // Perform your sign-in logic here
    //   // e.g., call an API to authenticate the user
    // }
  };

  return (
    <Wrapper>
      <StatusBar
        barStyle={
          themeMode.theme === "light" ? "dark-content" : "light-content"
        }
        backgroundColor={theme.bg} // Set the status bar color based on the theme
      />
      <View
        style={{
          flex: 1,
          padding: 16,
          gap: 4,
        }}
      >
        <Logo>Renegan</Logo>
        <HeadingText>Welcome Back 👋</HeadingText>
        <SubHeadingText>
          Welcome Back, Please Enter Your University Mail Id{" "}
        </SubHeadingText>
      </View>
      <View
        style={{
          flex: 1,
          padding: 16,
          gap: 16,
        }}
      >
        <View
          style={{
            flex: 1,
            gap: 10,
          }}
        >
          <InputText
            startIcon={
              <Icon
                name="email-outline"
                size={24}
                color={theme.text_secondary}
              />
            }
            // endIcon={
            //   <Verified>
            //     <Icon name="check" size={12} color="white" />
            //   </Verified>
            // }
            value={username}
            onChangeText={handleUsernameChange}
            placeholder="Enter email address"
            label="Email Address"
            type={"email-address"}
            error={error}
          />
          <InputText
            startIcon={
              <Icon
                name="lock-outline"
                size={24}
                color={theme.text_secondary}
              />
            }
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={!isPasswordVisible}
            placeholder="Enter password"
            label="Password"
            type={"default"}
            error={error}
          />
          {/* <TextArea
            label="Description"
            value={description}
            startIcon={<Icon name="lock-outline" size={24} />}
            onChangeText={(text) => setDescription(text)}
            error={error}
            rows={5} // Set the initial number of rows
            placeholder="Enter your description here..."
          />{" "} */}
        </View>
        <ForgotButton>
          <TextButton
            // onPress={handleTextButtonPress}
            label="Forgot Password?"
            color={theme.primary}
            disabled={false}
            enabled={true}
          />
        </ForgotButton>

        <Button
          type="filled"
          color={theme.white}
          bgcolor={theme.primary}
          loading={loading}
          onPress={handleSignIn}
        >
          Continue
        </Button>

        <Seperator>
          <Hr />
          <OrText>Or Continue With</OrText>
          <Hr />
        </Seperator>
        <SocialAuth>
          <Button
            startIcon={
              <Image
                source={require("../../assets/icons/Google.png")}
                style={{ width: 20, height: 20 }}
              />
            }
            type="outlined"
            bordercolor={theme.text_secondary_light}
            color={theme.text_secondary}
            loading={loading}
            onPress={handleSignIn}
          >
            Continue with Google
          </Button>
        </SocialAuth>
        <AlreadyAccount>
          <Txt>Don't have an account on Renegan? </Txt>
          <TextButton
            label="Sign Up"
            color={theme.primary}
            disabled={false}
            enabled={true}
          />
        </AlreadyAccount>
      </View>
    </Wrapper>
  );
};

export default SignIn;
