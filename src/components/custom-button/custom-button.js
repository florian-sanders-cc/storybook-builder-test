import { css, html, LitElement } from 'lit';

/**
 * A very simple custom button.
 *
 * @cssdisplay inline-block
 *
 */
export class CustomButton extends LitElement {
  static get properties () {
    return {
      label: { type: String },
      intent: { type: String, reflect: true },
    };
  }

  constructor () {
    super();

    /** @type {string} the label displayed within the button */
    this.label = '';

    /** @type {'primary'|'secondary'} the style of the button, `primary` stands out while `secondary` is more subtle */
    this.intent = 'primary';
  }

  render () {
    return html`
      <button>${this.label}</button>
    `;
  }

  static get styles () {
    return [
      css`
        :host {
          display: inline-block;
        }

        :host([intent='primary']) button {
          background-color: blue;
          border: solid 1px blue;
          color: white;
        }

        :host([intent='secondary']) button {
          border: solid 1px blue;
        }
      `,
    ];
  }
}

customElements.define('custom-button', CustomButton);