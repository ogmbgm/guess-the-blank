import './Question.css';
import React, {Component} from 'react';
import Form from './Form';
import Answer from './Answer';
import * as dp from './dataProcessing';
import jsonData from './factbook.json';

class Question extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: JSON.parse(JSON.stringify(jsonData)),
      randomNum: 0,
      selectedOption: '',
      labels: [],
      correctAnswer: '',
      correct: false,
      toggle: false,
      numOfAnswers: this.props.numOfAnswers
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleGuessSubmit = this.handleGuessSubmit.bind(this);
    this.handleNextSubmit = this.handleNextSubmit.bind(this);
    // this.getNewFlag = this.getNewFlag.bind(this);
    this.getNewData = this.getNewData.bind(this)
    this.getData = this.getData.bind(this)
  }

  componentDidMount(){
    this.getNewData();
  }

  // async getApi(){
  //   await fetch('https://restcountries.eu/rest/v2/all')
  //   .then(res => res.json())
  //   .then((result)=>{
  //     this.setState({
  //       data: [...result]
  //     });
  //   })
  //   .catch(err=>console.log(err));
  //   this.getNewFlag();
  // }

  async getData(id){
    await this.setState({
      data: JSON.parse(JSON.stringify(jsonData))
    });
    this.getNewData();
  }

  // getNewFlag(){
  //     let randNum = Math.round((Math.random() * 249));
  //     let num = Math.round((Math.random() * (this.state.numOfAnswers-1)));
  //     let arr = [];
  //     for(let i = 0; i < this.state.numOfAnswers; i++){
  //       if(i === num) arr.push(this.state.data[randNum].name);
  //       else arr.push(this.state.data[Math.round((Math.random() * 249))].name);
  //     }

  //     this.setState({
  //       randomNum: randNum,
  //       labels: arr,
  //       correctAnswer: this.state.data[randNum].name
  //     });
  // }

  getNewData(){
    let randNum = Math.round((Math.random() * Object.keys(this.state.data).length-1));
    while(dp.findDataMessage(this.state.data[Object.keys(this.state.data)[randNum]].data, this.props.property) === undefined){
      randNum = Math.round((Math.random() * Object.keys(this.state.data).length-1));
    }
    let num = Math.round((Math.random() * (this.state.numOfAnswers-1)));
    let arr = [];
    let usedNums = [randNum];
    for(let i = 0; i < this.state.numOfAnswers; i++){
      if(i === num) arr.push(this.state.data[Object.keys(this.state.data)[randNum]].data.name);
      else{ 
        let r = Math.round((Math.random() * Object.keys(this.state.data).length-1));
        while(usedNums.indexOf(r) > -1){
          r = Math.round((Math.random() * Object.keys(this.state.data).length-1));
        }
        usedNums.push(r);
        arr.push(this.state.data[Object.keys(this.state.data)[r]].data.name);
      }
    }

    this.setState({
      randomNum: randNum,
      labels: arr,
      correctAnswer: this.state.data[Object.keys(this.state.data)[randNum]].data.name
    });
}

  handleOptionChange(changeEvent){
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  handleGuessSubmit(formSubmitEvent){
    formSubmitEvent.preventDefault();
    let c = false;
    if(this.state.selectedOption === this.state.correctAnswer){
      c = true;
    }
    this.setState({
      selectedOption: '',
      correct: c,
      toggle: true
    });
  }

  handleNextSubmit(){
    this.setState({
      selectedOption: '',
      correct: false,
      toggle: false
    });
    this.getNewData();
  }

  render(){
    return(
      <div className="holder">
        <button className="btn btn-primary" id="back-button" onClick={this.props.onBackClick}>Back</button>
        <div className="content">
          {!this.state.toggle ? 
          <Form options={[...this.state.labels]} 
          selectedOption={this.state.selectedOption} handleOptionChange={this.handleOptionChange} 
          handleGuessSubmit={this.handleGuessSubmit}/> 
          : <Answer correct={this.state.correct} handleNextSubmit={this.handleNextSubmit} correctName={this.state.data[Object.keys(this.state.data)[this.state.randomNum]].data.name}/>}
          {/* {this.props.property == 'flag' ? <img alt="" src={this.state.data[this.state.randomNum].flag}></img>: */}
          {dp.findData(this.state.data[Object.keys(this.state.data)[this.state.randomNum]].data, this.props.property)}
        </div>
      </div>
    );
  }
}

export default Question;