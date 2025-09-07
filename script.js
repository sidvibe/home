let scripts = document.querySelector("#header-scripts")

if (window.scripts && window.scripts.head) {
          document.getElementById('header-scripts').outerHTML = window.scripts.head;
        }
    //   Project Configuration
        window.projectConfig = {
          name: 'Sidvibe',
          type: '',
          settings: {
            colors: {
              primary: '#14b8a6',
              secondary: '#ffffff',
              accent: ''
            },
            fonts: {
              primary: 'Inter',
              secondary: 'Roboto'
            }
          }
        };

const menuToggle = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-open-icon');
  const closeIcon = document.getElementById('menu-close-icon');

  if (menuToggle && mobileMenu) {
  // toggle menu open/close
  menuToggle.addEventListener('click', (ev) => {
    ev.stopPropagation();
    mobileMenu.classList.toggle('hidden');
  });

  // close when any mobile-menu link clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  // close if clicking/tapping outside (works on mobile)
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });

  // close on scroll (mobile friendly)
  let scrollCloseTimer;
  window.addEventListener('scroll', () => {
    // small debounce
    clearTimeout(scrollCloseTimer);
    scrollCloseTimer = setTimeout(() => {
      mobileMenu.classList.add('hidden');
    }, 50);
  });
}

const phrases = [
      "— AI-assisted dubbing and voice cloning",
      "— reach global audiences without losing emotion.",
      "— Fast, human-like Hindi Dubbing",
      "— Accurate subtitling & localization",
      "— Affordable rates for creators"
    ];
    const typeSpeed = 30;     // ms per character when typing
    const deleteSpeed = 10;   // ms per character when deleting
    const holdDelay = 1500;   // ms to wait after fully typed before deleting
    const betweenDelay = 300; // small delay between cycles
    const loop = true;        // true = repeat forever

    // Helpers
    const wait = ms => new Promise(res => setTimeout(res, ms));

    async function typeEffect(element, text, speed){
      for(let i=0;i<text.length;i++){
        element.textContent += text.charAt(i);
        await wait(speed);
      }
    }

    async function deleteEffect(element, speed){
      const text = element.textContent;
      for(let i=text.length;i>0;i--){
        element.textContent = text.substring(0, i-1);
        await wait(speed);
      }
    }

    async function runTyping(){
      const el = document.getElementById('typed');
      let i = 0;
      do {
        const phrase = phrases[i % phrases.length];
        // small fade to make switch smoother (optional)
        el.classList.remove('fade');
        await wait(betweenDelay);
        await typeEffect(el, phrase, typeSpeed);
        await wait(holdDelay);
        // optional fade
        el.classList.add('fade');
        await deleteEffect(el, deleteSpeed);
        i++;
      } while(loop);
    }

    // start when DOM ready
    document.addEventListener('DOMContentLoaded', runTyping);

AOS.init({
    duration: 1000,   // 1 second animation
    once: false        // run only once
  });

function openVideoModal(videoId) {
      document.getElementById('videoModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeVideoModal() {
      document.getElementById('videoModal').classList.add('hidden');
      document.body.style.overflow = '';
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeVideoModal();
      }
    });

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = this;
    const formData = new FormData(form);
    
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;

    if (response.ok) {
      console.log('✅ Form submitted successfully');
      form.reset();
      button.textContent = 'Sent!';
      button.classList.add('bg-green-600');
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-green-600');
      }, 2000);
    } else {
      console.error('❌ Submission failed');
      button.textContent = 'Error!';
      button.classList.add('bg-red-600');
      setTimeout(() => {
        button.textContent = originalText;
        button.classList.remove('bg-red-600');
      }, 2000);
    }
  });

   // Initialize interactive elements

        document.addEventListener('DOMContentLoaded', function() {
          // Add interactive behaviors
          const interactiveElements = document.querySelectorAll('.interactive-element');
          interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
              element.classList.add('hover');
            });
            element.addEventListener('mouseleave', () => {
              element.classList.remove('hover');
            });
          });

          // Initialize any dynamic content
          const dynamicContent = document.querySelectorAll('[data-dynamic]');
          dynamicContent.forEach(content => {
            // Add fade-in animation
            content.classList.add('fade-in');
          });
        });

        // Handle navigation
        function handleNavigation(event) {
          const link = event.currentTarget;
          if (link.hasAttribute('data-nav')) {
            event.preventDefault();
            const target = link.getAttribute('data-nav');
            document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
          }
        }

        // Initialize navigation
        document.querySelectorAll('[data-nav]').forEach(link => {
          link.addEventListener('click', handleNavigation);
        });
        // This script tag will be replaced with actual scripts.body content
        if (window.scripts && window.scripts.body) {
          document.getElementById('body-scripts').outerHTML = window.scripts.body;
        }

function openVideoModal(videoId) {
    const modal = document.getElementById("videoModal");
    const videoContent = document.getElementById("videoContent");

    // Clear any previous video
    videoContent.innerHTML = `
      <h3 class="text-2xl font-bold text-white mb-4">Video Sample</h3>
      <div class="aspect-video bg-black rounded-lg overflow-hidden">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    `;

    modal.classList.remove("hidden");
  }

  function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const videoContent = document.getElementById("videoContent");

    // Stop video playback by clearing iframe
    videoContent.innerHTML = `
      <h3 class="text-2xl font-bold text-white mb-4">Video Sample</h3>
      <div class="aspect-video bg-black rounded-lg flex items-center justify-center">
        <p class="text-neutral-400">Sample video would play here</p>
      </div>
    `;

    modal.classList.add("hidden");
  }

// pause animation on mouseenter (desktop) and touchstart (mobile)
const testimonialTrack = document.getElementById('testimonialTrack') || document.querySelector('.animate-scroll');
if (testimonialTrack) {
  testimonialTrack.addEventListener('mouseenter', () => {
    testimonialTrack.style.animationPlayState = 'paused';
  });
  testimonialTrack.addEventListener('mouseleave', () => {
    testimonialTrack.style.animationPlayState = 'running';
  });
  testimonialTrack.addEventListener('touchstart', () => {
    testimonialTrack.style.animationPlayState = 'paused';
  }, {passive: true});
  testimonialTrack.addEventListener('touchend', () => {
    testimonialTrack.style.animationPlayState = 'running';
  });
}


  