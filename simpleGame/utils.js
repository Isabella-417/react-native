import {LOSE, PAPER, ROCK, SCISSOR, TIE, WIN} from './constants/';

const options = [SCISSOR, PAPER, ROCK];
const winners = {
  scissors: PAPER,
  rock: SCISSOR,
  paper: ROCK,
};

class Result {
  constructor(choosen, machineChoosen, results) {
    this.choosen = choosen;
    this.machineChoosen = machineChoosen;
    this.results = results;
  }
}

const generateOption = () => {
  const random = Math.random() * (4 - 1) + 1;
  return options[Math.floor(random) - 1];
};

export const results = choosenTool => {
  const machineElection = generateOption();
  if (machineElection === choosenTool) {
    return new Result(choosenTool, machineElection, TIE);
  }
  if (machineElection === winners[choosenTool]) {
    return new Result(choosenTool, machineElection, WIN);
  }
  return new Result(choosenTool, machineElection, LOSE);
};
