const db = require('../server/models');

const needSeeds = [
  {
    name: 'Need Garden Planted',
    category: 'Yard & Garden',
    description: 'Hello my friends, I need a nice garden to be planted along my walkway.',
    img: 'http://www.gropat.com/images/151653205668351.jpeg',
  },
  {
    name: 'Bowie Needs a Regular Walk',
    category: 'Pet Care',
    description: 'My even-tempered mastiff Bowie needs a good morning walk 3 days a week when I am unavailable.',
    img: 'http://static3.uk.businessinsider.com/image/589a1765dd0895cb6e8b49f8-1200/.jpg',
  },
  {
    name: 'Install Linux on my Windows Machine',
    category: 'Computer',
    description: 'For some reason I can\'t figure this out on my own!',
    img: 'https://s3.amazonaws.com/aspph-wp-production/app/uploads/2017/03/Ans-.jpg',
  },
  {
    name: 'Feed My Iguana',
    category: 'Pet Care',
    description: 'Please come by and feed my iguana. Her name is Arizona and she primarily eats cockroaches.',
    img: 'https://www2.mmu.ac.uk/media/mmuacuk/style-assets/images/r-research/profile-Zeyad.jpg',
  },
  {
    name: 'fix my clogged up drain',
    category: 'Home Maintenance',
    description: 'Something must have gotten stuck in there.',
    img: 'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878',
  },
  {
    name: 'Build me a fullstack web application',
    category: 'Computer',
    description: 'It doesn\'t matter to me what it does. I only care how full of a stack it is.',
    img: 'https://cap.stanford.edu/profiles/viewImage?profileId=65672&type=square&ts=1509500008416',
  },
];
const skillSeeds = [
  {
    name: 'Drive you around',
    category: 'Transportation',
    description: 'My car is reliable and clean, I have a driver\'s license, I probably also drive for Lyft and Uber.',
    img: 'https://cap.stanford.edu/profiles/viewImage?profileId=4024&type=square&ts=1509566427223',
  },
  {
    name: 'Available to film your movie',
    category: 'Audio/Visual',
    description: 'I have great skill with camera and editing.',
    img: 'https://corporate.ford.com/content/dam/corporate/en/careers/employee-profiles/molli-andor/380x380Profile-Molli.jpg',
  },
  {
    name: 'Install Linux on your Windows Machine',
    category: 'Computer',
    description: 'I\'ll get Linux running for you, so you can run from Windows.',
    img: 'http://glia.ca/scm/2013/ge1127_b/wp-content/uploads/2013/10/594partner-profile-pic-An.jpg',
  },
  {
    name: 'Cook Your Meal',
    category: 'Food',
    description: 'I\'ll bring ingredients into your kitchen and combine them to create you a delicious meal.',
    img: 'https://narrow.jp/img/upload/talent/W15-0332-171115.jpg',
  },
  {
    name: 'Clean Your House',
    category: 'Home Maintenance',
    description: 'I am incredibly detail oriented.',
    img: 'http://static3.businessinsider.com/image/528a7b2769bedd0829f098bb/ryan-bushey.jpg',
  },
  {
    name: 'Talk Things Over',
    category: 'Companionship',
    description: 'I can listen and discuss your feelings about the things in your life.',
    img: 'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
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