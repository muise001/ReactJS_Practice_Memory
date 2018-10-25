import React, {Component} from 'react'
import Board from './Board'

class DataFetch extends Component{
  constructor(props){
    super(props)
    this.state = {
      data : [],
      playdeck : [],
    }
  }

  componentWillMount(){
    var that = this
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.giphy.com/v1/gifs/trending?api_key=bMIPWUm5uWlqwJDmZPxDw4dKGzDZfGdd&limit=${this.props.difficulty}`, true);
    request.onload = () => {
      var data = JSON.parse(request.responseText).data;
      that.setState({
        data,
      })
    }
    request.send()
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.data !== this.state.data) {

      let playdeck = this.state.data
      let i = 0
      while(playdeck.length !== this.props.difficulty * 2){
        // this.state.data[i].isOpen = false;
        playdeck.push(this.state.data[i])
        i++
      }
      var data = this.mixItUp(playdeck)
      this.setState({
        data,
        playdeck
      })
    }
  }

  mixItUp(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }

  render(){
    return this.state.playdeck.length
      ? <Board setDifficulty={this.props.setDifficulty}
               data={this.state.playdeck}/>
      : <h1>Loading...</h1>
  }
}

export default DataFetch
