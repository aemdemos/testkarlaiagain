
export default function decorate(block) {
  const heroContent = block.querySelector('.hero-content');
  const heroImage = block.querySelector('.hero-image');
  const picture = heroImage.querySelector('picture');
  const img = picture.querySelector('img');

  // Move the image to the background of the hero block
  heroImage.remove();
  block.style.backgroundImage = `url(${img.src})`;
  block.style.backgroundPosition = 'right';
  block.style.backgroundRepeat = 'no-repeat';
  block.style.backgroundSize = 'contain';

  // Add the yellow bar on the left
  const yellowBar = document.createElement('div');
  yellowBar.classList.add('hero-yellow-bar');
  block.prepend(yellowBar);

  // Add the content wrapper
  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('hero-content-wrapper');
  contentWrapper.appendChild(heroContent);
  block.appendChild(contentWrapper);
}
