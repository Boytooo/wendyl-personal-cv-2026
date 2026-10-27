'use strict';

document.documentElement.classList.add('js-enabled');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');

function closeMenu(returnFocus = false) {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('span').textContent = '+';
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const opened = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', opened);
  menuButton.setAttribute('aria-expanded', String(opened));
  menuButton.querySelector('span').textContent = opened ? '−' : '+';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.topbar')) closeMenu();
});
window.matchMedia('(min-width: 721px)').addEventListener('change', () => closeMenu());

const cards = [...document.querySelectorAll('.project-card')];
document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(filter => {
      const selected = button === filter;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    cards.forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    });
    const count = cards.filter(card => !card.hidden).length;
    document.querySelector('#filter-status').textContent = `${count} project${count === 1 ? '' : 's'} shown.`;
  });
});

document.querySelectorAll('.detail-toggle').forEach(button => {
  const details = document.getElementById(button.getAttribute('aria-controls'));
  button.addEventListener('click', () => {
    const opened = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(opened));
    button.textContent = opened ? 'Close details −' : 'Project details +';
    details.hidden = !opened;
  });
});

document.querySelector('.copy-email').addEventListener('click', async event => {
  const email = event.currentTarget.dataset.email;
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = 'Email copied!';
  } catch {
    status.textContent = `Please copy manually: ${email}`;
  }
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  const reveals = [...document.querySelectorAll('.two-columns, .skills-grid, .project-grid, .facts')];
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.04 });
  if (!reduceMotion.matches) reveals.forEach(element => {
    element.classList.add('reveal', 'ready');
    revealObserver.observe(element);
  });
  reduceMotion.addEventListener('change', () => {
    if (reduceMotion.matches) reveals.forEach(element => element.classList.add('visible'));
  });

  const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  navLinks.forEach(link => sectionObserver.observe(document.querySelector(link.hash)));
}
document.querySelector('#copyright-year').textContent = String(new Date().getFullYear());
