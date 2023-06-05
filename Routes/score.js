const express = require("express");
const router = express.Router();

const {
getAllScores,
createScore
} = require("../Controllers/score")

router
.route("/score")
.get(getAllScores)
.post(createScore)


module.exports = router;