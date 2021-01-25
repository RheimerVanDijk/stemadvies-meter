import React, { useState, useEffect } from "react"
import { Text, View, TouchableHighlight, Image } from "react-native"
import styled from "styled-components/native"

import arrowBack from "../../assets/arrow-back.png"
import arrowFor from "../../assets/arrow-for.png"


export default function Progressbar(props) {
  const [totalBarWidth, setTotalBarWidth] = useState(0)
  const [barWidth, setBarWidth] = useState(0)

  
  function getBarWidth(event) {
    setTotalBarWidth(event.nativeEvent.layout.width)
  }

  function updateBarWidth(currentQuestion, total_questions) {
    const oneStep = totalBarWidth / total_questions
    setBarWidth(oneStep * currentQuestion)
  }

  useEffect(() => {
    updateBarWidth(props.current_question + 1, props.total_questions)
  })
  
  return (
    <ProgressbarContainer>
      <QuestionCounterContainer>
        <QuestionCounter>
          {`${props.current_question + 1}/${props.total_questions}`}
        </QuestionCounter>
      </QuestionCounterContainer>
      <BarContainer>
        <BarButtonBack onPress={() => props.prevQuestion()} underlayColor="#beecf9">
          <Icon source={arrowBack} />
        </BarButtonBack>
        <OuterBar width={totalBarWidth} onLayout={(event) => getBarWidth(event)}>
          <InnerBar width={barWidth}></InnerBar>
        </OuterBar>
        <BarButtonFor onPress={() => props.nextQuestion()} underlayColor="#beecf9">
          <Icon source={arrowFor} />
        </BarButtonFor>
      </BarContainer>
    </ProgressbarContainer>
  )
}

const ProgressbarContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
  padding: 0px 20px;
`

const QuestionCounterContainer = styled.View``
const QuestionCounter = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #025C7E;
`

const BarContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const BarButtonBack = styled.TouchableHighlight``
const BarButtonFor = styled.TouchableHighlight``

const OuterBar = styled.View`
  width: 80%;
  height: 12px;
  border: 2px solid #025C7E;
  border-radius: 10px;
  justify-content: center;
  overflow: hidden;

`
const InnerBar = styled.View`
  background-color: #025C7E;
  height: 100%;
  border-radius: 10px;
  margin-left: -1px;
`

const Icon = styled.Image`
  width: 20px;
  height: 20px;
`