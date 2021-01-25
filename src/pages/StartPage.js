import React from "react"
import { Text, View, Image, TouchableOpacity } from "react-native"

import styled from "styled-components/native"

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
        <TopContainer>
          <TitleContainer>
            <PreTitle>Welkom bij de</PreTitle>
            <Title>Stemwijzer</Title>
          </TitleContainer>
          <ToAboutButton onPress={() => toAboutPage()}>
            <AfterTitle>Wat is de stemwijzer?</AfterTitle>
          </ToAboutButton>
        </TopContainer>

        <CenterContainer>
          <CenterText>Klik op start om de test te beginnen</CenterText>
        </CenterContainer>

        <BottomContainer>
          <StartButton onPress={() => toQuestionPage()}>
            <StartButtonText>Start de test!</StartButtonText>
          </StartButton>
        </BottomContainer>
      </Content>

      <FooterContainer>
        <FooterImage source={require("../../assets/background_image.jpg")} />
      </FooterContainer>
    </Wrapper>
  )
}

const Wrapper = styled.ScrollView`
  background: #beecf9;
  height: 100%;
`

const Content = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`

const TopContainer = styled.View`
  width: 100%;
  margin-top: 100px;
  align-items: center;
  flex: 0 0 25%;
`

const TitleContainer = styled.View`
  border-bottom-width: 3px;
  border-bottom-color: #025c7e;
  margin-bottom: 15px;
`

const PreTitle = styled.Text`
  font-size: 14px;
  color: #025c7e;
`

const Title = styled.Text`
  font-size: 40px;
  color: #025c7e;
  font-weight: bold;
`

const ToAboutButton = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: #025c7e;
`

const AfterTitle = styled.Text`
  text-align: center;
  color: #025c7e;
`

const CenterContainer = styled.View`
  width: 70%;
`

const CenterText = styled.Text`
  text-align: center;
  font-size: 17px;
  color: #025c7e;
`

const BottomContainer = styled.View`
  margin-top: 32px;
`

const StartButton = styled.TouchableOpacity`
  background: #025c7e;
  padding: 15px 60px;
  border-radius: 50px;
  color: #fefefe;
`

const StartButtonText = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: bold;
`

const FooterContainer = styled.View`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 300px;
`

const FooterImage = styled.Image`
  width: 100%;
  height: 100%;
`
