import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  position: absolute;
  top: 84.2%;
  left: 0;
  right: 128px;
  bottom: 2%;
  justify-content: center;
  align-items: center;
  width: 359px;
  height: 60px;
  margin: 10px 16px;
  background-color: #593239;

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

export const ButtonAction = styled.TouchableOpacity`
  width: 12%;
`;

export const ContainerText = styled.TouchableOpacity`
  width: 59%;
  height: 40%;
  margin-right: 4px;
  margin-left: 4px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
`;

export const Author = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
`;

export const Album = styled.Image`
  width: 35px;
  height: 35px;
`;
