import React from 'react';
import { connect } from './simple-redux/simple-react-redux';
import { addGun, removeGun, ayncGun, twiceGun } from './gun-redux';


class App extends React.Component {
  render() {
    const num = this.props && this.props.gun && this.props.gun.num;

    return (
      <div>
        <h2>当前机关枪的数量：{num}</h2>
        <button onClick={() => this.props.addGun()}>增加一把</button>
        <button onClick={() => this.props.removeGun()}>移除一把</button>
        <button onClick={() => this.props.ayncGun()}>过两天再申请</button>
        <button onClick={() => this.props.twiceGun()}>申请两把</button>
      </div >
    );
  }
}

App = connect(
  state => ({ gun: state }),
  { addGun, removeGun, ayncGun, twiceGun }
)(App)

export default App;
