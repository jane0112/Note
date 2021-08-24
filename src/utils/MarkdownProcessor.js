import React from 'react';
const h1 = '#';
const h2 = '##';
const h3 = '###';
const unorderlist = '*';

export function rowTranslate(rowText, idx) {
  if (rowText) {
    // const stringArray = text.split(' ');
    const prefixString = rowText.split(' ')[0];
    let text = '';
    switch (prefixString) {
      case h1:
        text = rowText.replace(h1, '');
        return (
          <h1 key={idx}>
            <b>
              <p>{text}</p>
            </b>
          </h1>
        );
      case h2:
        text = rowText.replace(`${h2} `, '');
        return <h2 key={idx}>{text}</h2>;
      case h3:
        text = rowText.replace(`${h3} `, '');
        return <h3 key={idx}>{text}</h3>;
      case unorderlist:
        text = rowText.replace(`${unorderlist} `, '');
        return (
          <ul key={idx}>
            <li>{text}</li>
          </ul>
        );
      default:
        return <p key={idx}>{text}</p>;
    }
  } else {
    return <br key={idx} />;
  }
}

export function boldDecorate(elem) {
  return <b>elem</b>;
}
