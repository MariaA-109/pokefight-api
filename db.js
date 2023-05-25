const mongoose = require('mongoose');
const db = async (req, res) => {
    try {
            const URI = process.env.MONGO_URI;
            mongoose.set("strictQuery", true);
            mongoose.connect(URI);
}catch (err) {
    console.log(err);
    }