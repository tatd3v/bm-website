export const extractNumbersFromString = (word) => {
  const numbersArray = word.match(/\d+/g);

  if (numbersArray) {
    const concatenatedNumbers = numbersArray.join('');
    return concatenatedNumbers;
  } else {
    return null;
  }
};
