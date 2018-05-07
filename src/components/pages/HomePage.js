import React from 'react';
import { Grid, Card } from 'semantic-ui-react';

const HomePage = () => (
  <div className='signup-form'>
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.signup-form {
            height: 100%;
          }
        `}</style>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 450 }}>
      <Card
        className='container'
        raised
        header='Welcome to the HomePage'
        description='This is the new home for face_mask, an awesome project on Github'
      />
      </Grid.Column>
    </Grid>
  </div>

)

export default HomePage;
