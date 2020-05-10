<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">

  // VARIABLE CSS
  :root {
    --color-font-primary: #3A3A3C;
    --color-font-secondary: #6D7278;
  }

  // Create global variable for FONT ----------------------------
  // FAMILY
  $font-family: 'Roboto', sans-serif;

  // DEFAULT STYLE FOR LANDING ----------------------------
  * {
    box-sizing: border-box;

    &[hidden] {
        display: none;
    }

    &::before {
        box-sizing: border-box;
    }

    &::after {
        box-sizing: border-box;
    }
  }

  html {
      background-color: var(--color-bg-default);
      font-family: $font-family;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      font-size: 10px;
      color: #000;
      overflow-x: hidden;
  }

  body {
      background-color: #fff;
      font-family: $font-family;
      line-height: 1.5;
      overflow: hidden;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font-family: inherit;
      vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
      display: block;
  }

  img {
      border-style: none;
  }

  button, input, select, textarea {
      font-family: inherit;
      margin: 0;
      outline: none;

      &:active {
        outline: none;
      }
  }

  [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
  }

  blockquote, q {
      quotes: none;

      &:before, &:after {
          content: '';
          content: none;
      }
  }

  ul, li {
      list-style: none;
  }

  audio, canvas, progress, video {
      display: inline-block;
  }

  audio:not([controls]) {
      display: none;
      height: 0;
  }


  input[type=time]::-webkit-outer-spin-button,
  input[type=time]::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }

  input[type=time] {
      -moz-appearance: textfield;
  }

  ::-webkit-input-placeholder {
      color: inherit;
      opacity: 0.54;
  }

  ::-webkit-file-upload-button {
      -webkit-appearance: button;
      font: inherit;
  }

  ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
  }

  ::-webkit-scrollbar-track {
      background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
      background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
      background: #555;
  }

  input, select {
      border: none;
      background-color: transparent;
      outline: none;

      &:active {
        outline: none;
      }

      &:focus {
          outline: none;
      }
  }

  a {
      background-color: transparent;
      text-decoration: none;
      -webkit-text-decoration-skip: objects;
      color: #000;
      outline: none;

      &:active {
        outline: none;
      }

      &:active, &:hover {
          text-decoration: none;
          color: #000;
      }
  }

  button {
      margin: 0;
      border: none;
      background: none;
      font: inherit;
      text-transform: none;
      outline: none;

      &:active {
        outline: none;
      }

      &::-moz-focus-inner {
          border-style: none;
          padding: 0;
      }
  }
</style>
