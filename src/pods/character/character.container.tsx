import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import * as api from './api';
import { Character } from './character.vm';
import {mapCharacterFromApiToVm, mapCharacterFromVmToApi} from './character.mappers';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(Number(id));
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  const handleSaveCharacter = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save hotel');
    }
  }

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  return <CharacterComponent character={character} onSave={handleSaveCharacter} />;
};
