const db = require('../server/models');

const userSeeds = [
  {
    username: 'chickensandwich',
    firstName: 'chicken',
    lastName: 'sandwich',
    email: 'chicken@sandw.ich',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg',
    hash: 'hash',
    salt: 'salt',
  },
  {
    username: 'blackbeanburger',
    firstName: 'blackbean',
    lastName: 'burger',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg',
    email: 'black@bean.burger',
    hash: 'hash',
    salt: 'salt',
  },
];

const userId = [];
const userPromise = userSeeds.map(user => (
  db.User.create(user).save()
    .then((instance) => {
      console.log(`user ${instance.username} seeded`);
      userId.push(instance._id);
    })
    .catch(err => console.error(err))
));

Promise.all([...userPromise]).then(() => {
  const needSeeds = [
    {
      name: 'Need Garden Planted',
      category: 'Yard & Garden',
      description: 'Hello my friends, I need a nice garden to be planted along my walkway.',
      img: 'http://www.gropat.com/images/151653205668351.jpeg',
      user: userId[0],
    },
    {
      name: 'Bowie Needs a Regular Walk',
      category: 'Pet Care',
      description: 'My even-tempered mastiff Bowie needs a good morning walk 3 days a week when I am unavailable.',
      img: 'http://static3.uk.businessinsider.com/image/589a1765dd0895cb6e8b49f8-1200/.jpg',
      user: userId[0],
    },
    {
      name: 'Install Linux on my Windows Machine',
      category: 'Computer',
      description: 'For some reason I can\'t figure this out on my own!',
      img: 'https://s3.amazonaws.com/aspph-wp-production/app/uploads/2017/03/Ans-.jpg',
      user: userId[0],
    },
    {
      name: 'Feed My Iguana',
      category: 'Pet Care',
      description: 'Please come by and feed my iguana. Her name is Arizona and she primarily eats cockroaches.',
      img: 'https://www2.mmu.ac.uk/media/mmuacuk/style-assets/images/r-research/profile-Zeyad.jpg',
      user: userId[0],
    },
    {
      name: 'fix my clogged up drain',
      category: 'Home Maintenance',
      description: 'Something must have gotten stuck in there.',
      img: 'http://www.binarytradingforum.com/core/image.php?userid=27&dateline=1355305878',
      user: userId[0],
    },
    {
      name: 'Build me a fullstack web application',
      category: 'Computer',
      description: 'It doesn\'t matter to me what it does. I only care how full of a stack it is.',
      img: 'https://cap.stanford.edu/profiles/viewImage?profileId=65672&type=square&ts=1509500008416',
      user: userId[0],
    },
  ];
  const skillSeeds = [
    {
      name: 'Drive you around',
      category: 'Transportation',
      description: 'My car is reliable and clean, I have a driver\'s license, I probably also drive for Lyft and Uber.',
      img: 'https://cap.stanford.edu/profiles/viewImage?profileId=4024&type=square&ts=1509566427223',
      user: userId[1],
    },
    {
      name: 'Available to film your movie',
      category: 'Audio/Visual',
      description: 'I have great skill with camera and editing.',
      img: 'https://corporate.ford.com/content/dam/corporate/en/careers/employee-profiles/molli-andor/380x380Profile-Molli.jpg',
      user: userId[1],
    },
    {
      name: 'Install Linux on your Windows Machine',
      category: 'Computer',
      description: 'I\'ll get Linux running for you, so you can run from Windows.',
      img: 'http://glia.ca/scm/2013/ge1127_b/wp-content/uploads/2013/10/594partner-profile-pic-An.jpg',
      user: userId[1],
    },
    {
      name: 'Cook Your Meal',
      category: 'Food',
      description: 'I\'ll bring ingredients into your kitchen and combine them to create you a delicious meal.',
      img: 'https://narrow.jp/img/upload/talent/W15-0332-171115.jpg',
      user: userId[1],
    },
    {
      name: 'Clean Your House',
      category: 'Home Maintenance',
      description: 'I am incredibly detail oriented.',
      img: 'http://static3.businessinsider.com/image/528a7b2769bedd0829f098bb/ryan-bushey.jpg',
      user: userId[1],
    },
    {
      name: 'Talk Things Over',
      category: 'Companionship',
      description: 'I can listen and discuss your feelings about the things in your life.',
      img: 'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
      user: userId[1],
    },
  ];
  const needId = [];
  const skillId = [];
  const needsPromises = needSeeds.map(oneNeed => (
    db.Need.create(oneNeed).save()
      .then((instance) => {
        console.log(`need seed: ${instance.name}`);
        needId.push(instance._id);
      })
      .catch(err => console.error(err))
  ));

  const skillsPromises = skillSeeds.map(oneSkill => (
    db.Skill.create(oneSkill).save()
      .then((instance) => {
        console.log(`skill seed: ${instance.name}`);
        skillId.push(instance._id);
      })
      .catch(err => console.error(err))
  ));

  Promise.all([...needsPromises, ...skillsPromises]).then(() => {
    const needMessageSeeds = [
      {
        needRef: needId[0],
        body: 'oh my god yes',
        sender: userId[0],
        recipient: userId[1],
      },
      {
        needRef: needId[1],
        body: 'I feel a hunger coming on',
        sender: userId[1],
        recipient: userId[0],
      },
    ];
    const skillMessageSeeds = [
      {
        skillRef: skillId[0],
        body: 'what a day!',
        sender: userId[0],
        recipient: userId[1],
      },
      {
        skillRef: skillId[0],
        body: 'boy am I tired',
        sender: userId[1],
        recipient: userId[0],
      },
    ];
    const skillMessagePromises = skillMessageSeeds.map(oneMessage => (
      db.SkillMessage.create(oneMessage).save()
        .then((instance) => {
          console.log(`skill message seed: ${instance.body}`);
        })
        .catch(err => console.error(err))
    ));
    const needMessagePromises = needMessageSeeds.map(oneMessage => (
      db.NeedMessage.create(oneMessage).save()
        .then((instance) => {
          console.log(`need message seed: ${instance.body}`);
        })
        .catch(err => console.error(err))
    ));
    Promise.all([...skillMessagePromises, ...needMessagePromises]).then(() => {
      process.exit();
    });
  });
});
