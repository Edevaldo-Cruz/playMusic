import styled from "styled-components/native";

export const ContainerScrollView = styled.ScrollView`
  margin-left: 8%;
  margin-right: 8%;
`;

export const HeaderModal = styled.View`
  flex-direction: row;
  padding: 20px 20px;
  margin-top: 10%;
  justify-content: space-between;
`;

export const ContainerTextHeader = styled.View`
  flex: 1;
  justify-content: center;
`;

export const TitleHeader = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  opacity: 0.5;
  text-align: center;
`;

export const SubTitleHeader = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
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
  height: 1px;
  background-color: #ccc;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  height: 80px;

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
