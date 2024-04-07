import { Character } from './character.api-model';

const apiUrl = '/api/characters';

export const getCharacter = async (id: number): Promise<Character> => {
  const response = await fetch(`${apiUrl}/${id}`);
  if (response.ok) return response.json();
  else throw new Error(response.statusText);
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  await fetch(`${apiUrl}/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  });
  return true;
}
