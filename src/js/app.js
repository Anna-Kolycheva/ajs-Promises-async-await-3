import Team from './team';
import Magician from './magician';
import Bowman from './bowman';

const team = new Team();

team.add(new Magician('puppy'));
team.add(new Magician('cutie'));
team.add(new Bowman('sugar'));

for (const person of team) {
  console.log(person);
}
