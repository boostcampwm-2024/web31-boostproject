export const resetCss = `
html, body, div, span, header, section, nav, main, article, footer, p, strong,
h1, h2, h3, h4, h5, h6, small, br, em, i, blockquote, hr, input, button,
form, option, textarea, select, fieldset, legend, label, td, tr, th,
caption, table, ul, ol, li, a {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article, header, section, nav, main, footer {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;
