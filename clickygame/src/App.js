import React, { Component } from "react";
import friends from "./friends.json"
import ShuffleFriends from "./components/ShuffleFriends"
import Wrapper from "./components/Wrapper/Index"
import Header from "./components/Header/Index"

class App extends Component {
  state = {
    chosen: [],
    friends
  }

  chooseFriend = id => {
    return alert("Hit me")
  }


  render() {
    return (
      <Wrapper>
        <Header />
        <ShuffleFriends
          friends={this.state.friends}
          chooseFriend={this.chooseFriend}
        />
      </Wrapper >
    );
  }
}


export default App;
