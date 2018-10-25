import React from 'react'

const Restart = (props) => {
  console.log(props);
  return <button onClick={() => props.setDifficulty(0)}>Restart</button>
}

export default Restart
