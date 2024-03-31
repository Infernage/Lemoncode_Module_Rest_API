import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import {
  TextFieldComponent
} from 'common/components';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';
import {useNavigate} from "react-router-dom";

interface Props {
  character: Character;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character } = props;
  const navigate = useNavigate();

  return (
    <Formik
      onSubmit={() => {}}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="type" label="Type" />
          <TextFieldComponent name="status" label="Status" />
          <TextFieldComponent name="species" label="Species" />
          <TextFieldComponent name="gender" label="Gender" />
          <Button type="button" variant="contained" color="primary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Form>
      )}
    </Formik>
  );
};
