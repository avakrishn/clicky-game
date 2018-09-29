import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

class App extends Component {
  constructor(){
    super()

    this.state = {
      images: ["./assets/images/1.jpg", "./assets/images/2.jpg", "./assets/images/3.jpg", "./assets/images/4.jpg", "./assets/images/5.jpg", "./assets/images/6.jpg", "./assets/images/7.jpg", "./assets/images/8.jpg", "./assets/images/9.jpg", "./assets/images/10.jpg", "./assets/images/11.jpg", "./assets/images/12.jpg"],
      score: 0,
      highScore: 0,
      clickedImages: []
    }

    this.shuffle = this.shuffle.bind(this)
    this.checkIfClicked = this.checkIfClicked.bind(this)
  } 

  shuffle () {
    console.log("s")
    let newArray = this.state.images
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
   
    this.setState({
      images: newArray,
    })
  }

  checkIfClicked(imageLink){
    if(this.state.clickedImages.indexOf(imageLink) == -1){
      let newClickedImageArray = [...this.state.clickedImages,imageLink];
      let currentScore = this.state.score + 1;
      this.setState({
        clickedImages: newClickedImageArray,
        score: currentScore
      })
    }else if(this.state.clickedImages.indexOf(imageLink) != -1 && this.state.score > this.state.highScore){
      let newHighScore = this.state.score;
      this.setState({
        highScore: newHighScore,
        score: 0,
        clickedImages: []
      })
    } else{
      this.setState({
        score: 0,
        clickedImages: []
      })

    }
  
  }
  

  render(){
    console.log(this.state);
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Clicky Game</h1>
          <p>Current Score: {this.state.score}</p>
          <p>High Score: {this.state.highScore}</p>
        </header>
        <p className="App-intro">
          To play, click on the image tiles below. You win if you have clicked on every tile only once. You lose when you have clicked on a tile more than once. Image tiles will shuffle after each time you click on the tile. Try and beat the high score!
        </p>
        <div>
          {this.state.images.map(image => <Card imageSrc={image}  onClick={() => {
            this.shuffle()
            this.checkIfClicked(image)
          }}/>)}

        </div>

      </div>
    );
  }
}

export default App;

// console.log(this.state) in your render function not in return function so you can keep track of changes to state
// to make font on page look like code put inside <code> tags like:  <code>src/App.js</code>
