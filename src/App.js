import React from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, ayncGun } from './gun-redux';


class App extends React.Component {
  render() {
    return (
      <div>
        <h2>当前机关枪的数量：{this.props.gun.num}</h2>
        <button onClick={() => this.props.addGun()}>增加一把</button>
        <button onClick={() => this.props.removeGun()}>移除一把</button>
        <button onClick={() => this.props.ayncGun()}>过两天再申请</button>
      </div >
    );
  }
}

App = connect(
  state => ({ gun: state }),
  { addGun, removeGun, ayncGun }
)(App)

export default App;
