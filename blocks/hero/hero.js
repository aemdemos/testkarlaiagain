
export default function decorate(block) {
  // Create a new wrapper div for the left column
  const leftColumn = document.createElement('div');
  leftColumn.classList.add('hero-left');

  // Create a new wrapper div for the right column
  const rightColumn = document.createElement('div');
  rightColumn.classList.add('hero-right');

  // Move the content inside the block to the left column
  while (block.firstChild) {
    leftColumn.appendChild(block.firstChild);
  }

  // Move the image to the right column
  const image = leftColumn.querySelector('img');
  rightColumn.appendChild(image.closest('picture'));

  // Append the left and right columns to the block
  block.appendChild(leftColumn);
  block.appendChild(rightColumn);
}
