module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A dubious friend may be an enemy in camouflage.",
      "A faithful friend is a strong defense.",
      "A feather in the hand is better than a bird in the air.",
      "A fresh start will put you on your way.",
      "A friend asks only for your time not your money.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  addFortune: (req, res) => {
    let { fortune } = req.body;
    fortune.push(fortune);
    res.status(200).send("The fortune has been added");
  },

  updateFortune: (req, res) => {
    let { index } = req.params;
    let { fortune } = req.body;

    fortunes.splice(index, 1, fortune);
    res.status(200).send("The fortune was updated");
  },

  deleteFortune: (req, res) => {
    let { index } = req.params;

    fortunes.splice(index, 1);
    res.status(200).send("The fortune was deleted");
  },
};
 