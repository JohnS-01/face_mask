import React,{ Component } from 'react';
import { loginUser } from '../userApi';
import LoginForm from '../components/pages/LoginForm';

class LoginPage extends Component {
  constructor(){
    super();
    this.state = {
      user: {
        email: '',
        password: ''
      }
    };
    this.handleUserForm = this.handleUserForm.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  };
  conponentDidMount() {
    this.clearForm();
  };
  clearForm(){
    this.setstate({
      formdata: {email: '', password: ''}
    });
  };
  handleFormChange(event){

    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user
    });

    //this.setState({ [event.target.name]: event.target.value });
  };
  handleUserForm(event){// Todo edit api call to backend, add vaildation, and return errors or cookie
    event.preventDefault();
    let data;
    data = {
      email: this.state.user.email,
      password: this.state.user.password
    };
    loginUser(data);
  };

  render(){
    return (
      <LoginForm
        onSubmit={this.handleUserForm}
        onChange={this.handleFormChange}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
