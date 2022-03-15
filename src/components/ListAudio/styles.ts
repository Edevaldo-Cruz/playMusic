import styled from "styled-components/native";

export const ItemContainer = styled.View`
  flex-direction: row;
  padding: 20px 20px;
`;

export const ItemInfoContainer = styled.View`
  padding-left: 10px;
  justify-content: space-between;
  width: 100%;
`;

export const ItemInfoTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #343a40;
  width: 80%;
`;

export const ItemInfoData = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
`;

export const ImgAlbum = styled.Image`
  width: 88px;
  height: 88px;
`;

export const Separetor = styled.View`
  width: 100%;
  height: 1;
  color: rgba(0, 0, 0, 0.5);
`;
