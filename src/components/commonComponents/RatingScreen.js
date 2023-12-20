import React from "react";
import { Rating } from 'react-native-ratings';

function RatingScreen(props) {
  const { type, ratingColor, ratingBackgroundColor, ratingCount, tintColor, imageSize, startingValue } = props;

  return (
    <Rating
      type={type}
      ratingColor={ratingColor}
      ratingBackgroundColor={ratingBackgroundColor}
      ratingCount={ratingCount}
      tintColor={tintColor}
      imageSize={imageSize}
      startingValue={startingValue}
      isDisabled={false}
    />
  );
};
export default RatingScreen;