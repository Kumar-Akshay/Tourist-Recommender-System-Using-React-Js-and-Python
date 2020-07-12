import connectDb from "../../utils/connectDb";
import Plcaeinfo from  '../../models/Placeinfo';

connectDb();

export default async (req, res) => {
  try {
    const places = await Plcaeinfo.find();
    res.status(201).json(places);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error . Please try again later");
  }
};
