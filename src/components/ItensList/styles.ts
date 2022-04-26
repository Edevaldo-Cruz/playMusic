import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 2%;
  margin-left: 4%;
  margin-right: 4%;
  align-items: center;
`;

export const ContainerRow = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ContainerText = styled.View`
  margin-left: 4%;
`;

export const ItemImage = styled.Image`
  width: 70px;
  height: 70px;
`;

export const Title = styled.Text`
  color: green;
  font-weight: bold;
`;

export const TextInfo = styled.Text`
  color: white;
  font-size: 10px;
  opacity: 0.5;
`;
