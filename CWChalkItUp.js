import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

// a stylized fun short story i found
console.log(chalk.yellowBright(`
  After flying a ${chalk.italic("long")} distance, a ${chalk.blue("thirsty")} crow was wandering the ${chalk.green("forest")} in search of ${chalk.blue("water")}.
  Finally, ${chalk.red("he")} saw a pot half-filled with ${chalk.blue("water")}.
  ${chalk.red("He")} tried to ${chalk.cyan("drink")} from it but ${chalk.red("his")} beak wasn't long enough to reach the ${chalk.blue("water")} inside.
  ${chalk.red("He")} then saw ${chalk.grey("pebbles")} on the ${chalk.green("ground")} and one by one, ${chalk.red("he")} put them in the pot until the ${chalk.blue("water")} rose to the brim.
  The crow then hastily ${chalk.cyan("drank")} from it and quenched ${chalk.red("his")} thirst.
`));

// animate the moral of the story
// this appears to have broken since yesterday
// const animation = chalkAnimation.karaoke('The crow learned that if there\'s a will, there\'s a way. Every problem has a solution if we just look hard enough and don\'t give up');

// auto stop animaton after 8 seconds
// setTimeout(() => {
//   animation.stop(); // Animation stops
// }, 8000);