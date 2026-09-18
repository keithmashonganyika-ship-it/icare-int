const instagramHighlights = [
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    title: 'Mental health check-in',
    tag: 'Daily reminder',
    description: 'Short prompts that help young people pause, reflect, and honest-check how they are feeling.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    title: 'Stress survival tips',
    tag: 'Resource',
    description: 'Simple strategies to manage pressure, burnout, and overthinking in everyday life.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    title: 'Break the stigma',
    tag: 'Awareness',
    description: 'Stories and education that make talking about mental health feel less intimidating.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    title: 'Safe spaces',
    tag: 'Community',
    description: 'Encouraging reminders that support, connection, and rest are all part of healing.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  }
];

const feed = document.getElementById('instagram-feed');

if (feed) {
  feed.innerHTML = instagramHighlights
    .map(
      (item) => `
        <a class="instagram-card" href="${item.url}" target="_blank" rel="noreferrer" aria-label="Open ${item.title} on Instagram">
          <img src="${item.image}" alt="${item.title}" />
          <div class="instagram-content">
            <div class="meta">
              <span class="instagram-badge">${item.tag}</span>
              <span aria-hidden="true">◎</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
          </div>
        </a>
      `
    )
    .join('');
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    const subject = encodeURIComponent(`New inquiry from ${name || 'iCare website'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:hello@icare.com?subject=${subject}&body=${body}`;
    contactForm.reset();
  });
}

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
