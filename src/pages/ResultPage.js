import React from "react";
import { Text, View } from "react-native";

import styled from "styled-components/native"

export default function ResultPage({route, navigation}) {
  function toStartPage() {
    navigation.navigate("StartPage")
  }

  const FirstParty = route["params"]["top3Parties"][0];
  const FirstPartyPercentage = parseFloat(FirstParty["distancePercent"]).toFixed(0);

  const SecondParty = route["params"]["top3Parties"][1];
  const SecondPartyPercentage = parseFloat(SecondParty["distancePercent"]).toFixed(0);

  const ThirdParty = route["params"]["top3Parties"][2];
  const ThirdPartyPercentage = parseFloat(ThirdParty["distancePercent"]).toFixed(0);

  console.log(route["params"]);

  return (
    <Wrapper>
      <Content>
        <TitleContainer>
          <Title>Uw resultaten van de test!</Title>
        </TitleContainer>
        <PartiesContainer>
          <PartyContainer>
            <PartyName>{FirstParty["politicParty"]}</PartyName>
            <PartyPercentage>{FirstPartyPercentage}%</PartyPercentage>
          </PartyContainer>
          <PartyContainer>
            <PartyName>{SecondParty["politicParty"]}</PartyName>
            <PartyPercentage>{SecondPartyPercentage}%</PartyPercentage>
          </PartyContainer>
          <PartyContainer>
            <PartyName>{ThirdParty["politicParty"]}</PartyName>
            <PartyPercentage>{ThirdPartyPercentage}%</PartyPercentage>
          </PartyContainer>
        </PartiesContainer>
        <ButtonContainer>
          <ReturnButton onPress={() => toStartPage()}>
            <ReturnButtonText>Terug naar start</ReturnButtonText>
          </ReturnButton>
        </ButtonContainer>
      </Content>
      <FooterContainer>
        <FooterImage source={require("../../assets/background_image.jpg")} />
      </FooterContainer>
    </Wrapper>
  )
}


const Wrapper = styled.View`
  height: 100%;
  background: #beecf9;
  padding-top: 30px;
`

const Content = styled.View`
  height: 50%;
  justify-content: space-between;
`

const TitleContainer = styled.View`
  margin-bottom: 15px;
  margin-left: 10px;
`

const Title = styled.Text`
  font-size: 30px;
  color: #025c7e;
  font-weight: bold;
`

const PartiesContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`

const PartyContainer = styled.View`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`

const PartyName = styled.Text`
  font-size: 30px;
  color: #025c7e;
  font-weight: bold;
`

const PartyPercentage = styled.Text`
  font-size: 25px;
  color: #025c7e;
`

const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
`

const ReturnButton = styled.TouchableHighlight`
  width: 80%;
  height: 48px;
  background-color: rgb(2, 92, 126);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const ReturnButtonText = styled.Text`
  font-size: 22px;
  color: white;
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
