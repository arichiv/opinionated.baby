import express from "express";

import { genUserForAccessToken } from "./db";
import {
  genAccessToken,
  getLoginURL,
} from "./google";
import { genNullOnThrow } from "./util";

export const root: (req: express.Request, res: express.Response) => Promise<object> =
  async (req: express.Request, res: express.Response): Promise<object> => ({
    login: async ({ input }: { input: { code: string } }): Promise<object> => {
      const accessToken: string = await genAccessToken(input.code);
      await genUserForAccessToken(accessToken);

      return { accessToken };
    },
    loginURL: async (): Promise<string> => getLoginURL(),
    logout: async (): Promise<object> => ({
      accessToken: "",
    }),
    me: async (): Promise<object | null> => genNullOnThrow(genUserForAccessToken(req.token)),
  });
