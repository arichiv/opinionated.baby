import {
  OAuth2Client,
} from "google-auth-library";
import {
  google,
} from "googleapis";
import vault from "node-vault";

export interface IAccessToken {
  tokens: { access_token?: string | null };
}

export interface IAccessTokenInfo {
  data: { email?: string | null | undefined; user_id?: string | null | undefined; verified_email?: boolean | null | undefined };
}

async function genVaultClient(
): Promise<vault.client> {
  return vault({
    apiVersion: 'v1',
    endpoint: "https://nomoresecrets.chivuku.la:443",
    token: process.env.TF_VAR_VAULT_TOKEN,
  });
}

async function genOAuthClient(
): Promise<OAuth2Client> {
  const client = await genVaultClient();
  const client_id = await client.read("opinionated.baby/data/TF_VAR_CLIENT_ID");
  const client_secret = await client.read("opinionated.baby/data/TF_VAR_CLIENT_SECRET");
  return new OAuth2Client(
    client_id["data"]["data"][""],
    client_secret["data"]["data"][""],
    "https://" + process.env.TF_VAR_DOMAIN,
  );
}

export async function genLoginURL(
): Promise<string> {
  const client = await genOAuthClient();
  return client.generateAuthUrl({
    scope: ["profile", "email"],
  });
}

export async function genAccessToken(
  code: string,
): Promise<string> {
  const client = await genOAuthClient();
  const accessToken: IAccessToken = await client.getToken(code);

  return accessToken.tokens.access_token as string;
}

export async function genAccessTokenInfo(
  accessToken: string,
): Promise<IAccessTokenInfo> {
  return google
    .oauth2("v2")
    .tokeninfo({access_token: accessToken});
}

export async function genUserForAccessToken(
  accessToken: string,
): Promise<object> {
  const info: IAccessTokenInfo = await genAccessTokenInfo(accessToken);
  if (info.data.user_id === undefined || info.data.user_id === null) {
    throw new Error("Missing user id");
  }
  if (info.data.email === undefined || info.data.email === null) {
    throw new Error("Missing email");
  }
  return { id: info.data.user_id, email: info.data.email };
}
