import React, { useState, useEffect } from "react"
import { Text, View, Button, TouchableHighlight } from "react-native"
import styled from "styled-components/native"

import Progressbar from "../components/Progressbar"

// import * as Progress from "react-native-progress" // DOCS: https://www.npmjs.com/package/react-native-progress

export default function QuestionPage({ navigation }) {
  const [currentQuestion, setCurrent_question] = useState(0)
  const [questionArray, setQuestionArray] = useState([])
  const [questionArrayLength, setQuestionArrayLength] = useState(0)

  const [loading, setLoading] = useState(false)

  const [resultArray, setResultArray] = useState([])

  function newQuestion() {
    setCurrent_question(currentQuestion + 1)
  }

  function prevQuestion() {
    setCurrent_question(currentQuestion - 1)
  }

  function nextQuestion() {
    let array = resultArray
    if (typeof array[currentQuestion] === 'undefined') {
      console.log("notFilled in")
      array.push({ question_id: currentQuestion + 1,  answer: undefined})
      setResultArray(array)

      if (questionArrayLength == currentQuestion + 1) {
        finish()
      }
      else {
        newQuestion()
      }
    } else {
      if (questionArrayLength == currentQuestion + 1) {
        finish()
      }
      else {
        newQuestion()
      }
    }
  }

  function awnserQuestion(id, awnser) {
    let array = resultArray

    if (typeof array[id - 1] === 'undefined') {
      console.log("un")
      array.push({ question_id: id,  answer: awnser})
      setResultArray(array)
    } else {
      console.log("not UN")
      array[id - 1] = { question_id: id,  answer: awnser}
      setResultArray(array)
    }

    if (questionArrayLength == currentQuestion + 1) {
      finish()
    }
    else {
      newQuestion()
    }

  }

  function finish() {
    let form = new FormData();
  
    let array = resultArray
    form.append("answersJsonArr", JSON.stringify(array))

    fetch("http://127.0.0.1:8000/api/calcAnswers.php", {
      method: 'POST',
      body: form,
      redirect: 'follow'
    })
    .then(response => response.json())
    .then(response => {
      navigation.navigate('ResultPage',response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/getQuestions.php")
    .then(response => response.json())
    .then(response => {
      setQuestionArray(response)
      setQuestionArrayLength(response.length)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      setLoading(true)
    })
  }, [])

  return (
    <Wrapper>
      {
        loading == true && questionArray.length != 0 ?     
          <Wrapper>
            <Progressbar current_question={currentQuestion} total_questions={questionArrayLength} prevQuestion={prevQuestion} nextQuestion={nextQuestion}></Progressbar>
            
            <QuestionContainer>
              <QuestionText>
                {questionArray[currentQuestion ].question}
              </QuestionText> 
              <ButtonContainer>
                <TrueButton onPress={() => awnserQuestion(questionArray[currentQuestion].question_id, true)} underlayColor="rgba(59,230,132,0.3)">
                  <ButtonText>Eens</ButtonText>
                </TrueButton>
                <UnButton onPress={() => awnserQuestion(questionArray[currentQuestion].question_id, undefined)} underlayColor="rgba(121,121,121,0.3)">
                  <ButtonText>Geen van beide</ButtonText>
                </UnButton>
                <FalseButton onPress={() => awnserQuestion(questionArray[currentQuestion].question_id, false)} underlayColor="rgba(255,106,106,0.3)">
                  <ButtonText>Oneens</ButtonText>
                </FalseButton>
              </ButtonContainer>
            </QuestionContainer>
            <FooterContainer>
              <FooterImage source={require("../../assets/background_image.jpg")} />
            </FooterContainer>
          </Wrapper> : <Text>Loading</Text>
      }
    </Wrapper>
  )
}


const Wrapper = styled.View`
  height: 100%;
  background: #beecf9;
  justify-content: space-between;
  padding-top: 30px;
`

const QuestionContainer = styled.View`
  padding: 0px 20px;
  height: 400px;
  justify-content: space-between;
`

const QuestionText = styled.Text`
  font-size: 20px;
  color: #025C7E;
  font-weight: bold;
`

const ButtonText = styled.Text`
  font-size: 22px;
  color: white;
  font-weight: bold;
`

const ButtonContainer = styled.View``

const TrueButton = styled.TouchableHighlight`
  width: 100%;
  height: 48px;
  background-color: #3BE684;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const UnButton = styled.TouchableHighlight`
  width: 100%;
  height: 48px;
  background-color: #797979;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`

const FalseButton = styled.TouchableHighlight`
  width: 100%;
  height: 48px;
  background-color: #FF6A6A;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`

const FooterContainer = styled.View`
  flex: 0 0 33%;
`

const FooterImage = styled.Image`
  width: 100%;
  height: 100%;
`