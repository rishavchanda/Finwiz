import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start; /* Align elements at the top */
  align-items: flex-start; /* Align elements at the top */
  border-width: 1.2px;
  border-color: ${({ focused, error }) =>
    error ? "red" : focused ? "blue" : "#BABABA"};
  border-radius: 10px;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  gap: 12px;
`;

const InputWrapper = styled.View`
  flex: 1;
`;

const Hr = styled.View`
  height: 50px;
  width: 1.2px;
  background-color: #bababa;
`;

const InputField = styled.TextInput`
  font-size: 14px;
  color: #000;
  padding: 6px 0px;
`;

const Label = styled.Text`
  font-size: 10px;
  font-weight: 700;
  color: ${({ error, focused }) =>
    error ? "red" : focused ? "blue" : "#5d5d5d"};
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 10px;
`;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const TextAreaContainer = styled(InputContainer)`
  /* Additional styles specific to the TextArea */
  align-items: flex-start; /* Align elements at the top */
`;

const TextAreaField = styled(InputField)`
  /* Additional styles specific to the TextArea */
  text-align-vertical: top; /* Android only */
`;

const TextArea = ({
  label,
  value,
  onChangeText,
  error,
  startIcon,
  endIcon,
  rows,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <TextAreaContainer focused={isFocused} error={error}>
        {/* {startIcon && <IconContainer>{startIcon}</IconContainer>} */}
        {/* <Hr error={error} /> */}
        <InputWrapper>
          {label && (
            <Label error={error} focused={isFocused}>
              {label}
            </Label>
          )}
          <TextAreaField
            value={value}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            multiline // Enable multiline text input
            numberOfLines={rows} // Initial number of lines displayed
            placeholderTextColor={"#777"}
            {...props}
          />
        </InputWrapper>
        {/* {endIcon && <IconContainer>{endIcon}</IconContainer>} */}
      </TextAreaContainer>

      {error && <ErrorText>{error}</ErrorText>}
    </View>
  );
};

export default TextArea;
