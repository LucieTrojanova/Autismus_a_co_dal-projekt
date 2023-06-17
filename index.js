/* Replace the normal space after a single letter word with a non-breaking space
function fixSingleLetterWords(text) {
  const prepositions = ['a', 'i', 'k', 'o', 's', 'u', 'v', 'z', 'A'];
  const regex = new RegExp(`\\b(${prepositions.join('|')})\\s`, 'gm');
  const fixedText = text.replace(regex, '$1&nbsp;');
  return fixedText;
}

Apply the function to <p> elements
const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i];
  paragraph.innerHTML = fixSingleLetterWords(paragraph.innerHTML);
}*/

function menuVisible() {
  var menu = document.querySelector('.content_right');
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}

document
  .querySelector('#hamburger_menu')
  .addEventListener('click', menuVisible);
