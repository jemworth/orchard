import red from '../images/taste-colours-red.webp';
import green from '../images/taste-colours-green.webp';
import white from '../images/taste-colours-white.webp';

import gallery1 from '../images/cooking1.webp';
import gallery2 from '../images/cooking2.webp';
import gallery3 from '../images/cooking3.webp';

import cardsJson from '../data/cards.json';

import Gallery, { initGallery } from '../components/gallery.js';
import Cards, { initCards } from '../components/cards.js';

/* Map JSON → images */
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

/* Render components */
app.innerHTML = `
  ${Gallery({
    images: [gallery1, gallery2, gallery3]
  })}
  ${Cards({ cards: cardsData })}
`;

/* Init behaviors */
initGallery();
initCards(cardsData);