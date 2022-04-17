import React from 'react';

class AddItemForm extends React.Component {

    state = {
        text: ''
    }

    handleTextChange = (value) => {
        this.setState({text: value})
    }

    render() {
        const {handleAddTodo} = this.props;
        return (
          <div>
              <input
                value={this.state.text}
                onChange={(e) => this.handleTextChange(e.target.value)}
              />
              <br />
              <button onClick={() => {
                  handleAddTodo(this.state.text)
                  this.setState({text: ''})
              }}>Add todo</button>
          </div>
        );
    }
}

export default AddItemForm;