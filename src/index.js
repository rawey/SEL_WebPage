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
        submitBtn: "Submit",
        warrantyHeader: "Safeguard your solar investment.",
        warrantyDescription: "With our 25-year Sunnova Protect Platinum plan, you produce clean, renewable solar energy and we take care of the rest!",
        systemMonitoring: "System Monitoring",
        systemMonitoringDetails: [
            "Proactive service alerts and performance monitoring",
            "Access to production data",
            "Easy account management"
        ],
        systemDiagnosis: "System Diagnosis",
        systemDiagnosisDetails: [
            "Hassle-free, remote assessments",
            "Total management of your system's performance",
            "Production simulation to determine expected system performance"
        ],
        correctiveMaintenance: "Corrective Maintenance & Warranty",
        correctiveMaintenanceDetails: [
            "Repairs, replacements, and labor for system components covered under warranty"
        ],
        hassleFreeManagement: "Hassle-Free Management of Repairs & Replacements",
        hassleFreeManagementDetails: [
            "Complete management of repairs and replacements for parts under warranty",
            "Coordination with manufacturers to replace system components"
        ],
        extensiveCoverage: "Extensive System Coverage",
        extensiveCoverageDetails: [
            "Zero out-of-pocket costs for repairs and labor, even beyond the manufacturer's warranty"
        ],
        sunnovaInsured: "Sunnova Insured",
        sunnovaInsuredDetails: [
            "Sunnova insures your solar system to protect against theft or damage, at no additional cost"
        ],
        comparisonHeader: "Which Electricity Option Would You Pick?",
        comparisonRows: [
            ["Bill Increases with Inflation", "4% on average every year", "Bill never increases - fixed payment"],
            ["Financial Impact", "Each payment makes the utility company richer", "Each payment builds equity in your home"],
            ["Home Value", "Your home value stays the same", "Your home value increases from the additional value of the system"],
            ["Home Sale Impact", "Doesn't help your home sell any faster", "Your home sells 20% faster & you can transfer the system"],
            ["Tax Incentives", "No tax incentives", "Take advantage of Government Tax Incentives"]
        ]
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
        submitBtn: "Enviar",
        warrantyHeader: "Proteja su inversión solar.",
        warrantyDescription: "Con nuestro plan Sunnova Protect Platinum de 25 años, usted produce energía solar limpia y renovable ¡y nosotros nos encargamos del resto!",
        systemMonitoring: "Monitoreo del Sistema",
        systemMonitoringDetails: [
            "Alertas de servicio proactivo y monitoreo del rendimiento",
            "Acceso a datos de producción",
            "Gestión fácil de la cuenta"
        ],
        systemDiagnosis: "Diagnóstico del Sistema",
        systemDiagnosisDetails: [
            "Evaluaciones remotas sin complicaciones",
            "Gestión total del rendimiento de su sistema",
            "Simulación de producción para determinar el rendimiento esperado del sistema"
        ],
        correctiveMaintenance: "Mantenimiento Correctivo y Garantía",
        correctiveMaintenanceDetails: [
            "Reparaciones, reemplazos y mano de obra para los componentes del sistema cubiertos bajo garantía"
        ],
        hassleFreeManagement: "Gestión Sin Complicaciones de Reparaciones y Reemplazos",
        hassleFreeManagementDetails: [
            "Gestión completa de reparaciones y reemplazos para piezas cubiertas por la garantía",
            "Coordinación con los fabricantes para reemplazar componentes del sistema"
        ],
        extensiveCoverage: "Cobertura Extensiva del Sistema",
        extensiveCoverageDetails: [
            "Cero costos de bolsillo para reparaciones y mano de obra, incluso más allá de la garantía del fabricante"
        ],
        sunnovaInsured: "Asegurado por Sunnova",
        sunnovaInsuredDetails: [
            "Sunnova asegura su sistema solar contra robo o daño, sin costo adicional"
        ],
        comparisonHeader: "¿Qué opción de electricidad elegirías?",
        comparisonRows: [
            ["Aumento de la factura con la inflación", "4% en promedio cada año", "La factura nunca aumenta - pago fijo"],
            ["Impacto financiero", "Cada pago enriquece a la compañía de servicios", "Cada pago aumenta el valor de su hogar"],
            ["Valor de la casa", "El valor de su casa permanece igual", "El valor de su casa aumenta con el valor adicional del sistema"],
            ["Impacto en la venta de la casa", "No ayuda a que su casa se venda más rápido", "Su casa se vende un 20% más rápido y puede transferir el sistema"],
            ["Incentivos fiscales", "Sin incentivos fiscales", "Aproveche los incentivos fiscales del gobierno"]
        ]
    }
};

let currentLang = 'en'; // Default language

// Function to toggle language
function translateToSpanish() {
    currentLang = currentLang === 'en' ? 'es' : 'en'; // Toggle between English and Spanish

    // Existing translations...
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

    // Warranty section translations
    document.querySelector('.warranty-header-box h2').innerText = translations[currentLang].warrantyHeader;
    document.querySelector('.warranty-header-box p').innerText = translations[currentLang].warrantyDescription;

    document.querySelector('.warranty-box:nth-child(1) h4').innerText = translations[currentLang].systemMonitoring;
    document.querySelectorAll('.warranty-box:nth-child(1) ul li').forEach((li, index) => {
        li.innerText = translations[currentLang].systemMonitoringDetails[index];
    });

    document.querySelector('.warranty-box:nth-child(2) h4').innerText = translations[currentLang].systemDiagnosis;
    document.querySelectorAll('.warranty-box:nth-child(2) ul li').forEach((li, index) => {
        li.innerText = translations[currentLang].systemDiagnosisDetails[index];
    });

    document.querySelector('.warranty-box:nth-child(3) h4').innerText = translations[currentLang].correctiveMaintenance;
    document.querySelector('.warranty-box:nth-child(3) ul li').innerText = translations[currentLang].correctiveMaintenanceDetails[0];

    document.querySelector('.warranty-box:nth-child(4) h4').innerText = translations[currentLang].hassleFreeManagement;
    document.querySelectorAll('.warranty-box:nth-child(4) ul li').forEach((li, index) => {
        li.innerText = translations[currentLang].hassleFreeManagementDetails[index];
    });

    document.querySelector('.warranty-box:nth-child(5) h4').innerText = translations[currentLang].extensiveCoverage;
    document.querySelector('.warranty-box:nth-child(5) ul li').innerText = translations[currentLang].extensiveCoverageDetails[0];

    document.querySelector('.warranty-box:nth-child(6) h4').innerText = translations[currentLang].sunnovaInsured;
    document.querySelector('.warranty-box:nth-child(6) ul li').innerText = translations[currentLang].sunnovaInsuredDetails[0];

    // Comparison section translations
    document.querySelector('.comparison h2').innerText = translations[currentLang].comparisonHeader;
    const comparisonRows = document.querySelectorAll('.comparison table tr');
    translations[currentLang].comparisonRows.forEach((row, index) => {
        comparisonRows[index + 1].children[0].innerText = row[0];
        comparisonRows[index + 1].children[1].innerText = row[1];
        comparisonRows[index + 1].children[2].innerText = row[2];
    });

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
