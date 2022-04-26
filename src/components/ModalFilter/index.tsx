import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  BtnCancel,
  BtnText,
  Container,
  ContainerCenter,
  ContainerRow,
  Content,
  FilterOption,
  Line,
  Selected,
  Title,
} from "./styles";

const ModalFilter: React.FC = ({ handleFilter }) => {
  return (
    <Container>
      <ContainerCenter>
        <Line />
      </ContainerCenter>
      <Content>
        <Title>Classificar por</Title>
        <ContainerRow>
          <Selected>Mais recente</Selected>
          <AntDesign name="check" size={20} color="green" />
        </ContainerRow>
        <FilterOption>Tocados recentemente</FilterOption>
        <FilterOption>Adicionados recentemente</FilterOption>
        <FilterOption>Ordem alfabética</FilterOption>
        <FilterOption>Criador</FilterOption>
      </Content>
      <BtnCancel onPress={handleFilter}>
        <ContainerCenter>
          <BtnText>CANCELAR</BtnText>
        </ContainerCenter>
      </BtnCancel>
    </Container>
  );
};

export default ModalFilter;
