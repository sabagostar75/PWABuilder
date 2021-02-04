import { css, customElement, html, LitElement, property } from 'lit-element';
import {
  BreakpointValues,
  largeBreakPoint,
  mediumBreakPoint,
  smallBreakPoint,
  xLargeBreakPoint,
  xxLargeBreakPoint,
} from '../utils/breakpoints';

@customElement('content-header')
export class ContentHeader extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        background: url(/assets/images/background-copy.webp);
        background-position: center;
        background-size: cover;
      }

      #main-container {
        display: flex;
        align-items: center;
        padding-bottom: 91px;
        padding-left: 2em;
      }

      img {
        margin-left: 30px;
        height: 389px;
        width: 369px;
      }

      ${smallBreakPoint(css`
        #main-container {
          flex-direction: column-reverse;
        }

        img {
          margin-left: 0;
          width: 226px;
          height: 226px;
          margin-top: 16px;
        }

        #content-side {
          padding: 1em;
        }

        #main-container {
          padding-top: initial;
          padding-bottom: 51px;
        }

        #hero-container {
          text-align: center;
        }

        ::slotted(ul) {
          grid-gap: 10px;
        }
      `)}

      ${mediumBreakPoint(css`
        #main-container {
          flex-direction: column-reverse;
        }

        img {
          margin-left: 0;
          width: 100%;
          height: 226px;
          margin-top: 16px;
        }

        #content-side {
          padding: 1em;
        }

        #hero-container {
          text-align: center;
        }

        #main-container {
          padding-top: initial;
        }
      `)}

      ${largeBreakPoint(css`
        ::slotted(ul) {
          grid-gap: 10px;
        }

        img {
          height: 282px;
          width: 268px;
        }
      `)}

      ${xLargeBreakPoint(css`
        img {
          height: 100%;
          width: initial;
        }
      `)}

      ${xxLargeBreakPoint(css`
        #content-side {
          width: 44em;
        }
      `)}
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div part="main-container" id="main-container">
        <section id="content-side">
          <div id="hero-container">
            <slot name="hero-container"></slot>
          </div>

          <slot part="grid-container" name="grid-container"></slot>

          <slot name="input-container"></slot>
        </section>

        <section>
          <slot name="picture-container">
            <picture>
              <source
                srcset="/assets/images/pwab3d.png"
                media="(max-width: ${BreakpointValues.mediumLower}px)"
              />
              <source
                srcset="/assets/images/full_header_logo.png"
                media="(max-width: ${BreakpointValues.mediumUpper}px)"
              />
              <img
                src="/assets/images/pwab3d.png"
                alt="3d version of the PWABuilder logo"
              />
            </picture>
          </slot>
        </section>
      </div>
    `;
  }
}