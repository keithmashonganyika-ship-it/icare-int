const stripePaymentLink = 'https://buy.stripe.com/your_live_link_here';

const instagramHighlights = [
  {
    image: 'gallery/444533f6-07a3-496b-be11-adcc63a72e7a-WhatsApp Image 2026-09-18 at 11.58.21 (1).jpeg',
    title: 'Community Care',
    tag: 'Event',
    description: 'Real moments from the iCare community, centered on support, dignity, and youth empowerment.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/6e79f0e5-06e3-43b0-b60a-a31f7b9e4496-WhatsApp Image 2026-09-18 at 11.58.21.jpeg',
    title: 'Youth Voices',
    tag: 'Conversation',
    description: 'A strong reminder that our work is rooted in real people, real stories, and real support.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/7e7b3ec1-d468-42a9-bc2b-e82187dc7569-WhatsApp Image 2026-09-18 at 11.58.22 (1).jpeg',
    title: 'Support in Action',
    tag: 'Awareness',
    description: 'Creating safe spaces where young people feel seen, supported, and encouraged to heal.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/cda21bc7-cb98-4d0e-8dfd-13ec83a8a2a3-WhatsApp Image 2026-09-18 at 11.58.22.jpeg',
    title: 'Mental Health Journey',
    tag: 'Wellbeing',
    description: 'Highlighting the importance of safe conversations, listening, and practical care.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/6a887458-0d76-4829-98f6-a2dc8cf64233-WhatsApp Image 2026-09-18 at 11.58.22 (2).jpeg',
    title: 'Shared Mission',
    tag: 'Care',
    description: 'Every conversation helps build a stronger, more compassionate support network.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/60e72ff6-a603-42a3-9907-5eb26fc3c187-WhatsApp Image 2026-09-18 at 11.58.23.jpeg',
    title: 'Healing Together',
    tag: 'Community',
    description: 'The work is personal, human, and grounded in care for every young person we reach.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/660cfbed-e4cb-487f-af13-1e341ecb79a0-WhatsApp Image 2026-09-18 at 11.58.24 (1).jpeg',
    title: 'Shared Purpose',
    tag: 'Impact',
    description: 'Every story, every conversation, and every action works toward a more supportive society.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/ed6aa94c-d49a-4db2-a82b-7121076b4417-WhatsApp Image 2026-09-18 at 11.58.24.jpeg',
    title: 'Real People',
    tag: 'Care',
    description: 'We centre our mission around dignity, hope, and human connection.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/3ac773ba-535b-40b8-bb56-2e527537c86c-WhatsApp Image 2026-09-18 at 11.58.25.jpeg',
    title: 'Empowerment',
    tag: 'Youth',
    description: 'Encouraging growth, direction, and stronger futures for young people and communities.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/b257e255-bc72-4dfe-9f96-1e571070a865-WhatsApp Image 2026-09-18 at 11.58.25 (1).jpeg',
    title: 'Build Hope',
    tag: 'Support',
    description: 'A reminder that hope grows in safe spaces, honest conversations, and action.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/e4742daa-eb10-4259-b1b1-9eea2caf07b0-WhatsApp Image 2026-09-18 at 11.58.25 (2).jpeg',
    title: 'Young Leaders',
    tag: 'Community',
    description: 'Celebrating youth leadership, care, and the courage to speak up for others.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/ceb6c3d0-d1bb-404f-bec0-3f1eba3388e4-WhatsApp Image 2026-09-18 at 11.58.26 (1).jpeg',
    title: 'Safe Conversations',
    tag: 'Wellbeing',
    description: 'Creating room for honesty, healing, and support without judgement.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/ed1dbfbc-eab9-457e-87c0-a94987373e43-WhatsApp Image 2026-09-18 at 11.58.26.jpeg',
    title: 'Human Connection',
    tag: 'Care',
    description: 'Real stories remind us that support starts with listening and showing up.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/92a5ab0f-d89a-4763-84c2-f8ecfc168549-WhatsApp Image 2026-09-18 at 11.58.27 (1).jpeg',
    title: 'Safe Spaces',
    tag: 'Support',
    description: 'A visual reminder that support can be warm, honest, and life-changing.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/2bb3eed8-d0ff-41d6-ba78-f968cc024238-WhatsApp Image 2026-09-18 at 11.58.27 (2).jpeg',
    title: 'Purposeful Care',
    tag: 'Impact',
    description: 'Our community work is grounded in compassion, dignity, and inclusion.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/08a4ef6c-682b-47f9-b01f-527d5033a649-WhatsApp Image 2026-09-18 at 11.58.27.jpeg',
    title: 'Together We Rise',
    tag: 'Community',
    description: 'Young people learning, healing, and growing in spaces built on empathy and trust.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/239a5394-897a-437a-8dae-520ac995027d-WhatsApp Image 2026-09-18 at 11.58.28 (1).jpeg',
    title: 'Positive Change',
    tag: 'Awareness',
    description: 'Visible moments of care, encouragement, and the power of community action.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/e30e60c5-d487-49ae-a054-7fb1384474af-WhatsApp Image 2026-09-18 at 11.58.28 (2).jpeg',
    title: 'Words That Heal',
    tag: 'Support',
    description: 'A reminder that the right conversation can be the first step toward healing.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/3a47d898-9b0d-45c2-a367-b47ec337957d-WhatsApp Image 2026-09-18 at 11.58.28.jpeg',
    title: 'Purposeful Care',
    tag: 'Impact',
    description: 'Every moment reflects the mission of educating, empowering, and supporting people.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/e06cdcb7-0bde-4f62-98cd-9d198939d261-WhatsApp Image 2026-09-18 at 11.58.29.jpeg',
    title: 'Care in Motion',
    tag: 'Community',
    description: 'Real support in action, built around people who care deeply about change.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/64779ff0-01d9-4244-966a-d69201692d3a-WhatsApp Image 2026-09-18 at 11.58.29.jpeg',
    title: 'Stronger Together',
    tag: 'Community',
    description: 'A shared effort to create safe, uplifting spaces for growth and healing.',
    url: 'https://www.instagram.com/icare_int?stkn=cmU0aDU4Ynk5eHl6&utm_source=qr'
  },
  {
    image: 'gallery/169b1517-6230-40b9-9ab5-1d48f5677860-e06cdcb7-0bde-4f62-98cd-9d198939d261-WhatsApp Image 2026-09-18 at 11.58.29.jpeg',
    title: 'Shared Journey',
    tag: 'Support',
    description: 'One community, one mission, and many stories of resilience and care.',
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

const galleryGrid = document.getElementById('gallery-grid');

if (galleryGrid) {
  galleryGrid.innerHTML = instagramHighlights
    .map(
      (item) => `
        <figure class="gallery-item">
          <img src="${item.image}" alt="${item.title}" />
          <figcaption class="gallery-info">
            <div class="meta">
              <span class="instagram-badge">${item.tag}</span>
              <a href="${item.url}" target="_blank" rel="noreferrer" aria-label="View ${item.title} on Instagram">View</a>
            </div>
            <h3>${item.title}</h3>
          </figcaption>
        </figure>
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
