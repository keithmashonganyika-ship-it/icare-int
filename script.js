const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const constructionCategories = [
  ['01', 'Sliding & folding doors', 'Aluminium door systems that open up living, retail, and commercial spaces with clean lines and smooth movement.', [14, 21, 22, 27, 29, 36, 39, 42, 48, 49, 54, 55, 57, 60, 63, 64]],
  ['02', 'Windows & glazed frames', 'Window installations and glazed frames designed to bring in light while keeping every opening crisp and secure.', [3, 4, 15, 23, 24, 26, 35, 43]],
  ['03', 'Entrance & security doors', 'Practical entrance doors, burglar bars, and security door solutions that add protection without losing a polished finish.', [6, 9, 10, 32, 51, 52, 56]],
  ['04', 'Security & pedestrian gates', 'Secure pedestrian access with strong, well-finished gate designs for homes, offices, and shared entrances.', [5, 7, 8, 12, 13, 20, 31, 33, 50]],
  ['05', 'Driveway & perimeter gates', 'Vehicle access and boundary gates built to make arrival secure, straightforward, and visually consistent with the property.', [11, 25, 37, 38, 46, 62]],
  ['06', 'Fencing & boundary systems', 'Durable boundary treatments that define a site, improve privacy, and give the outside of a property a finished edge.', [1, 19, 45, 61]],
  ['07', 'Railings & balustrades', 'Balustrades and handrails for stairs, balconies, and elevated areas, combining safety with a refined architectural detail.', [16, 28, 34, 47, 53, 65]],
  ['08', 'Fabrication & site installation', 'Behind-the-scenes fabrication, structural work, and active-site installation that keep each project moving accurately.', [17, 18, 30, 40, 44]],
  ['09', 'Completed project views', 'Finished residential and commercial views showing how the individual elements come together as a complete result.', [2, 41, 58, 59]]
];

const constructionGallery = document.getElementById('construction-categories');

if (constructionGallery) {
  constructionGallery.innerHTML = constructionCategories
    .map(([number, title, description, photoNumbers]) => {
      const photos = photoNumbers.map((photoNumber, index) => {
        const paddedNumber = String(photoNumber).padStart(3, '0');
        return `<img src="construction/construction-${paddedNumber}.jpeg" alt="${title} project photo ${index + 1}" loading="lazy" />`;
      }).join('');

      return `
        <article class="construction-category">
          <div class="construction-category-head">
            <span class="construction-number">${number}</span>
            <div><h3>${title}</h3><p>${description}</p></div>
            <span class="construction-count">${photoNumbers.length} photos</span>
          </div>
          <div class="construction-photo-grid">${photos}</div>
        </article>
      `;
    })
    .join('');
}
