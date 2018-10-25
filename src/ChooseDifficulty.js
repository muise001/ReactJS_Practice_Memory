import React from 'react'

const ChooseDifficulty = (props) => {
  return (
    <form onSubmit={(e) => {e.preventDefault(); props.setDifficulty(parseInt(e.target.childNodes[0].value))}}>
      <input type="number"/>
      <input type="submit"/>
    </form>
  )
}


export default ChooseDifficulty
