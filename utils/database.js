const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        mongoose.connect(
            process.env.MONGO_LOCAL_URL,
            { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
            function (err) {
                if (err) throw err;
                console.log("Database successfully connected");
            }
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDb;
