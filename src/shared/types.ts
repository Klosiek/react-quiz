export interface Profile {
  avatarUrl?: string;
  displayName?: string;
  email: string;
  providerData: [];
  experience: number;
}

export interface Game {
  gameId: string;
  players: Profile[];
}
