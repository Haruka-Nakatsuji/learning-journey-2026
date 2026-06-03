import { Button, Grid } from '@mui/material';

export const GridBasic = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 4, md: 6 }} fullWidth>
        <Button variant='contained' fullWidth>
          aaa
        </Button>
      </Grid>
      <Grid size={{ xs: 12, sm: 4, md: 6 }} fullWidth>
        <Button variant='contained' fullWidth>
          aaa
        </Button>
      </Grid>
      <Grid size={{ xs: 5, sm: 2, md: 1 }} fullWidth>
        <Button variant='contained' fullWidth>
          aaa
        </Button>
      </Grid>
      <Grid size={{ xs: 7, sm: 2, md: 3 }} fullWidth>
        <Button variant='contained' fullWidth>
          aaa
        </Button>
      </Grid>
      <Grid size={12} fullWidth>
        <Button variant='contained' fullWidth>
          aaa
        </Button>
      </Grid>
    </Grid>
  );
};
