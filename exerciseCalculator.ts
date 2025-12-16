interface Result {
  periodLenght: number;
  trainingDays: number;
  succes: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface Value {
  exercisesDay: Array<number>;
  goal: number;
}

export const parseArgument = (args: Array<string>, goals: string): Value => {
  if (Array.isArray(args) && !isNaN(Number(goals))) {
    if (args.length !== 7) throw new Error('malformatted parameters');
    const str: string[] = args.slice()
    const data: number[] = str.map(a => Number(a));
    return {
      goal: Number(goals),
      exercisesDay: data
    };
  } else {
    throw new Error('parameters missing');
  }
}

export const calculateExercise = (dailyExercises: Array<number>, target: number): Result => {
  const period: number = dailyExercises.length;
  const trainig: number = dailyExercises.filter(dia => dia > 0).length;
  let description: string = "Good!";
  const averages: number = dailyExercises.reduce((a, b) => a + b, 0) / period;
  const trainSucces: boolean = averages >= target;
  let ratings: number = 3;

  if (averages < 1.5) {
    ratings = 1;
    description = "Bad";
  } else if(averages >= 1.6 && averages < (period / target)) {
    ratings = 2;
    description = "Medium";
  }

  return {
    periodLenght: period,
    trainingDays: trainig,
    succes: trainSucces,
    rating: ratings,
    ratingDescription: description,
    target: target,
    average: averages
  };
}