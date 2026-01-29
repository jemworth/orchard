import openLightbox from './lightbox.js';
import './gallery.css';

export default function Gallery({
  images,
  title = 'Gallery image'
}) {
  return `
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
              ${images
                .map(
                  (src, i) =>
                    `<img src="${src}" alt="${title} ${i + 1}" class="gallery-lightbox" />`
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

/* Event binding */
export function initGallery() {
  document.querySelectorAll('.gallery-lightbox').forEach(img => {
    img.addEventListener('click', () =>
      openLightbox(img.src, img.alt, 'Gallery image')
    );
  });
}
