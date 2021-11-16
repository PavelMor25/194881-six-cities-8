export type AuthData = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
} | null;

export type RawAuthData = {
  'avatar_url': string;
  'email': string;
  'id': number;
  'is_pro': boolean;
  'name': string;
  'token': string;
};

export type UserAuthData = {
  login: string;
  password: string;
};
