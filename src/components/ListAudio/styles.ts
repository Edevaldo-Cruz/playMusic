import styled from "styled-components/native";

export const Container = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: aqua;
`;

export const HeaderModal = styled.View`
  flex-direction: row;
  padding: 20px 20px;
  justify-content: space-between;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  padding: 20px 20px;
`;
export const ContainerTextHeader = styled.View`
  justify-content: center;
`;

export const TitleHeader = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.5;
`;

export const SubTitleHeader = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
`;

export const InfoAudio = styled.View`
  flex-direction: row;
  margin-top: 80px;
  margin-right: 5%;
  margin-left: 5%;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerTextInfo = styled.View``;

export const TitleAudio = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;

export const SubTitleAudio = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  opacity: 0.5;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  margin-left: 5%;
  margin-right: 5%;
`;

export const BtnPlayPause = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

export const ItemInfoData = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
`;

export const ContainerImage = styled.View`
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;
`;

export const ImgAlbum = styled.Image`
  margin-top: 70px;
  width: 330px;
  height: 330px;
`;

export const Separetor = styled.View`
  width: 100%;
  height: 1;
  color: rgba(0, 0, 0, 0.5);
`;

export const ContainerIncosToShare = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
  margin-bottom: 30px;
`;

export const Icons = styled.View`
  width: 70%;
`;
