import './lightbox.css';

/**
 * Lightbox Component
 * @param {string} src - Image URL
 * @param {string} title - Image title
 * @param {string} description - Image description
 */
export default function openLightbox(src, title = '') {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';

  overlay.innerHTML = `
    <div class="lightbox-content" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" aria-describedby="lightbox-desc">
      <img src="${src}" class="lightbox-img" alt="${title}" />
      <button class="lightbox-close" aria-label="Close">&times;</button>
    </div>
  `;

  const close = () => overlay.remove();
  const escHandler = e => { if (e.key === 'Escape') close(); };
  document.addEventListener('keydown', escHandler);

  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
      close();
      document.removeEventListener('keydown', escHandler);
    }
  });

  document.body.appendChild(overlay);
}