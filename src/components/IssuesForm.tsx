import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, FormControl, Typography } from '@material-ui/core';
import db from '../utils/firebaseSetup';
import { AuthedUser } from '../utils/types';

const StyledButton = styled(Button)`
  box-shadow: none;
  width: 175px;
  margin: auto;
  margin-top: 40px;
  border-radius: 0px;
`;

const StyledForm = styled.form`
  margin-bottom: 25px;
  width: min(90vw, 550px);
  margin: auto;
`;

interface props {
  user: AuthedUser;
}

export default function IssuesForm({ user }: props) {
  const [issue, setIssue] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const submitCommunity = async () => {
    try {
      await db.collection('submitted-issues').add({
        user: user?.email,
        desc: issue,
      });
      setSubmitMessage('Your submission was successful!');
    } catch (e) {
      setSubmitMessage('There was an issue with your submission :(');
    }
    setTimeout(() => setSubmitMessage(''), 2000);
    setIssue('');
  };

  return (
    <>
      {submitMessage !== '' ? (
        <p>{submitMessage}</p>
      ) : (
        <StyledForm>
          <Typography>
            Please use this to let us know of any issues regarding the communities listed or with the site in general.
          </Typography>
          <FormControl fullWidth margin='normal'>
            <TextField
              type='contact'
              id='contact'
              name='contact'
              variant='outlined'
              label='Contact'
              disabled
              value={user?.email}
              required
            />
            <br />
            <TextField
              type='text'
              multiline
              rows={5}
              id='description'
              helperText='500 character limit'
              name='description'
              variant='outlined'
              label='Issue Description'
              onChange={(e) => setIssue(e.target.value)}
              value={issue}
              inputProps={{ maxLength: 500 }}
              required
            />
            <br />
            <StyledButton variant='contained' color='primary' onClick={submitCommunity}>
              Submit
            </StyledButton>
          </FormControl>
        </StyledForm>
      )}
    </>
  );
}
