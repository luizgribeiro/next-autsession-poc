// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

type session = {
  userId: string | null;
  accounts: string[] | null;
  permissionAccounts: any[] | null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<session>
) {
  res
    .status(200)
    .json({
      userId: "123456789",
      accounts: ["coca-cola", "mate"],
      permissionAccounts: ["depositar", "pagar", "pix"],
    });
}
