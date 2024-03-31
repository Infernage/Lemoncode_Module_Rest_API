import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';
import {Link} from "react-router-dom";
import {linkRoutes} from "../../../core/router";

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Card>
      <CardHeader
        title={<Link to={(linkRoutes.editCharacter(character.id))} >{character.name}</Link>}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.picture}
            title={character.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
