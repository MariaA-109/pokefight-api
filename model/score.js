const mongoose = require("mongoose");
const { Schema } = mongoose;

const Score = new Schema({
    first_pokemon: {
        type: String,
        required: true,
    },
    second_pokemon: {
        type: String,
        required: true
    },
    winner: {
        type: String,
        required: true
    },
    total_wins: {
        type: Number
    }
}

);

module.exports = mongoose.model("Score", Score);
