import { Character } from './character.api-model';

const apiUrl = '/api/characters';

export const getCharacter = async (id: number): Promise<Character> => {
  const response = await fetch(`${apiUrl}/${id}`);
  if (response.ok) return response.json();
  else throw new Error(response.statusText);
};
