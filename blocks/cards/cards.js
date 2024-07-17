
export default function decorate(block) {
  const cards = block.querySelectorAll('.cards > div');
  cards.forEach((card) => {
    card.style.border = '1px solid var(--dark-color)';
    card.style.borderRadius = '8px';
    card.style.padding = '16px';
    card.style.backgroundColor = 'var(--background-color)';
    card.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    card.style.marginBottom = '20px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';

    const imgContainer = card.querySelector('picture');
    imgContainer.style.width = '100%';
    imgContainer.style.textAlign = 'center';
    imgContainer.style.marginBottom = '16px';

    const img = imgContainer.querySelector('img');
    img.style.borderRadius = '8px';
    img.style.maxWidth = '150px';

    const contents = card.querySelectorAll('div > div:last-child');
    contents.forEach((content) => {
      content.style.textAlign = 'left';
      content.style.width = '100%';

      const headings = content.querySelectorAll('h3');
      headings.forEach((heading) => {
        heading.style.fontSize = 'var(--heading-font-size-m)';
        heading.style.marginTop = '1em';
        heading.style.marginBottom = '0.5em';
        heading.style.fontWeight = 'bold';
      });

      const lists = content.querySelectorAll('ul');
      lists.forEach((list) => {
        list.style.marginBottom = '1em';
        list.style.paddingLeft = '20px';
      });

      const paragraphs = content.querySelectorAll('p');
      paragraphs.forEach((paragraph) => {
        paragraph.style.marginBottom = '1em';
      });

      const links = content.querySelectorAll('a');
      links.forEach((link) => {
        link.style.color = 'var(--link-color)';
        link.style.textDecoration = 'none';
      });

      const buttons = content.querySelectorAll('a.button');
      buttons.forEach((button) => {
        button.style.display = 'inline-block';
        button.style.padding = '10px 20px';
        button.style.color = 'white';
        button.style.backgroundColor = 'var(--link-color)';
        button.style.borderRadius = '5px';
        button.style.textAlign = 'center';
        button.style.marginTop = '10px';
      });
    });
  });
}
