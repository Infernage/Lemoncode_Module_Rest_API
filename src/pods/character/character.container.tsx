import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { Character } from './character.vm';
import { mapCharacterFromApiToVm } from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>();
  const { id } = useParams<{ id: string }>();

  const handleLoadHotel = async () => {
    const apiCharacter = await api.getCharacter(Number(id));
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadHotel();
    }
  }, []);

  return <CharacterComponent character={character} />;
};
