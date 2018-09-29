import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

class App extends Component {
  constructor() {

    super();

    {/* set state of App */} 
    this.state = {
      images: [
        "./assets/images/1.jpg",
        "./assets/images/2.jpg",
        "./assets/images/3.jpg",
        "./assets/images/4.jpg",
        "./assets/images/5.jpg",
        "./assets/images/6.jpg",
        "./assets/images/7.jpg",
        "./assets/images/8.jpg",
        "./assets/images/9.jpg",
        "./assets/images/10.jpg",
        "./assets/images/11.jpg",
        "./assets/images/12.jpg"
      ],
      score: 0,
      highScore: 0,
      clickedImages: []
    };

    {/* bind functions */}
    this.shuffle = this.shuffle.bind(this);
    this.checkIfClicked = this.checkIfClicked.bind(this);
  }

  shuffle() {
  {/* function shuffles the image tiles on the screen after each click on an image tile */}
  
    let newArray = this.state.images;
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    {/* update the image state with the new shuffled array */}
    this.setState({
      images: newArray
    });
  }

  checkIfClicked(imageLink) {
    {/* if the image clicked has not already been clicked = User guess correctly*/}
    if (this.state.clickedImages.indexOf(imageLink) == -1) {
      {/* use spread operator to create new array that is equal to the previously clicked images and the current clicked image  */}
      let newClickedImageArray = [...this.state.clickedImages, imageLink];

      {/* user guess correctly so increment score by 1*/}
      let currentScore = this.state.score + 1;

      {/* set the state to account for the increased score and have the clickedImages array include the current clicked image*/}
      this.setState({
        clickedImages: newClickedImageArray,
        score: currentScore
      });
      {/* if the image clicked has already been clicked and if the users score has beat the high score*/}
    } else if (
      this.state.clickedImages.indexOf(imageLink) != -1 &&
      this.state.score > this.state.highScore
    ) {
      {/*user has lost but has achieved the high score so set the highscore to be the user's score and empty the clickedImages array to begin a new game*/}
      let newHighScore = this.state.score;
      this.setState({
        highScore: newHighScore,
        score: 0,
        clickedImages: []
      });
      {/* if user clicked on image they had clicked on previously and the user has not beat the high score*/}
    } else {
      this.setState({
        score: 0,
        clickedImages: []
      });
    }
  }

  render() {
    {/*check to see if state was updated*/}
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Clicky Game</h1>
          {/* updates the current score and highscore from state */}
          <p>Current Score: {this.state.score}</p>
          <p>High Score: {this.state.highScore}</p>
        </header>
        <p className="App-intro">
          To play, click on the image tiles below. You win if you have clicked
          on every tile only once. You lose when you have clicked on a tile more
          than once. Image tiles will shuffle after each time you click on the
          tile. Try and beat the high score!
        </p>
        <div>
          {/* map over each image in the images array and create a new Card class component that contains an image tag and onClick invokes two functions*/}
          {this.state.images.map(image => (
            <Card
              imageSrc={image}
              onClick={() => {
                this.shuffle();
                this.checkIfClicked(image);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
{/* export the App class component*/}
export default App;


{/* Notes:
console.log(this.state) in your render function not in return function so you can keep track of changes to state
to make font on page look like code text put inside <code> tags like:  <code>src/App.js</code>
*/}