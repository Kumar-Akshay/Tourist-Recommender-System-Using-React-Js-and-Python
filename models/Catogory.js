import mongoose from "mongoose";

const { String, ObjectId } = mongoose.Schema.Types;

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        place: [{ 
            type: ObjectId,
            ref: 'Placeinfo'
        }]
    }
);


export default mongoose.models.Categoryinfo || mongoose.model('Categoryinfo', CategorySchema)