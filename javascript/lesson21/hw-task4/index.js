// export const setTitle = text => {
//   const title = document.querySelector('.title');
//   title.textContent = `${text}`;
// };
// setTitle('I am best developer');

export function setTitle(text) {
  const title = document.querySelector('.title');
  title.textContent = text;
}
setTitle('hi');
