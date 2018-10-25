import React, {Component} from 'react'
import ChooseDifficulty from './ChooseDifficulty'
import DataFetch from './playField/DataFetch'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      difficulty : 0,
    }
    this.setDifficulty = this.setDifficulty.bind(this)
  }

  setDifficulty(difficulty){
    this.setState({
      difficulty
    })
  }

  render(){
    return this.state.difficulty <= 1 ?
    <ChooseDifficulty setDifficulty={this.setDifficulty}/> :
    <DataFetch difficulty={this.state.difficulty}
               setDifficulty={this.setDifficulty}
    />
  }
}

export default App
