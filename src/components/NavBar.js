import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  state = {}
  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu fixed='top'>
        <Menu.Item
          as={Link} to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link} to='/register'
          name='register'
          active={activeItem === 'register'}
          onClick={this.handleItemClick}
        >
          Register
        </Menu.Item>
        <Menu.Item
          as={Link} to='/login'
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        >
          Log In
        </Menu.Item>
      </Menu>
    )
  }
}
export default NavBar;
