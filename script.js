
const randomFacts = () => {
  return {
    funny : [
      "food tastes better when someone else makes it",
      "we always try to return a favor",
      "our brains want us to be lazy",
      "you're programmed to love the music you listened to in high school the most",
      "memories are more like pieced-together pictures than accurate snapshots",
      "when you see bright blue and red right next to each other, your brain thinks the red is closer than the blue, making you go practically cross-eyed",
      "good liars are also the good ones in detecting lies from others",
      "the length of your tongue tells something about your sexual curiosity"
    ],
    weird : [
      "fear can feel good—if we're not really in danger",
      "we'd rather know something bad is coming than not know what to expect",
      "our brains try to make boring speeches more interesting",
      "our favorite subject is ourselves no matter how selfless you think you are",
      "some people enjoy seeing anger in others",
      "too much choice can become paralyzing",
      "to our ancestors, sugar and fat were good things",
      "our brain doesn't think long-term deadlines are so important"
    ],
    exciting : [
      "catching a yawn could help us bond",
      "we're convinced that the future is bright, we all have an optimism bias",
      "having positive and happy people around you can keep you happier",
      "hsking ‘Will I?’ is more motivating than saying ‘I Will",
      "hpending money on experiences have a greater value for you",
      "singing could make you feel less anxious and depressed",
      "sarcasm is a sign of a healthy brain",
      "Optimism could be taught, there's still hope!"
    ],
    surprising : [
      "when one rule seems too strict, we want to break more",
      "being lonely is bad for our health",
      "when you feel like you're low on something (like money), you obsess over it",
      "we look for human faces, even in inanimate objects",
      "we can convince ourselves a boring task was fun if we weren't rewarded",
      "we loosen our morals when an authority tells us to",
      "the way you dress has a connection with your mood",
      "your dreams are more meaningful than your conscious thoughts"
    ],
    awful : [
      "we care more about a single person than about massive tragedies",
      "it takes five positive things to outweigh a single negative thing",
      "we automatically second-guess ourselves when other people disagree",
      "we aren't as good at multitasking as we think we are",
      "we keep believing things, even when we know they're wrong",
      "we'd rather skew the facts than change our beliefs about people",
      "social media is psychologically designed to be addictive",
      "power makes people care less about others"
    ],
    randomAdj (){
      const adjectives = ['funny', 'weird', 'exciting', 'surprising', 'awful'];
      return adjectives[Math.floor(Math.random() * 5)];
    },
    chooseFact () {
      let adjective = this.randomAdj();
      let randomNum = Math.floor(Math.random() * 8);
      switch (adjective){
        case 'funny':
          return `isn't ${adjective} that \n${this.funny[randomNum]}`;
          break;
        case 'weird':
          return `isn't ${adjective} that \n${this.weird[randomNum]}`;
          break;
        case 'exciting':
          return `isn't ${adjective} that \n${this.exciting[randomNum]}`;
          break;
        case 'surprising':
          return `isn't ${adjective} that \n${this.surprising[randomNum]}`;
          break;
        case 'awful':
          return `isn't ${adjective} that \n${this.awful[randomNum]}`;
          break;
      }
    },
    
  }
};
function runProgram(){
  var random_facts = randomFacts();
  console.log(random_facts.chooseFact());
};
runProgram();



