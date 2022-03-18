import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  position: absolute;
  top: 82%;
  left: 0;
  right: 128px;
  bottom: 2%;

  width: 359px;
  height: 60px;
  margin: 10px 16px;
  background-color: #979797;

  border-radius: 10px;
  padding-right: 10px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonAction = styled.TouchableOpacity``;

export const ContainerText = styled.View`
  width: 65%;
  height: 40%;
  margin-right: 8px;
  margin-left: 8px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;

export const Author = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
`;

export const Album = styled.Image`
  width: 60px;
  height: 60px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;
