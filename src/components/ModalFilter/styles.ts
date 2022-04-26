import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background-color: #282828;
`;

export const ContainerCenter = styled.View`
  align-items: center;
`;

export const Line = styled.View`
  width: 35px;
  height: 3px;
  background-color: #7f7f7f;
  justify-content: center;
  margin-top: 10px;
  border-radius: 2px;
`;

export const Content = styled.View`
  margin-left: 6%;
  margin-right: 6%;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 8%;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
`;

export const Selected = styled.Text`
  flex: 1;
  color: green;
  font-size: 12px;
  font-weight: bold;
  margin-top: 8%;
`;
export const FilterOption = styled.Text`
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  margin-top: 8%;
  opacity: 0.3;
`;

export const BtnCancel = styled.TouchableOpacity`
  margin-top: 8%;
`;

export const BtnText = styled.Text`
  color: #7f7f7f;
  font-weight: bold;
`;
