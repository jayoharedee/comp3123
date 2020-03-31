import React from "react";

var result = [];
for (let i = 0; i < 10; i++) {
  result[i] = <button>Like!</button>;
}

const LikeButton = () => {
  return result;
};

export default LikeButton;
