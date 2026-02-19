document.addEventListener("DOMContentLoaded", function () {
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     // Navegação suave para as seções (corrigida para esperar imagens carregarem)
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      const headerHeight = document.querySelector(".header").offsetHeight;

      const scrollToTarget = () => {
        const targetPosition = targetSection.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      };

      const img = targetSection.querySelector("img");
      if (img && !img.complete) {
        img.addEventListener("load", scrollToTarget, { once: true });
      } else {
        scrollToTarget();
      }

      document.querySelector(".nav").classList.remove("active");
    });
  });
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Menu mobile toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");

  mobileMenuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      nav.classList.remove("active");
    }
  });
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Botão "Agende sua consulta" - scroll para contato
  const btnAgendar = document.querySelector(".btn-agendar");

  if (btnAgendar) {
    btnAgendar.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Slide no hero
  const slides = [
    {
      image: "./images/image4.jpg",
      text: "Redefina sua forma de viver por meio da TCC e desenvolva mais equilíbrio, clareza emocional e qualidade de vida",
      buttonText: "Quero começar minha jornada",
      buttonLink: "https://wa.me/5513991110945",
    },
    {
      image: "./images/image2.jpg",
      text: "Atendimento em Terapia Cognitivo-Comportamental, abordagem científica reconhecida pela eficácia no cuidado com a saúde emocional",
      buttonText: "Agende sua consulta",
      buttonLink: "https://wa.me/5513991110945",
    },
    {
      image: "./images/image1.jpg",
      text: "Um espaço seguro para compreender suas emoções, fortalecer sua saúde mental e seguir com mais confiança",
      buttonText: "Vamos conversar",
      buttonLink: "https://wa.me/5513991110945",
    },
  ];

  const heroImg = document.querySelector(".hero-image img");
  const heroText = document.querySelector(".hero-content h1");
  const heroBtn = document.querySelector(".hero-btn");

  let currentSlide = 0;
  let lastInteraction = Date.now();

  function showSlide(index) {
    const { image, text,buttonText, buttonLink } = slides[index];
    heroImg.style.opacity = 0;
    heroText.style.opacity = 0;

    setTimeout(() => {
      heroImg.src = image;
      heroText.textContent = text;
      heroBtn.textContent = buttonText;
      heroBtn.onclick = () => {
        window.location.href = buttonLink;
      };

      heroImg.style.opacity = 1;
      heroText.style.opacity = 1;
    }, 500);
  }

  showSlide(currentSlide);

  setInterval(() => {
    const now = Date.now();
    if (now - lastInteraction > 3000) {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  }, 5000);

  ["mousemove", "scroll", "keydown", "click"].forEach((event) => {
    window.addEventListener(event, () => {
      lastInteraction = Date.now();
    });
  });

  const modal = document.getElementById("info-modal");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close-btn");

  const contentMap = {
  individual_exp: `
    <p>
      Indicada para adolescentes e adultos. A <strong>terapia individual</strong>
      oferece suporte aos indivíduos durante períodos difíceis, ensinando-os a lidar
      com <strong>questões emocionais, angústias, falta de motivação, baixa autoestima</strong>
      e <strong>desilusões</strong>.
    </p>
    <br>
    <p>
      Seu objetivo central é proporcionar ao paciente uma nova forma de
      <strong>sentir e pensar</strong>, capacitando-o a superar as adversidades da sua vida.
    </p>
    <br>
    <p>
    <a href="https://wa.me/5513991110945" aria-label="Agende sua consulta com a psicóloga Mariana Borralho" rel="noopener noreferrer">Entre em contato comigo</a>
    </p>
  `,
  parental_exp: `
    <p>
      Orientação parental e familiar é um processo de <strong>apoio psicológico</strong>
      que ajuda pais, mães e responsáveis a lidarem com os desafios da
      <strong>criação dos filhos</strong>, promovendo relações mais saudáveis.
    </p>
    <br>
    <p>
      Também oferece suporte no cuidado com <strong>idosos</strong> e
      <strong>pessoas com deficiência</strong>, fortalecendo vínculos e promovendo
      o bem-estar de todos.
    </p>
    <br>
    <p>
    <a href="https://wa.me/5513991110945" aria-label="Agende sua consulta com a psicóloga Mariana Borralho" rel="noopener noreferrer">Veja como posso te ajudar</a>
    </p>
  `,
  online_exp: `
    <p>
      O <strong>acompanhamento psicológico online</strong> é uma forma prática,
      segura e eficaz de cuidar da <strong>saúde mental</strong>.
    </p>
    <br>
    <p>
      Realizado com <strong>ética, sigilo e profissionalismo</strong>, segue as
      diretrizes do Conselho Federal de Psicologia.
    </p>
    <br>
    <p>
    <a href="https://wa.me/5513991110945" aria-label="Agende sua consulta com a psicóloga Mariana Borralho" rel="noopener noreferrer">Agende sua consulta</a>
    </p>
  `
};


  document.querySelectorAll(".info-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-info");
      modalText.innerHTML = contentMap[key] || "Texto não encontrado.";
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Animação de entrada dos cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  const textContent = document.querySelector(".text-content");
  if (textContent) {
    textContent.style.opacity = "0";
    textContent.style.transform = "translateX(-30px)";
    textContent.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(textContent);
  }

  const imageContainer = document.querySelector(".image-container");
  if (imageContainer) {
    imageContainer.style.opacity = "0";
    imageContainer.style.transform = "translateX(30px)";
    imageContainer.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(imageContainer);
  }

  const btn = document.getElementById("floatingBtn");
  const footer = document.querySelector("footer");
  const logo = document.querySelector(".logo");

  function updateButtonPosition() {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const footerTop = footer.getBoundingClientRect().top + scrollY;
    const distanceFromBottom = scrollY + windowHeight - footerTop;

    const isMobile = window.innerWidth <= 768;

    if (scrollY > 300) {
      btn.classList.add("show");
      if (isMobile) logo.classList.add("scrolled");
    } else {
      btn.classList.remove("show");
      logo.classList.remove("scrolled");
    }

    if (distanceFromBottom > 0) {
      btn.style.position = "absolute";
      btn.style.bottom = `${footer.offsetHeight + 10}px`;
    } else {
      btn.style.position = "fixed";
      btn.style.bottom = "2rem";
    }
  }

  window.addEventListener("scroll", updateButtonPosition);
  window.addEventListener("resize", updateButtonPosition);
  updateButtonPosition();
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Funcionalidade do FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      item.classList.toggle("active");
    });
  });
});

