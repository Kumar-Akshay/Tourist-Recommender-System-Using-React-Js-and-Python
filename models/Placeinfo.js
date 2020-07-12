import mongoose from "mongoose";

const { String, ObjectId } = mongoose.Schema.Types;

const PlaceinfoSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        description: {
            type: String
        },
        picture: {
            type: String
        },
        location: {
            lat: {
                type: Number
            },
            lng: {
                type: Number
            },
        }
    }
);


export default mongoose.models.Placeinfo || mongoose.model('Placeinfo', PlaceinfoSchema)