import mongoose from "mongoose";

const watchListSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    stocks: [
    {
        name: {
        type: String,
        },
        instrumentKey: {
        type: String,
        },
    }
    ]
});

const WatchList = mongoose.model("WatchList", watchListSchema);
export default WatchList;