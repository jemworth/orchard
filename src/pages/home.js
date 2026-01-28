import red from '../images/taste-colours-red.webp';
import green from '../images/taste-colours-green.webp';
import white from '../images/taste-colours-white.webp';

import gallery1 from '../images/cooking1.webp';
import gallery2 from '../images/cooking2.webp';
import gallery3 from '../images/cooking3.webp';

import cardsJson from '../data/cards.json';

import openLightbox from '../components/lightbox.js';
import './home.css';

const imageMap = {
  'taste-colours-red.webp': red,
  'taste-colours-green.webp': green,
  'taste-colours-white.webp': white
};

const cardsData = cardsJson.cards.map(card => ({
  ...card,
  image: imageMap[card.image]
}));

const app = document.getElementById('app');

/* --------------------------
  GALLERY SECTION
-------------------------- */

app.innerHTML += `
  <section class="section cooking">
		<div class="container">
			<div class="row row-md-reverse gap-30">
				<div class="col-12 w-lg-362">
					<h2>What does cooking mean?</h2>
					<p class="mb-30">Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</p>
					<h6 class="text-danger mb-10">The perfect egg</h6>
					<p><strong>Keep water between 67 and 68°C for a flavourful, tender yolk</strong></p>
				</div>
				<div class="col-12 col-lg-8">
					<div class="gallery-grid grid-1-span-2">
						<img src="${gallery1}" alt="Gallery image 1" class="gallery-lightbox" />
						<img src="${gallery2}" alt="Gallery image 2" class="gallery-lightbox" />
						<img src="${gallery3}" alt="Gallery image 3" class="gallery-lightbox" />
					</div>
				</div>
			</div>
		</div>
  </section>
`;

/* --------------------------
  CARD SECTION
-------------------------- */

app.innerHTML += `
  <section class="section colours">
		<div class="container text-center">
			<h2 class="mx-auto">Taste the Colours</h2>
			<div class="cards">
				${cardsData.map(card => `
					<div class="card">
						<div class="card-img">
							<img src="${card.image}" alt="${card.title}" class="img-lightbox" />
						</div>
						<div class="card-body">
							<h4><strong>${card.title}</strong></h4>
							<p>${card.text}</p>
						</div>
						<a href="https://example.com/${card.title}" class="card-action absolute" target="_blank" rel="noopener noreferrer"></a>
					</div>
				`).join('')}
			</div>
		</div>
  </section>
`;


/* --------------------------
   EVENT LISTENERS
-------------------------- */

// Gallery: lightbox
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () =>
    openLightbox(img.src, img.alt, 'Gallery image')
  );
});

// Cards: lightbox + link logging
document.querySelectorAll('.cards .card').forEach((cardEl, index) => {
  const card = cardsData[index];

  const link = cardEl.querySelector('a');
  link.addEventListener('click', () => {
    console.log(`Card link clicked: ${card.title}`);
  });
});

