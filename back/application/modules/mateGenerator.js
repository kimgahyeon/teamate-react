require("../model")

const Mate = require("../model/mate");

const roles = ["개발자", "기획자", "디자이너", "퍼블리셔", "PM", "DevOps"];

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
      password: "1234",
      role: roles[Math.floor(Math.random() * roles.length)],
      tags: ["tag1", "tag2", "tag3"]
    }

    const result = await Mate.setMate(mate);
    console.log(result);
  }
};

generateMate(30);