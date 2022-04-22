import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
  padding-top: 90px;
  margin-left: 15px;
  margin-bottom: 30px;
`;

export const ContainerInput = styled.View`
  align-items: center;
`;

export const InputView = styled.TouchableOpacity`
  flex-direction: row;
  width: 349px;
  height: 54px;
  padding-left: 17px;
  align-items: center;
  border-radius: 5px;
  background-color: #333333;
`;

export const InputSearch = styled.TextInput`
  margin-left: 15px;
`;
