document.getElementById('info-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted! We will get back to you soon.');
    // Add your form submission logic here (e.g., Netlify form integration).
});

// Translation dictionary
const translations = {
    en: {
        aboutUs: "About Us",
        location: "Locations: Tampa, Orlando, and bordering towns.",
        aboutText: "At SEL Florida, we've been dedicated to providing reliable solar energy solutions since 2017. Our mission is to empower homeowners and businesses to reduce their carbon footprint while lowering energy costs. We specialize in the design, installation, and maintenance of solar panel systems, offering cutting-edge technology and tailored solutions to meet the unique needs of our clients. With a commitment to sustainability and customer satisfaction, we strive to make clean, renewable energy accessible and affordable for all.",
        servicesTitle: "Our Services",
        service1: "Solar Panel Installation",
        service1_text: "We provide professional installation services to help you harness the power of solar energy.",
        service2: "Energy Storage Solutions",
        service2_text: "Store energy for later use and maximize the benefits of your solar power system.",
        service3: "Free Consultation",
        service3_text: "Get expert advice on how solar energy can reduce your bills and carbon footprint.",
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
        ],
        consent: "I agree to receive recurring automated marketing text messages at the phone number provided. Consent is not a condition to purchase. Msg & data rates may apply. Msg frequency varies. Reply HELP for help and STOP to cancel."
    },
    es: {
        aboutUs: "Sobre Nosotros",
        location: "Ubicaciones: Tampa, Orlando y pueblos limítrofes.",
        aboutText: "En SEL Florida, nos hemos dedicado a proporcionar soluciones confiables de energía solar desde 2017. Nuestra misión es ayudar a los propietarios y empresas a reducir su huella de carbono mientras disminuyen los costos de energía. Nos especializamos en el diseño, la instalación y el mantenimiento de sistemas de paneles solares, ofreciendo tecnología de vanguardia y soluciones personalizadas para satisfacer las necesidades únicas de nuestros clientes. Con un compromiso con la sostenibilidad y la satisfacción del cliente, nos esforzamos por hacer que la energía limpia y renovable sea accesible y asequible para todos.",
        servicesTitle: "Nuestros Servicios",
        service1: "Instalación de Paneles Solares",
        service1_text: "Ofrecemos servicios de instalación profesional para ayudarle a aprovechar la energía solar.",
        service2: "Soluciones de Almacenamiento de Energía",
        service2_text: "Almacene energía para su uso posterior y maximice los beneficios de su sistema de energía solar.",
        service3: "Consulta Gratuita",
        service3_text: "Obtenga asesoramiento experto sobre cómo la energía solar puede reducir sus facturas y su huella de carbono.",
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
        ],
        consent: "Acepto recibir mensajes de texto automáticos recurrentes de marketing en el número de teléfono proporcionado. El consentimiento no es una condición para la compra. Pueden aplicarse tarifas de mensajes y datos. La frecuencia de los mensajes varía. Responde AYUDA para obtener ayuda y STOP para cancelar."
    }
};

let currentLang = 'en'; // Default language

// Function to toggle language
function translateToSpanish() {
    currentLang = currentLang === 'en' ? 'es' : 'en'; // Toggle between English and Spanish

    // Existing translations...
    document.querySelector('.about h2').innerText = translations[currentLang].aboutUs;
    document.querySelector('.about p').innerText = translations[currentLang].aboutText;
    document.querySelector('.location-info p').innerText = translations[currentLang].location;
    document.querySelector('.services h2').innerText = translations[currentLang].servicesTitle;
    document.querySelectorAll('.service-box h3')[0].innerText = translations[currentLang].service1;
    document.querySelectorAll('.service-box p')[0].innerText = translations[currentLang].service1_text;
    document.querySelectorAll('.service-box h3')[1].innerText = translations[currentLang].service2;
    document.querySelectorAll('.service-box p')[1].innerText = translations[currentLang].service2_text;
    document.querySelectorAll('.service-box h3')[2].innerText = translations[currentLang].service3;
    document.querySelectorAll('.service-box p')[2].innerText = translations[currentLang].service3_text;
    document.querySelector('.contact-form h2').innerText = translations[currentLang].contactTitle;
    document.querySelector('label[for="marketing-consent"]').innerText = translations[currentLang].consent;
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


document.querySelector('form').addEventListener('submit', function(event) {
    const isChecked = document.getElementById('marketing-consent').checked || document.getElementById('marketing-consent-es').checked;
    if (!isChecked) {
        alert('You must agree to the terms to proceed.');
        event.preventDefault(); // Prevent the form from being submitted
    }
});

document.getElementById('info-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Here you can add any code to handle form submission, like sending data via AJAX

    // Clear the form fields
    this.reset();
});



// function showDetails(service) {
//     const details = document.getElementById(service + '-details');
//     if (details.style.display === 'block') {
//         details.style.display = 'none';
//     } else {
//         details.style.display = 'block';
//     }
// }
