import React from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"

// import Style from "../style/pages/StartPage"
import styled from "styled-components/native"

// const container = Style.container
// const contentContainer = Style.contentContainer
// const imageContainer = Style.imageContainer

export default function StartPage({ navigation }) {
  function toAboutPage() {
    navigation.navigate("AboutPage")
  }

  function toQuestionPage() {
    navigation.navigate("QuestionPage")
  }

  return (
    <Wrapper>
      <Content>
        <TitleContainer>
          <PreTitle>Welkom bij de</PreTitle>
          <Title>Stemwijzer</Title>
          <TouchableOpacity onPress={() => toAboutPage()}>
            <AfterTitle>Wat is de stemwijzer?</AfterTitle>
          </TouchableOpacity>
        </TitleContainer>

        <CenterContainer>
          <CenterText>Klik op start om de test te beginnen</CenterText>
        </CenterContainer>

        <BottomContainer>
          <TouchableOpacity onPress={() => toQuestionPage()}>
            <StartButton>Start de test!</StartButton>
          </TouchableOpacity>
        </BottomContainer>
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

const Content = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  min-height: 70vh;
`

const TitleContainer = styled.View`
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

const AfterTitle = styled.Text`
  text-align: center;
  color: #025c7e;
`

const CenterContainer = styled.View`
  flex: 0 0 33%;
  margin-top: 5rem;
`

const CenterText = styled.Text`
  text-align: center;
  font-size: 1.5rem;
  color: #025c7e;
`

const BottomContainer = styled.View`
  flex: 0 0 33%;
  margin-top: 5rem;
`

const StartButton = styled.Text`
  font-size: 1.5rem;
  background: #025c7e;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: #fefefe;
`

const FooterContainer = styled.View`
  flex: 0 0 33%;
`

const FooterImage = styled.Image`
  width: 100%;
  height: 100%;
`
