import './App.css';
import React, {Component} from 'react';
import Header from './Header';
import Question from './Question';
import Menu from './Menu';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '____',
      property: "",
      onMenu: true,
      num:4
    }
    this.onPlay = this.onPlay.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
  }

  onPlay(e, text,num){
    this.setState({
      property: e,
      onMenu: false,
      title: text,
      numOfAnswers: num
    });
  }

  onBackClick(){
    this.setState({
      title: '____',
      onMenu: true
    });
  }

  render(){
    return(
      <div>
        <Header title={this.state.title}/>
        {this.state.onMenu ?<Menu onPlay={this.onPlay} /> : <Question property={this.state.property} onBackClick={this.onBackClick} numOfAnswers={this.state.numOfAnswers}/>}
      </div>
    );
  }
}

export default App;