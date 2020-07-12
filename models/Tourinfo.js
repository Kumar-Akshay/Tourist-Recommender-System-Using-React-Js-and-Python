import mongoose from "mongoose";

const { String, ObjectId } = mongoose.Schema.Types;

const TourInfoSchema = new mongoose.Schema(
    {
        date: {
            type: String,
            required: true
        },
        payment: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        place_id: [{
            type: ObjectId,
            ref: 'Placeinfo',
        }]
    }
);

export default mongoose.models.Tourinfo || mongoose.model("Tourinfo", TourInfoSchema);
