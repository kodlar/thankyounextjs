import {videos} from "../../../videos"
export default function handler(req, res) {
    const {id} = req.query;
    const video = videos.find(video => video.id.toString() === id);
    if(video != null)
      {
        res.status(200).json(video)
      }
      else
      {
        res.status(404).json({ message: "No such video!"})
      }
 
  }
  