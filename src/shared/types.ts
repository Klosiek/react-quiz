export interface Profile {
  avatarUrl?: string;
  displayName?: string;
  email: string;
  providerData: [];
  experience: number;
  games: Game[];
}

export interface Game {
  gameId: string;
  players: Profile[];
  winner: string;
}
