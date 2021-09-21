function boldDecorate(elem) {
  let elemArray = elem.split('');
  let elemArrayTranslated = [];

  // 把單個*換成<i> 兩個換成<strong>
  for (let i = 0; i < elemArray.length; i++) {
    if (elemArray[i] === '*') {
      if (i > 0 && elemArray[i - 1] === '*') {// 檢查前一個字是否為*
        if (elemArrayTranslated[elemArrayTranslated.length - 1] === '<i>') { // <i> + * => <strong>
          elemArrayTranslated.pop();
          elemArrayTranslated.push('<strong>');
        } else {
          elemArrayTranslated.push('<i>');
        }
      } else { // 前一個字不是*，表示只有單一個*，則push <i>
        elemArrayTranslated.push('<i>');
      }
    } else {
      elemArrayTranslated.push(elemArray[i]);
    }
  }
  // console.log(elemArrayTranslated);

  let priorSymbol = '</strong>';
  let priorSymbolIdx = -1;
  let elemArrayFinal = [];
  // 配對symbol
  for (let i = 0; i < elemArrayTranslated.length; i++) {
    // b體 or i體*2
    if (elemArrayTranslated[i] === '<strong>') {

      if (priorSymbol === '<strong>') {
        // 上一個是b體開
        elemArrayFinal.push('</strong>'); // b體關

      } else if (priorSymbol === '<i>') {
        // 上一個是i體開，拆這個粗體變成 i體關+i體開
        elemArrayFinal.push('</i>'); // i體關
        elemArrayFinal.push('<i>'); // i體開
        
      } else {
        // </i> or </strong> 上一個是i/b體關
        elemArrayFinal.push('<strong>'); // b體開
      }

      priorSymbolIdx = elemArrayFinal.length - 1;
      priorSymbol = elemArrayFinal[priorSymbolIdx];

    } else if (elemArrayTranslated[i] === '<i>') {

      if (priorSymbol === '<strong>') {
        elemArrayFinal[priorSymbolIdx] = '*<i>';
        elemArrayFinal.push('</i>');

      } else if (priorSymbol === '<i>') {
        elemArrayFinal.push('</i>');

      } else {
        // </i> or </strong>
        elemArrayFinal.push('<i>');
      }

      priorSymbolIdx = elemArrayFinal.length - 1;
      priorSymbol = elemArrayFinal[priorSymbolIdx];

    } else {
      elemArrayFinal.push(elemArrayTranslated[i]);
    }
  }

  if (priorSymbol === '<i>') {
    elemArrayFinal[priorSymbolIdx] = '*';
  } else if (priorSymbol === '<strong>') {
    elemArrayFinal[priorSymbolIdx] = '**';
  }

  let elemTranslated = elemArrayFinal.join('');
console.log(elemTranslated);
  return elemTranslated;
}

function titleDecorate (rowText) {
  const textArray = rowText.split(' ')
  const isHashMarks = textArray[0].split('').every((char)=>char==='#')
  if(isHashMarks){
    textArray.shift(0)
    const headLevel = rowText.split(' ')[0].length > 6 ? 6 : rowText.split(' ')[0].length
    textArray.unshift(`<h${headLevel}>`)
    textArray.push(`</h${headLevel}>`)
    return textArray.join(' ')
  }else {
    return `<p>${rowText}</p>`
  }
}

export function rowTranslate(rowText, idx) {
  if (rowText && rowText.trim() !== '') {
    const elemInnerHTML = boldDecorate(rowText);
    const finalTranslated = titleDecorate(elemInnerHTML)
    return finalTranslated
  } else {
    return `<br key=${idx}>`;
  }
}
