require("../model")

const Mate = require("../model/mate");

const getRandomName = () => {
  let str = "";
  for (let i = 0; i < 3; i++) {
    randomChar = Math.floor(Math.random() * (90 - 65) + 65);
    str += String.fromCharCode(randomChar);
  }
  return str;
};

const generateMate = async (reps) => {
  for (let i = 0; i < reps; i++) {
    const randomName = getRandomName();
    const mate = {
      email: `${randomName}@gmail.com`,
      name: randomName,
      password: "1234"
    }

    const result = await Mate.setMate(mate);
    console.log(result);
  }
};

generateMate(30);