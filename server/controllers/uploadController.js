// upload handling

module.exports = {
  upload: (req, res) => {
    console.log(req.body);
    res.json('hey! we have not uploaded anything yet! but you hit the route. You did good. It\'s just I still hafta build this part. Thanks for understanding! -json');
  },
};
