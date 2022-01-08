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
    const account = await prisma.account.create({
      data: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        password: req.body.password,
        email_id: req.body.email_id,
        mobile_no: req.body.mobile_no,
      },
    });
    return res
      .status(200)
      .json({ account, message: "User Sign Up Successfully" });
  } catch (error) {
    return res.status(400).json({ message: "Error" });
  }
}
