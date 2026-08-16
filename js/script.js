// 个人作品集 —— 交互脚本

// 1. 滚动渐入动画（IntersectionObserver）
document.addEventListener('DOMContentLoaded', () => {
  const revealEls = document.querySelectorAll(
    '.skill-card, .project-card, .project-featured, .timeline-item, .education-card, .contact-card, .about-card'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});

// 2. 导航栏当前章节高亮
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const highlight = () => {
    let currentId = '';
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 100) currentId = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
  };

  window.addEventListener('scroll', highlight);
  highlight();
});
