function generateRandomnumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function celciusToFah(cel) {
  return (cel * 9) / 5 + 32;
}

module.exports = {
  generateRandomnumber,
  celciusToFah,
};
