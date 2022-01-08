import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Invalid" });
  }

  try {
    const user = await prisma.account.findUnique({
      where: {
        user_name: req.body.user_name,
      },
    });
    if (user?.password === req.body.password) {
      return res
        .status(200)
        .json({ verified: true, message: "User Login Successfully" });
    }

    return res
      .status(200)
      .json({ verified: false, message: "User Login Unsuccessfully" });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
}
