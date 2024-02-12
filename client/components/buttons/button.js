import React from "react";
import { TouchableOpacity, ActivityIndicator, View, Text } from "react-native";
import styled, { css } from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const StyledButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding-vertical: 16px;
  padding-horizontal: 18px;
  gap: 10px;

  ${({ type, bgcolor, bordercolor }) => {
    if (type === "outlined") {
      return css`
        border-width: 1.2px;
        border-color: ${bordercolor};
        background-color: transparent;
      `;
    } else {
      return css`
        background-color: ${bgcolor};
      `;
    }
  }}

  ${({ disabled, theme }) =>
    disabled &&
    css`
      opacity: 0.6;
    `}
`;

const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ color }) => color};
`;

const LoadingIndicator = styled(ActivityIndicator)`
  ${({ color }) => css`
    color: ${color};
  `}
`;

const ButtonIcon = styled(Icon)``;

const Button = ({
  startIcon,
  endIcon,
  type = "filled",
  disabled = false,
  bgcolor = "#7F265B",
  color = "white",
  bordercolor = "#000",
  onPress,
  children,
  loading = false,
  ...props
}) => {
  return (
    <StyledButton
      bgcolor={bgcolor}
      bordercolor={bordercolor}
      color={color}
      type={type}
      disabled={disabled || loading} // Disable the button when loading is true
      onPress={onPress}
      {...props}
    >
      {loading && <LoadingIndicator size="small" color={color} />}
      {startIcon && startIcon}
      <ButtonText type={type} color={color}>
        {children}
      </ButtonText>
      {endIcon && endIcon}
    </StyledButton>
  );
};

export default Button;
