import './App.css';
import React from "react";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userType: this.NO_USER
    };
  }

  SIMPLE_USER = () => "simple_user";
  TRAINER = () => "trainer";
  ORGANISER = () => "organiser";
  NO_USER = () => "no_user";

  simpleUserRegister = () => {
    console.log("\t\t\t>>> simpleUserRegister");
    // Появляется форма регистрации для simpleUser
    this.setState({userType: this.SIMPLE_USER})
  };

  trainerRegister = () => {
    console.log("\t\t\t>>> trainerRegister");
    // Появляется форма регистрации для trainer
    this.setState({userType: this.TRAINER})
  };

  organiserRegister = () => {
    console.log("\t\t\t>>> organiserRegister");
    // Появляется форма регистрации для organiser
    this.setState({userType: this.ORGANISER})
  };

  enter = () => {
    console.log("\t\t\t>>> enter");
    // Появляется форма логина
  };

  out = () => {
    console.log("\t\t\t>>> out");
    this.setState({userType: this.NO_USER})
  };

  getRegisterButtons = (userType) => {
    if (userType === this.NO_USER) {
      return <div className="Register-buttons">
        <button onClick={this.simpleUserRegister}>Зарегистрироваться как обычный пользователь</button>
        <button onClick={this.trainerRegister}>Зарегистрироваться как тренер</button>
        <button onClick={this.organiserRegister}>Зарегистрироваться как организатор</button>
      </div>
    } else {
      return <div/>;
    }
  };

  getCabinet = (userType) => {
    switch (userType) {
      case this.SIMPLE_USER:
        return <div>Кабинет обычного пользователя</div>;
      case this.ORGANISER:
        return <div>Кабинет организатора</div>;
      case this.TRAINER:
        return <div>Кабинет тренера</div>;
      default:
        return <div/>;
    }
  };

  render() {
    console.log("\t\t\t>>> RENDER");
    console.log("\t\t\t>>> USER TYPE: " + this.state.userType);
    return (
        <div>
          <div className="App-header">
            {this.state.userType === this.NO_USER ? <button onClick={this.enter}>Вход</button> :
                <button onClick={this.out}>Выход</button>}
          </div>

          <div className="App-body">
            {this.getRegisterButtons(this.state.userType)}
            {this.getCabinet(this.state.userType)}
          </div>
        </div>
    );
  }
}

export default App;
