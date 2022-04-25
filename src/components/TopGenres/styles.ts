import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 100px;
  margin: 5px 16px;
  justify-content: space-around;
`;

export const ContainerCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 168px;
  height: 65px;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-right: 5px;
`;

export const TitleCard = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  width: 80%;
  padding-left: 10px;
  margin-top: 27px;
  margin-bottom: 14px;
`;

export const ImgCard = styled.Image`
  width: 165px;
  height: 100px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;
