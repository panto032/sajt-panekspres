// ---- Mobile nav toggle ----
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true'
  navToggle.setAttribute('aria-expanded', !expanded)
  navLinks.classList.toggle('active')
})

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
    navToggle.setAttribute('aria-expanded', 'false')
  })
})

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const target = document.querySelector(link.getAttribute('href'))
    if (target) {
      const headerHeight = document.querySelector('.header').offsetHeight
      const top = target.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  })
})

// ---- Header scroll effect ----
const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50)
}, { passive: true })

// ---- Fade-in on scroll ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.section, .service-card, .fleet-card, .career-card, .stat, .route-item').forEach(el => {
  el.classList.add('fade-in')
  observer.observe(el)
})

// ---- Contact form (basic) ----
const form = document.getElementById('contact-form')
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const btn = form.querySelector('button[type="submit"]')
    const originalText = btn.textContent
    btn.textContent = 'Poruka poslata!'
    btn.style.background = '#16a34a'
    btn.style.borderColor = '#16a34a'
    btn.disabled = true

    setTimeout(() => {
      btn.textContent = originalText
      btn.style.background = ''
      btn.style.borderColor = ''
      btn.disabled = false
      form.reset()
    }, 3000)
  })
}
