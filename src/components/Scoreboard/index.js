import {useState, useEffect} from 'react'

import {
  MainContainer,
  ScoreText,
  Button,
  ButtonsContainer,
} from './styledComponents'

const Scoreboard = () => {
  const [score, setScore] = useState(0)
  useEffect(() => {
    document.title = `Score = ${score}`
  })

  const onIncrement = () => {
    setScore(prevScore => prevScore + 1)
  }

  const onDecrement = () => {
    setScore(prevScore => prevScore - 1)
  }

  return (
    <MainContainer>
      <ScoreText>{score}</ScoreText>
      <ButtonsContainer>
        <Button onClick={onIncrement}>Increase</Button>
        <Button onClick={onDecrement}>Decrease</Button>
      </ButtonsContainer>
    </MainContainer>
  )
}

export default Scoreboard
