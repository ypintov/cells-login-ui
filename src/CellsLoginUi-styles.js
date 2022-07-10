/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
  --bg-color-component: #072146;
  --bg-form: rgba(0, 0, 0, 0.2);
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.login-container {
  background-color: var(--bg-color-component);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.login-container__form {
  width: 350px;
  background-color: var(--bg-form);
  padding: 15px 20px;
  color: white;
  box-shadow: 10px -10px #006C6C;
}
.login-container__form h2 {
  margin: 0;
  font-weight: lighter;
  font-size: 1.2em;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.login-container__form .form-body {
  padding: 15px 0 10px 0;
}
.login-container__form .form-body bbva-web-form-select, .login-container__form .form-body bbva-web-form-text, .login-container__form .form-body bbva-web-form-password {
  margin-bottom: 10px;
}
.login-container__form .form-body bbva-web-button-default {
  width: 100%;
  --_bg-color: #006C6C;
  --_ripple-color: #028484;
}
@media screen and (max-width: 320px) {
  .login-container__form {
    width: 88%;
    box-shadow: 5px -5px #006C6C;
    padding-bottom: 5px;
  }
}
`;