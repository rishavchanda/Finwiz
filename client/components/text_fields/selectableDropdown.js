// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Modal } from "react-native";
// import { Picker } from "@react-native-picker/picker";
// import styled, { useTheme } from "styled-components/native";
// import { Dropdown } from "react-native-material-dropdown";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// const DropdownContainer = styled.View`
//   border-width: 1.2px;
//   border-color: ${({ theme }) => theme.text_secondary_light};
//   border-radius: 10px;
//   padding: 8px;
//   width: 200px;
// `;

// const DropdownButton = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
// `;

// const DropdownText = styled.Text`
//   font-size: 14px;
//   color: ${({ theme }) => theme.text};
// `;

// const DropdownModal = styled.Modal`
//   flex: 1;
// `;

// const DropdownView = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
// `;

// const DropdownContent = styled.View`
//   background-color: ${({ theme }) => theme.white};
//   padding: 16px;
//   width: 200px;
//   border-radius: 8px;
// `;

// const DropdownItem = styled(Picker.Item)`
//   font-size: 14px;
//   color: ${({ theme }) => theme.text};
// `;

// const SelectableDropdown = ({
//   options,
//   selectedValue,
//   onValueChange,
//   label,
// }) => {
//   const theme = useTheme();
//   const [modalVisible, setModalVisible] = useState(false);
//   let data = [
//     {
//       value: "Banana",
//     },
//     {
//       value: "Mango",
//     },
//     {
//       value: "Pear",
//     },
//   ];
//   return (
//     <View>
//       <DropdownContainer>
//         {/* <DropdownText>{selectedValue}</DropdownText> */}
//         {/* <Picker
//           selectedValue={selectedValue}
//           onValueChange={(itemValue) => {
//             onValueChange(itemValue);
//           }}
//           mode="dropdown"
//           style={{ color: "#fff", placeholderTextColor: "#fff" }}
//           itemStyle={{
//             backgroundColor: "grey",
//             color: "blue",
//             fontFamily: "Ebrima",
//             fontSize: 17,
//           }}
//         >
//           {options.map((option, index) => (
//             <Picker.Item
//               key={index}
//               label={option}
//               value={option}
//               color={theme.text}
//             />
//           ))}
//         </Picker> */}

//         <Dropdown label="Favorite Fruit" data={data} />
//       </DropdownContainer>
//     </View>
//   );
// };

// export default SelectableDropdown;
