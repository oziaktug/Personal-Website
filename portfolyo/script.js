const halfCircle = document.getElementById('halfCircle');
const message = document.getElementById('message');
const aboutMessage = document.getElementById('aboutMessage'); // "About" yazısını ekledik
const innerText = document.getElementById('innerText'); // Metin alanı
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
let isDragging = false; // Sürükleme durumu

// Mouse veya dokunma başladığında yazıyı göster ve esneme başlasın
const startDrag = () => {
    isDragging = true;

    // "About" yazısını gizle
    aboutMessage.style.opacity = '0'; // "About" yazısını gizle

    // Mobilde yazıyı göster
    if (window.innerWidth <= 768) {
        message.style.display = '0'; // Mobilde yazıyı göster
        innerText.style.display = 'block'; // Mobilde metni göster
    } else {
        // 1 saniye gecikme ile yazıyı göster (sadece masaüstünde)
        setTimeout(() => {
            if (isDragging) {
                message.style.display = 'block'; // Yazıyı göster
                innerText.style.display = 'block'; // Metni göster
            }
        }, 200); // 200 ms = 0.2 saniye
    }

    halfCircle.style.transform = 'scaleY(1.5)'; // Esneme efekti
};

// Mouse basıldığında veya dokunulduğunda
halfCircle.addEventListener('mousedown', startDrag);
halfCircle.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Varsayılan dokunma davranışını engelle
    startDrag();
});

// Mouse bırakıldığında dur
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false; // Sürüklemeyi durdur
        halfCircle.style.transform = 'scaleY(1)'; // Eski haline dön
        
        // Yazıyı gizle
        message.style.display = 'none'; // Yazıyı gizle
        innerText.style.display = 'none'; // Metni gizle
        aboutMessage.style.opacity = '1'; // "About" yazısını geri göster
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = [
        { id: 'html-progress', percentage: 80 },
        { id: 'css-progress', percentage: 80 },
        { id: 'js-progress', percentage: 55 },
        { id: 'php-progress', percentage: 30 }
    ];

    const halfCircle = document.getElementById('halfCircle');
    let interval;

    // Mouse basıldığında veya dokunulduğunda
    halfCircle.addEventListener('mousedown', startProgress);
    halfCircle.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Varsayılan dokunma davranışını engelle
        startProgress();
    });

    // İlerlemeyi başlat
    function startProgress() {
        let index = 0;
        interval = setInterval(() => {
            if (index < progressBars.length) {
                const progressElement = document.querySelector(`#${progressBars[index].id} .progress`);
                progressElement.style.width = `${progressBars[index].percentage}%`;
                index++;
            } else {
                clearInterval(interval);
            }
        }, 500); // Her bir ilerleme 1 saniye aralıkla dolacak
    }

    // Mouse bırakıldığında veya dokunma bırakıldığında dur
    document.addEventListener('mouseup', stopProgress);
    document.addEventListener('touchend', stopProgress);

    // İlerlemeyi durdur
    function stopProgress() {
        clearInterval(interval);
    }
});

let hasGrown = false; // Kutu bir kez büyüdüğünde true olacak

window.addEventListener('scroll', function() {
  const orangeBox = document.querySelector('.orange-box');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Eğer sayfa 500px aşağı kaydırılırsa ve kutu henüz büyümediyse büyüt
  if (scrollPosition > 550 && !hasGrown) {
    orangeBox.style.transform = 'scale(1)'; // Kutu tam boyuta gelir
    hasGrown = true; // Büyüme tamamlandıktan sonra tekrar küçülmeyi engelle
  }
});

const contactForm = document.getElementById('contactForm');

window.addEventListener('scroll', () => {
    const formPosition = contactForm.getBoundingClientRect().top; // Formun konumunu al
    const windowHeight = window.innerHeight; // Pencere yüksekliği
    
    // Eğer form pencerenin üst kısmının altında görünüyorsa
    if (formPosition < windowHeight) {
        contactForm.classList.add('visible'); // Görünür hale getir
    }
});


const menuToggle = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Menü görünürlüğünü değiştir
});

// Sayfa kaydırıldığında butonu göster veya gizle
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'block'; // Butonu göster
    } else {
        scrollToTopButton.style.display = 'none'; // Butonu gizle
    }
});

// Butona tıklandığında sayfayı en üste kaydır
document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Yumuşak geçiş
    });
});
