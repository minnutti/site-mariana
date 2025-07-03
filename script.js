// Funcionalidade do FAQ
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      // Fecha todos os outros itens
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Toggle do item atual
      item.classList.toggle("active");
    });
  });
});

// Navegação suave para as seções
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }

      // Fecha o menu mobile se estiver aberto
      const nav = document.querySelector(".nav");
      nav.classList.remove("active");
    });
  });
});

// Menu mobile toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");

  mobileMenuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  // Fecha o menu ao clicar fora dele
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      nav.classList.remove("active");
    }
  });
});

// Botão "Agende sua consulta" - scroll para contato
document.addEventListener("DOMContentLoaded", function () {
  const btnAgendar = document.querySelector(".btn-agendar");

  if (btnAgendar) {
    btnAgendar.addEventListener("click", function () {
      // Simula um scroll para o topo (onde está o botão de contato)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// Animação de entrada dos cards
document.addEventListener("DOMContentLoaded", function () {
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

  // Observa os cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // Observa a seção da psicóloga
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

    // Mostrar botão e trocar logo após 300px de scroll
    if (scrollY > 300) {
      btn.classList.add("show");
      if (isMobile) logo.classList.add("scrolled");
    } else {
      btn.classList.remove("show");
      logo.classList.remove("scrolled");
    }

    // Se está alcançando o footer, reposiciona
    if (distanceFromBottom > 0) {
      btn.style.position = "absolute";
      btn.style.bottom = `${footer.offsetHeight + 10}px`; // Ajuste fino aqui se quiser
    } else {
      btn.style.position = "fixed";
      btn.style.bottom = "2rem";
    }
  }

  window.addEventListener("scroll", updateButtonPosition);
  window.addEventListener("resize", updateButtonPosition); // importante se o usuário redimensionar

  updateButtonPosition(); // Executa no carregamento
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = [
    {
      image: "./images/image1.jpg",
      text: "Ambiente acolhedor, seguro e personalizado para você",
      buttonLink: "https://wa.me/5513991110945",
    },
    {
      image: "./images/image2.jpg",
      text: "Acompanhamento psicológico individual",
      buttonLink: "https://wa.me/5513991110945",
    },
    {
      image: "./images/image3.jpg",
      text: "Cuidando bem de quem amamos",
      buttonLink: "https://wa.me/5513991110945",
    },
  ];

  const heroImg = document.querySelector(".hero-image img");
  const heroText = document.querySelector(".hero-content h2");
  const heroBtn = document.querySelector(".hero-btn");

  let currentSlide = 0;
  let lastInteraction = Date.now();

  function showSlide(index) {
    const { image, text, buttonLink } = slides[index];
    heroImg.style.opacity = 0;
    heroText.style.opacity = 0;

    setTimeout(() => {
      heroImg.src = image;
      heroText.textContent = text;
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
    if (now - lastInteraction > 5000) {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  }, 5000);

  // Detecta interação
  ["mousemove", "scroll", "keydown", "click"].forEach((event) => {
    window.addEventListener(event, () => {
      lastInteraction = Date.now();
    });
  });

  const modal = document.getElementById("info-modal");
  const modalText = document.getElementById("modal-text");
  const closeBtn = document.querySelector(".close-btn");

  const contentMap = {
    individual_exp: "Indicada para adolescentes e adultos. A terapia individual oferece suporte aos indivíduos durante períodos difíceis, ensinando-os a lidar com questões emocionais, angústias, falta de motivação, baixa autoestima e desilusões. Seu objetivo central é proporcionar ao paciente uma nova forma de sentir e pensar, capacitando-o a superar as adversidades da sua vida.",
    parental_exp: "Orientação parental e familiar é um processo de apoio psicológico que ajuda pais, mães e responsáveis a lidarem com os desafios da criação dos filhos, promovendo relações mais saudáveis e estratégias educativas mais eficazes no ambiente familiar. Também oferece suporte no cuidado com idosos e pessoas com deficiência, auxiliando no enfrentamento das demandas do dia a dia com mais equilíbrio, fortalecendo vínculos e promovendo o bem-estar de todos.",
    online_exp: "O acompanhamento psicológico online é uma forma prática, segura e eficaz de cuidar da saúde mental. Ideal para quem busca flexibilidade de horários e conforto, essa modalidade permite que o paciente realize suas sessões de qualquer lugar, sem abrir mão da qualidade do atendimento. Realizado com ética, sigilo e profissionalismo, o processo terapêutico online segue as diretrizes do Conselho Federal de Psicologia e oferece um espaço acolhedor para autoconhecimento, escuta qualificada e desenvolvimento emocional."
  };

  document.querySelectorAll(".info-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-info");
      modalText.textContent = contentMap[key] || "Texto não encontrado.";
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Fecha ao clicar fora do modal-content
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});