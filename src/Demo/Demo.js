import React, {Component} from 'react';


class Demo extends Component {

  render() {
  const {name} = this.props;

    return (
      <div>
        {name}
      </div>
    );
  }
}

// const Demo = () => {
// const someData = 1;
//
//   return (
//     <div>
//       Demonstration
//     </div>
//   );
// };

export default Demo;