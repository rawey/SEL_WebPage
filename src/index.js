document.getElementById('info-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! We will get back to you soon.');
    // Add your form submission logic here (e.g., Netlify form integration).
});

// Translation dictionary
const translations = {
    en: {
        aboutUs: "About Us",
        aboutText: "Founded in 2017, we have been providing top-tier solar solutions for over a decade. Our mission is to help you harness the power of solar energy while reducing your carbon footprint and energy costs.",
        servicesTitle: "Our Services",
        service1: "Solar Panel Installation",
        service2: "Energy Storage Solutions",
        service3: "Free Consultation",
        contactTitle: "Contact Us for More Information",
        contactName: "Name:",
        contactEmail: "Email:",
        contactPhone: "Phone Number:",
        contactMessage: "How Can We Help?",
        submitBtn: "Submit"
    },
    es: {
        aboutUs: "Sobre Nosotros",
        aboutText: "Fundada en 2017, hemos estado brindando soluciones solares de primer nivel durante más de una década. Nuestra misión es ayudarle a aprovechar la energía solar mientras reduce su huella de carbono y sus costos de energía.",
        servicesTitle: "Nuestros Servicios",
        service1: "Instalación de Paneles Solares",
        service2: "Soluciones de Almacenamiento de Energía",
        service3: "Consulta Gratis",
        contactTitle: "Contáctenos para más información",
        contactName: "Nombre:",
        contactEmail: "Correo Electrónico:",
        contactPhone: "Número de Teléfono:",
        contactMessage: "¿Cómo podemos ayudar?",
        submitBtn: "Enviar"
    }
};

let currentLang = 'en'; // Default language

// Function to toggle language
function translateToSpanish() {
    console.log(document.querySelector('.about h2')); // Test if the element is selected properly
    console.log(document.querySelector('.services h2'));

    currentLang = currentLang === 'en' ? 'es' : 'en'; // Toggle between English and Spanish

    document.querySelector('.about h2').innerText = translations[currentLang].aboutUs;
    document.querySelector('.about p').innerText = translations[currentLang].aboutText;
    document.querySelector('.services h2').innerText = translations[currentLang].servicesTitle;
    document.querySelectorAll('.service-box h3')[0].innerText = translations[currentLang].service1;
    document.querySelectorAll('.service-box h3')[1].innerText = translations[currentLang].service2;
    document.querySelectorAll('.service-box h3')[2].innerText = translations[currentLang].service3;
    document.querySelector('.contact-form h2').innerText = translations[currentLang].contactTitle;
    document.querySelector('label[for="name"]').innerText = translations[currentLang].contactName;
    document.querySelector('label[for="email"]').innerText = translations[currentLang].contactEmail;
    document.querySelector('label[for="phone"]').innerText = translations[currentLang].contactPhone;
    document.querySelector('label[for="message"]').innerText = translations[currentLang].contactMessage;
    document.querySelector('button[type="submit"]').innerText = translations[currentLang].submitBtn;

    // Update button text to toggle back
    document.getElementById('translate-btn').innerText = currentLang === 'en' ? 'Traducir al Español' : 'Translate to English';
}


// Add event listener to the button
document.getElementById('translate-btn').addEventListener('click', translateToSpanish);


// function showDetails(service) {
//     const details = document.getElementById(service + '-details');
//     if (details.style.display === 'block') {
//         details.style.display = 'none';
//     } else {
//         details.style.display = 'block';
//     }
// }
