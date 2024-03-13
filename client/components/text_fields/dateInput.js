import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styled, { useTheme } from "styled-components/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
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

const TextValue = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  padding: 4px 0px;
  padding-bottom: 8px;
  ${({ placeholder }) =>
    placeholder &&
    `
    color: #777
    `}
`;

const DateInput = ({
  startIcon,
  endIcon,
  label,
  value,
  name,
  onChange,
  placeholder,
  error,
  ...props
}) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    setDatePickerVisible(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleDateChange = (selectedDate) => {
    setDatePickerVisible(false);
    if (selectedDate) {
      const formattedDate = formatDate(selectedDate);
      onChange(formattedDate, name);
    }
  };

  const formatDate = (date) => {
    // Format the date as dd-mm-yyyy
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    return `${day} / ${month} / ${year}`;
  };

  return (
    <View>
      <InputContainer focused={isFocused} error={error}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
        <Hr />
        <InputWrapper>
          <Label error={error} focused={isFocused}>
            {label}
          </Label>
          <TouchableOpacity onPress={handleFocus}>
            <TextValue placeholder={value === ""}>
              {value === "" ? placeholder : value}
            </TextValue>
          </TouchableOpacity>
        </InputWrapper>
        {endIcon && <IconContainer>{endIcon}</IconContainer>}
      </InputContainer>

      {error && <ErrorText>{error}</ErrorText>}

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={new Date()}
        onConfirm={handleDateChange}
        onCancel={() => setDatePickerVisible(false)}
      />
    </View>
  );
};

export default DateInput;
