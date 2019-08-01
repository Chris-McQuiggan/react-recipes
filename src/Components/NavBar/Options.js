import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} inNavbar='true' direction='left'>
        <DropdownToggle caret>
          Options
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>View Recipes</DropdownItem>
          <DropdownItem>New Recipe</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Update Recipe</DropdownItem>
          <DropdownItem>Delete Recipe</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}