import styled from "styled-components/native";

export const ContainerScrollView = styled.ScrollView`
  margin-left: 8%;
  margin-right: 8%;
`;

export const ContainerMusicNow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const StandardTitle = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ImgAlbum = styled.Image`
  width: 54px;
  height: 44px;
  margin-right: 10px;
`;

export const TitleAudio = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;

export const SubTitleAudio = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  opacity: 0.5;
`;

export const ContainerItem = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

export const ContainerText = styled.View`
  width: 80%;
`;

export const Separetor = styled.View`
  width: 100%;
  height: 1;
  background-color: #ccc;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  height: 130px;
  margin-bottom: 65px;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
`;

export const BtnPlayPause = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  background-color: #ffffff;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;
