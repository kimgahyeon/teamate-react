require("../model");

const Mate = require("../model/mate");
const Project = require("../model/project");

const roles = ["개발자", "기획자", "디자이너", "퍼블리셔", "PM", "DevOps"];
const MAX_LENGTH = 8;

const getIndexOfObjectArray = (arr, targetKey, targetValue) => {
  return arr.findIndex((elem) => elem[targetKey] === targetValue);
};

const getRandomName = () => {
  let str = "";
  for (let i = 0; i < 3; i++) {
    randomChar = Math.floor(Math.random() * (90 - 65) + 65);
    str += String.fromCharCode(randomChar);
  }
  return str;
};

const getRandomProjects = async () => {
  const wholeProjects = await Project.getAllProjects();
  const projects = [];
  while (projects.length < MAX_LENGTH) {
    const idx = Math.floor(Math.random() * wholeProjects.length);
    if (getIndexOfObjectArray(projects, "_id", wholeProjects[idx]._id) > -1) continue;
    projects.push(wholeProjects[idx]);
  }
  return projects;
};

const generateMate = async (reps) => {
  for (let i = 0; i < reps; i++) {
    const randomName = getRandomName();
    const mate = {
      email: `${randomName}@gmail.com`,
      name: randomName,
      password: "1234",
      role: roles[Math.floor(Math.random() * roles.length)],
      tags: ["tag1", "tag2", "tag3"],
      projects: [],
    };

    const result = await Mate.setMate(mate);
    console.log(result);
    // project의 mate 목록에 이 mate 추가하기
  }
};

const joinProject = async () => {
  try {
    const mates = await Mate.getAllMates();
    mates.forEach(async (mate) => {
      try {
        const projects = await getRandomProjects();
        mate.projects = projects;
        Mate.updateMate(mate);

        projects.forEach(async (project) => {
          try {
            project.mates.push(mate._id);
            await Project.updateProject(project);
          } catch (err) {
            console.log(err);
          }
        });
      } catch (err) {
        console.log(err);
      }
    });
    console.log("done");
  } catch (err) {
    console.log(err);
  }
};

// generateMate(40);
joinProject();
