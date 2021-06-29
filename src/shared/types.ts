export enum RoutesEnum {
  HomePage = "/",
  Login = "/login",
  Register = "/login",
}

export interface Profile {
  profileId: string;
  experience: number;
}

export interface Game {
  gameId: string;
  players: Profile[];
}
