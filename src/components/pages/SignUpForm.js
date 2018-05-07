import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const SignUpForm = (props) => (
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
        <Header as='h2' color='teal' textAlign='center'>
          Register for a new account
        </Header>
        <Form onSubmit={props.onSubmit} size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              name='email'
              onChange={props.onChange}
              value={props.user.email}
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              name='password'
              onChange={props.onChange}
              value={props.user.password}
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>Submit</Button>
          </Segment>
        </Form>
        <Message>
          Already a member? <Link to='/login'>Log In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};


export default SignUpForm;
