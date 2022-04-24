import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 10px;
  margin-bottom: 16px;
  align-items: center;
`;

export const ContainerArtists = styled.ScrollView`
  margin-bottom: 8px;
`;

export const ContainerImg = styled.TouchableOpacity`
  flex-direction: row;
  margin-right: 5px;
`;

export const ImgRecentlyPlayed = styled.Image`
  width: 146px;
  height: 140px;
  margin-bottom: 5px;
`;

export const TextView = styled.View`
  width: 200px;
  height: 140px;
  justify-content: flex-end;
`;

export const ArtistsName = styled.Text`
  font-weight: 500;
  font-size: 14px;

  color: white;
  margin-left: 15px;
  text-align: justify;
`;
