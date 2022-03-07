// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {videos} from "../../../videos"
export default function handler(req, res) {
    res.status(200).json(videos)
  }
  