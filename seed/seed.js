const db = require('../server/models');

const needSeeds = [
  {
    name: 'Need Garden Planted',
    category: 'Yard & Garden',
    description: 'Hello my friends, I need a nice garden to be planted along my walkway.',
  },
  {
    name: 'Bowie Needs a Regular Walk',
    category: 'Pet Care',
    description: 'My even-tempered mastiff Bowie needs a good morning walk 3 days a week when I am unavailable.',
  },
  {
    name: 'Install Linux on my Windows Machine',
    category: 'Computer',
    description: 'For some reason I can\'t figure this out on my own!',
  },
  {
    name: 'Feed My Iguana',
    category: 'Pet Care',
    description: 'Please come by and feed my iguana. Her name is Arizona and she primarily eats cockroaches.',
  },
  {
    name: 'fix my clogged up drain',
    category: 'Home Maintenance',
    description: 'Something must have gotten stuck in there.',
  },
  {
    name: 'Build me a fullstack web application',
    category: 'Computer',
    description: 'It doesn\'t matter to me what it does. I only care how full of a stack it is.',
  },
];
const skillSeeds = [
  {
    name: 'Drive you around',
    category: 'Transportation',
    description: 'My car is reliable and clean, I have a driver\'s licence, I probably also drive for Lyft and Uber.',
  },
  {
    name: 'Available to film your movie',
    category: 'Audio/Visual',
    description: 'I have great skill with camera and editing.',
  },
  {
    name: 'Install Linux on your Windows Machine',
    category: 'Computer',
    description: 'I\'ll get Linux running for you, so you can run from Windows.',
  },
  {
    name: 'Cook Your Meal',
    category: 'Food',
    description: 'I\'ll bring ingredients into your kitchen and combine them to create you a delicious meal.',
  },
  {
    name: 'Clean Your House',
    category: 'Home Maintenance',
    description: 'I am incredibly detail oriented.',
  },
  {
    name: 'Talk Things Over',
    category: 'Compainionship',
    description: 'I can listen and discuss your feelings about the things in your life.',
  },
];

const needsPromises = needSeeds.map(oneNeed => (
  db.Need.create(oneNeed).save()
    .then(instance => console.log(`need seed: ${instance.name}`))
    .catch(err => console.error(err))
));

const skillsPromises = skillSeeds.map(oneSkill => (
  db.Skill.create(oneSkill).save()
    .then(instance => console.log(`skill seed: ${instance.name}`))
    .catch(err => console.error(err))
));

Promise.all([...needsPromises, ...skillsPromises]).then(() => {
  process.exit();
});
