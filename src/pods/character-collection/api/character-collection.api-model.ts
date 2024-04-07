export interface CharacterEntityApi {
  id: number;
  type: string;
  name: string;
  created: Date;
  status: string;
  species: string;
  gender: string;
  origin: unknown;
  location: {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: Date;
  };
  image: string;
  episode: string[];
  url: string;
  bestSentences: string;
}
