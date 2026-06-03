import { Button } from '@mui/material';

export const MaterialBasic = () => {
  return (
    <>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Contained</Button>
      <Button variant='text' disabled>
        Contained
      </Button>
      <Button variant='contained' color='secondary'>
        Contained
      </Button>
    </>
  );
};
