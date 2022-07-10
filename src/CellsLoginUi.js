import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsLoginUi-styles.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-select';
import '@bbva-web-components/bbva-web-form-password/bbva-web-form-password';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-login-ui></cells-login-ui>
```

##styling-doc

@customElement cells-login-ui
*/
export class CellsLoginUi extends LitElement {
  static get is() {
    return 'cells-login-ui';
  }

  // Declare properties
  static get properties() {
    return {
      titleLogin: { type: String, attribute:'title-app'},
      documentType: String,
      documentNumber: String,
      password: String,
      itemsDocuments: Array,
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.titleLogin = 'Login App';
    this.documentType = '';
    this.password = '';
    this.documentNumber = '';
    this.itemsDocuments = [];
  }

  static get styles() {
    return [styles, getComponentSharedStyles('cells-login-ui-shared-styles')];
  }

  onchangeInput({ target }, type) {
    console.log('onchangeDocumentType[value]', target.value);
    console.log('onchangeDocumentType[type]', type);
    switch (type) {
      case 't':
        this.documentType = target.value;
        break;
      case 'n':
        this.documentNumber = target.value;
        break;
      case 'p':
        this.password = target.value;
        break;
      default:
        break;
    }
  }

   
 login(){
  console.log('login');
  let user={
    userId: `${this.documentType}${this.documentNumber}`,
    password: this. password
  }
  console.log('user:', user);
  this.dispatchEvent(new CustomEvent('on-login-evt', {
    detail: { value: user },
    bubbles: true,
    composed: true,
  }));
}

resetForm() {
  const inputs = this.shadowRoot.querySelectorAll('bbva-web-form-select, bbva-web-form-text, bbva-web-form-password');
  inputs.forEach(input => {
    input.value = '';
  });
  this.documentType = '';
  this.password = '';
  this.documentNumber = '';
  this.itemsDocuments = [];
}


  // Define a template
  render() {
    return html`
      <main class="login-container">
        <div class="login-container__form">
          <h2>${this.titleLogin}</h2>
          <div class="form-body">
            <bbva-web-form-select
              label="Tipo de documento"
              @change="${(e) => this.onchangeInput(e, 't')}"
            >
            ${this.itemsDocuments.map(
             (item) =>
               html`
                 <bbva-web-form-option value="${item.value}">${item.name}</bbva-web-form-option>
               `
           )}
            </bbva-web-form-select>

            <bbva-web-form-text
              label="Número de documento"
              @input="${(e) => this.onchangeInput(e, 'n')}"
            ></bbva-web-form-text>

            <bbva-web-form-password
              label="Contraseña"
              @input="${(e) => this.onchangeInput(e, 'p')}"
            >
            </bbva-web-form-password>

            <bbva-web-button-default @click="${this.login}" >Acceder</bbva-web-button-default>
          </div>
        </div>
      </main>
    `;
  }
}
