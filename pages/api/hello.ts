// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// if we go to /api/hello we will get the following response
// 
// {
//   "name": "John Doe"
// }

type Data = {
  name: string
}

export default function handler(
  
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
