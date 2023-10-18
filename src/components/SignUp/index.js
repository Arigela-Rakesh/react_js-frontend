import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    name: '',
    gender: '',
    location: '',
  }

  onSubmitSuccess = () => {
    console.log('Account created successfully')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, name, password, gender, location} = this.state
    const userDetails = {username, name, password, gender, location}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    // const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }

  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  renderLocationField = () => {
    const {location} = this.state
    return (
      <>
        <label className="input-label" htmlFor="location">
          LOCATION
        </label>
        <input
          type="text"
          id="location"
          className="username-input-filed"
          value={location}
          onChange={this.onChangeLocation}
        />
      </>
    )
  }

  renderGenderField = () => {
    const {gender} = this.state
    return (
      <>
        <label className="input-label" htmlFor="gender">
          GENDER
        </label>
        <input
          type="text"
          id="gender"
          className="username-input-filed"
          value={gender}
          onChange={this.onChangeGender}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderNameField = () => {
    const {name} = this.state
    return (
      <>
        <label className="input-label" htmlFor="name">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className="username-input-filed"
          value={name}
          onChange={this.onChangeName}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderNameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderGenderField()}</div>
          <div className="input-container">{this.renderLocationField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
