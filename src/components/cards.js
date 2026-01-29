import './cards.css';

export default function Cards({ cards }) {
  return `
    <section class="section colours">
      <div class="container text-center">
        <h2>Taste the Colours</h2>

        <div class="cards">
          ${cards
            .map(
              card => `
              <div
                class="card"
                role="button"
                tabindex="0"
                aria-label="${card.title} card"
              >
                <div class="card-img">
                  <img src="${card.image}" alt="${card.title}" />
                </div>
                <div class="card-body">
                  <h4><strong>${card.title}</strong></h4>
                  <p>${card.text}</p>
                </div>
              </div>
            `
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}

/* Event binding */
export function initCards(cards) {
  document.querySelectorAll('.card').forEach((cardEl, index) => {
    const title = cards[index].title;

    cardEl.addEventListener('click', e => {
      console.log(`Card clicked: ${title}`);

      const oldRipple = cardEl.querySelector('.ripple');
      if (oldRipple) oldRipple.remove();

      const ripple = document.createElement('span');
      ripple.className = 'ripple';

      const rect = cardEl.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      cardEl.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });

    cardEl.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cardEl.click();
      }
    });
  });
}
