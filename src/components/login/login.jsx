import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login} from "../../store/api-actions";
import {Header} from "../header/header";

class LoginComponent extends React.PureComponent {

  constructor(props) {
    super(props);
    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;
    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    return (

      <div className="page page--gray page--login">
        <Header/>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action=""
                onSubmit={this.handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={this.loginRef}
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={this.passwordRef}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required=""
                  />
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export const Login = connect(null, mapDispatchToProps)(LoginComponent);
