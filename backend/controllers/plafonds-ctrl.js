const { default: mongoose } = require("mongoose");
const Plafonds = require("../models/plafonds-model");

const ObjectId = mongoose.Types.ObjectId; 

updatePlafonds = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Plafonds.findOne({ _id: req.params.id }, (err, plafonds) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Plafonds not found!",
      });
    }
    plafonds.user = body.user;
    plafonds.yearlyPlafond = body.yearlyPlafonds;
    plafonds.usedPlafond = body.usedPlafond;
    plafonds
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: plafonds._id,
          message: "Plafonds updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Plafonds not updated!",
        });
      });
  });
};

getPlafondsByUser = async (req, res) => {
  const query = { "userId":  req.params.id  }
  await Plafonds.findOne(query, (err, plafonds)=> {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!plafonds) {
      return res.status(404).json({ success: false, error: `Plafonds not found` });
    }
    return res.status(200).json({ success: true, plafonds: plafonds });
  }).catch((err) => console.log(err));
};


module.exports = {
  updatePlafonds,
  getPlafondsByUser,
};
