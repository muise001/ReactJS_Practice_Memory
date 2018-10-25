import React, {Component} from 'react'
import Card from './Card'
import ScoreBoard from './ScoreBoard'
import Restart from './Restart'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardOpened : false,
      cardA : [],
      openCartIndexes : [],
      score : {
        matches : 0,
        turns : 0
      }
    }
    this.handleClick = this.handleClick.bind(this)
    this.checkIfMatch = this.checkIfMatch.bind(this)
    this.turnToClose = this.turnToClose.bind(this)
  }

  handleClick(i, id, choice = []){
    let { cardA, cardOpened, openCartIndexes } = this.state;
    this.props.data[i].isOpen = true;
    choice.push(i, id)
    openCartIndexes.push(choice[0])
    if (!cardOpened) {
      this.setState({
        cardOpened : true,
        cardA : choice,
      })
    } else {
      this.checkIfMatch(choice, cardA, openCartIndexes)
    }
  }

  checkIfMatch(choice, cardA, openCartIndexes) {
    if (cardA[0] === choice[0]){
      console.log('foute Klik');
    } else {
      let match = cardA[1] === choice[1] ? 1 : 0
      if (!match) {
        this.turnToClose(cardA, choice, openCartIndexes)
      }
      this.setState({
        cardOpened : false,
        score : {
          ...this.state.score,
          turns : this.state.score.turns + 1,
          matches : this.state.score.matches + match
        }
      })
    }
    this.setState({cardOpened : false})
  }

  turnToClose(cardA, choice, openCartIndexes){
    setTimeout((choices = [cardA[0], choice[0]]) => {
      let earlierChosen = openCartIndexes
      choices.forEach((choice) => {
        let arr = earlierChosen.indexOf(choice)
        if (arr > -1) {
          earlierChosen.splice(arr,1)
        }
      })
      this.setState({
        openCartIndexes : earlierChosen
      })
    }, 1400)
  }

  render(){
    let restart
    if (this.props.data.length / 2 === this.state.score.matches) {
      restart = <Restart setDifficulty={this.props.setDifficulty}/>
    } else {
      restart = <div/>
    }
    const children = this.props.data.map((data, i) => {
      return (
        <Card
          data={data} key={i} index={i}
          className={data.isOpen && this.state.openCartIndexes.includes(i) ? "open" : ""}
          handleClick={this.handleClick}/>
        )
    })
    return(
      <div>
        <div id="field">
          {children}
        </div>
        <ScoreBoard score={this.state.score}/>
        {restart}
      </div>
    )
  }
}

export default Board
