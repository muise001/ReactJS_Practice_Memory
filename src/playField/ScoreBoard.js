import React from 'react'

const ScoreBoard = ({score}) => {
  const button = <button>Restart</button>
  return (
    <div>
      <p>Matches = {score.matches}</p>
      <p>Turns = {score.turns}</p>
    </div>
  )
}

export default ScoreBoard
