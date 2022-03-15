import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-left: 24px;
  margin-bottom: 5px;
`;

export const ContainerCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 168px;
  height: 50px;
  left: 0px;
  top: 0px;
  background: #4b4b4b;
  border-radius: 5px;
  margin-right: 5px;
`;

export const TitleCard = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  width: 80%;
  padding-left: 10px;
`;

export const ImgCard = styled.Image`
  width: 45px;
  height: 50px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;
