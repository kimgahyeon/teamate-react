require("../model")

const Mate = require("../model/mate");
const Project = require("../model/project");

const roles = ["개발자", "기획자", "디자이너", "퍼블리셔", "PM", "DevOps"];
const MAX_LENGTH = 4;

const getIndexOfObjectArray = (arr, targetKey, targetValue) => {
  return arr.findIndex((elem) => elem[targetKey] === targetValue);
}

const getRequirements = () => {
  const length = Math.floor(Math.random() * MAX_LENGTH);

  let selectedRequirements = [];
  while (selectedRequirements.length < length) {
    const role = roles[Math.floor(Math.random() * roles.length)];
    if (getIndexOfObjectArray(selectedRequirements, "role", role) === -1)
      selectedRequirements.push({
        role,
        content: `${role}을(를) 찾습니다.`
      });
  }
}

const getRandomMate = async () => {
  const mates = await Mate.getAllMates();
  return mates[Math.floor(Math.random() * mates.length)];
}

const getRandomMates = async () => {
  const mates = await Mate.getAllMates();
  const length = Math.floor(Math.random() * MAX_LENGTH);

  let selectedMates = [];
  while (selectedMates.length < length) {
    const mate = mates[Math.floor(Math.random() * mates.length)];
    if (getIndexOfObjectArray(selectedMates, "_id", mate._id) === -1)
      selectedMates.push(mate);
  }
}

const generateProject = async (from, to) => {
  for (let i = from; i <= to; i++) {
    const project = {
      title: `title${i}`,
      content: `content${i}`,
      requirement: await getRequirements(),
      leader: await getRandomMate(),
      mates: await getRandomMates(),
      status: Math.floor(Math.random() * 2)
    }

    const result = await Project.setProject(project);
    console.log(result);
  }
};

generateProject(0, 30);