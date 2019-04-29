import React from "react";
import FriendCard from "./FriendCard/Index"



function ShuffleFriends(props) {
  const friends = props.friends.sort(() => .5 - Math.random()).slice(0, 8)
  return (
    <>
      {friends.map(friend => (
        <FriendCard
          chooseFriend={props.chooseFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />
      ))};
    </>
  );
};

export default ShuffleFriends;