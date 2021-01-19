import React from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"
import styled from "styled-components/native"

export default function AboutPage({ navigation }) {
  function toStartPage() {
    navigation.navigate("StartPage")
  }

  return (
    <Wrapper>
      <TouchableOpacity onPress={() => toStartPage()}>
        <ToStartPageButton>&#8592; Terug</ToStartPageButton>
      </TouchableOpacity>
      <Content>
        <TopContainer>
          <PreTitle>Wat is de</PreTitle>
          <Title>Stemwijzer?</Title>
        </TopContainer>

        <CenterContainer>
          <CenterText>
            De stemwijzer is een app waarmee u word geholpen om te bepalen welke
            politiekepartij het beste bij u past. Dit word gedaan door een
            aantal vragen te beantwoorden, na dat u deze vragen heeft beantwoord
            krijgt u een resultaat terug met politieke partijen die bij u
            passen.
          </CenterText>
        </CenterContainer>
      </Content>

      <FooterContainer>
        <FooterImage source={require("../../assets/background_image.jpg")} />
      </FooterContainer>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  background: #beecf9;
  min-height: 100vh;
`

const ToStartPageButton = styled.Text`
  font-size: 1.5rem;
  margin-top: 1.1rem;
  margin-left: 1.1rem;
  color: #025c7e;
`

const Content = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 70vh;
`

const TopContainer = styled.View`
  flex: 0 0 33%;
  width: 70%;
  margin-top: 5rem;
`

const PreTitle = styled.Text`
  font-size: 1.5rem;
  color: #025c7e;
`

const Title = styled.Text`
  font-size: 3rem;
  color: #025c7e;
`

const CenterContainer = styled.View`
  width: 70%;
  flex: 0 0 33%;
  margin-top: 5rem;
`

const CenterText = styled.Text`
  text-align: justify;
  font-size: 1.5rem;
  color: #025c7e;
`

const FooterContainer = styled.View`
  flex: 0 0 33%;
`

const FooterImage = styled.Image`
  width: 100%;
  height: 100%;
`
