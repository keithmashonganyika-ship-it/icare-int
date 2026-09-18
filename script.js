const instagramHighlights = [
  {
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80',
    title: 'Mental Health Awareness',
    tag: 'Focus Area',
    description: 'To promote mental wellness, reduce stigma, and provide support for individuals struggling with mental health issues.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    title: 'GBV Prevention',
    tag: 'Awareness',
    description: 'To educate and empower individuals to prevent gender-based violence and support survivors.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    title: 'Addiction Support',
    tag: 'Support',
    description: 'To provide resources and support for individuals struggling with addiction and promote healthy coping mechanisms.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    title: 'Youth Empowerment',
    tag: 'Community',
    description: 'To promote equality, challenge societal norms, and empower both boys and girls to reach their full potential.',
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
