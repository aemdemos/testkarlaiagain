
export default function decorate(block) {
  // Apply styles to the block element
  block.classList.add('columns');

  // Iterate over the child elements to set the required styles
  const sections = block.querySelectorAll('div > div');
  sections.forEach((section) => {
    section.style.display = 'flex';
    section.style.flexDirection = 'column';
    section.style.gap = '10px';
  });

  // Style the headings
  const headings = block.querySelectorAll('h4');
  headings.forEach((heading) => {
    heading.style.fontWeight = 'bold';
    heading.style.marginBottom = '20px';
  });

  // Style the list items
  const listItems = block.querySelectorAll('ul li');
  listItems.forEach((item) => {
    item.style.marginBottom = '10px';
  });

  // Style the links
  const links = block.querySelectorAll('a');
  links.forEach((link) => {
    link.style.display = 'inline-block';
    link.style.padding = '10px 20px';
    link.style.border = '2px solid #035fe6';
    link.style.borderRadius = '20px';
    link.style.color = '#035fe6';
    link.style.textDecoration = 'none';
    link.style.fontWeight = 'bold';
    link.style.fontFamily = 'roboto, roboto-fallback';
    link.style.transition = 'background-color 0.3s, color 0.3s';
    
    link.addEventListener('mouseover', () => {
      link.style.backgroundColor = '#035fe6';
      link.style.color = 'white';
    });
    
    link.addEventListener('mouseout', () => {
      link.style.backgroundColor = 'white';
      link.style.color = '#035fe6';
    });
  });
}
