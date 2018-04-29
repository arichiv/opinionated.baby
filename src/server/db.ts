/**
 * This file is partially generated; only edit bespoke sections.
 *
 * SOURCE<<gen/server/db.ts::module>>
 * BESPOKE<<DEPRECATE>>
 * SIGNED<<4ucXEIouHXEWhrsn2uGCeH8GeowODJGD84XtUYLhWg8AcdcnvvOwwbLrQJy9fbnyx0A0ZMQB2zo1A98h893l2A==>>
 */

import { createConnection, getRepository } from "typeorm";

import { User } from "./entity/User";
import { genAccessTokenInfo, IAccessTokenInfo } from "./google";

/* BESPOKE START <<DEPRECATE>> */
export async function genSetupDB(): Promise<void> {
  await createConnection({
    database: process.env.DB_NAME,
    entities: [User],
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT as string, 10),
    type: "postgres",
    username: process.env.DB_USERNAME,
  });
}

export async function genUserForAccessToken(accessToken: string): Promise<User> {
  const info: IAccessTokenInfo = await genAccessTokenInfo(accessToken);
  let user: User | undefined = await getRepository(User)
    .findOne(info.data.user_id);
  if (user === undefined) {
    user = new User();
    user.id = info.data.user_id;
    user.email = info.data.email;
    await getRepository(User)
      .save(user);
  }

  return user;
}
/* BESPOKE END <<DEPRECATE>> */
