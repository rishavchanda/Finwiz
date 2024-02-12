import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styled, { useTheme } from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1.2px;
  border-color: ${({ error, focused, theme }) =>
    error ? "red" : focused ? theme.primary + 80 : theme.text_secondary_light};
  border-radius: 10px;
  padding-horizontal: 14px;
  padding-vertical: 6px;
  gap: 12px;
`;

const Hr = styled.View`
  height: 80%;
  width: 1.2px;
  background-color: ${({ theme }) => theme.text_secondary_light};
`;

const InputWrapper = styled.View`
  flex: 1;
`;

const InputField = styled.TextInput`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  padding-bottom: 6px;
`;

const Label = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: ${({ error, focused, theme }) =>
    error ? "red" : focused ? theme.primary : theme.text_secondary};
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 10px;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const ToggleButton = styled.TouchableOpacity`
  padding: 4px;
`;

const InputText = ({
  startIcon,
  endIcon,
  label,
  value,
  onChangeText,
  error,
  secureTextEntry,
  type,
  ...props
}) => {
  const theme = useTheme();
  const [isPasswordVisible, setPasswordVisible] = useState(!secureTextEntry);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <InputContainer focused={isFocused} error={error}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
        <Hr error={error} />
        <InputWrapper>
          <Label error={error} focused={isFocused}>
            {label}
          </Label>
          <InputField
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            secureTextEntry={secureTextEntry && !isPasswordVisible}
            placeholderTextColor={"#777"}
            keyboardType={type}
            {...props}
          />
        </InputWrapper>
        {endIcon && <IconContainer>{endIcon}</IconContainer>}
        {secureTextEntry && (
          <ToggleButton onPress={togglePasswordVisibility}>
            <Icon
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={22}
              color={theme.text_secondary}
            />
          </ToggleButton>
        )}
      </InputContainer>

      {error && <ErrorText>{error}</ErrorText>}
    </View>
  );
};

export default InputText;
