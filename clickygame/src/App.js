import React, { Component } from "react";
import friends from "./friends.json"
import ShuffleFriends from "./components/ShuffleFriends"
import Wrapper from "./components/Wrapper/Index"
import Header from "./components/Header/Index"

class App extends Component {
  state = {
    chosen: [],
    friends,
    score: 0,
    topScore: 0
  }
  chooseFriend = id => {
    let picked = this.state.chosen
    if (picked.includes(id)) {
      alert("Already chosen")
      if (this.state.score > this.state.topScore) {
        alert("New high score!!")
        this.setState({
          topScore: this.state.score
        })
      }
      this.setState({
        score: 0,
        chosen: []
      })
      return
    }
    picked.push(id)
    this.setState({
      chosen: picked,
      score: (this.state.score + 1)
    })
    console.log(this.state.chosen)
  }

  render() {
    return (
      <Wrapper>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <ShuffleFriends
          friends={this.state.friends}
          chooseFriend={this.chooseFriend}
          chosen={this.state.chosen}
        />
      </Wrapper >
    );
  }
}


export default App;
