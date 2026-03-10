// Multilingual Content
const translations = {
    ar: {
        // Navigation
        home: "الرئيسية",
        about: "عن الفندق",
        services: "الخدمات",
        packages: "الحزم",
        facilities: "المرافق",
        news: "الأخبار",
        contact: "اتصل بنا",
        
        // Home Section
        heroTitle: "مرحبًا بكم في لُوفينغ هومز",
        heroSubtitle: "المكان الدافئ والمريح لكلابكم في قلب هونغ كونغ",
        heroDesc1: "نحن نقدم بيئة آمنة وممتعة مع مرافق حديثة وخدمات عالية الجودة",
        heroDesc2: "يمكنكم استكشاف موقعنا للتعرف على خدماتنا، حزمنا المتنوعة، والتواصل معنا بسهولة",
        exploreServices: "استكشف خدماتنا",
        contactUs: "تواصل معنا",
        
        // About Section
        aboutTitle: "من نحن",
        aboutDesc1: "لُوفينغ هومز هو فندق متكامل للكلاب يوفر بيئة دافئة وآمنة",
        aboutDesc2: "نعتني بكلابكم مع مراعاة رفاهيتها وسعادتها",
        aboutDesc3: "الفندق يضم مراعي آمنة، حظائر لعب داخلية وخارجية، ومسارات مشي وتمارين يومية",
        
        // Services Section
        servicesTitle: "خدماتنا",
        groomingSpa: "Grooming & Spa",
        groomingDesc: "تنظيف واستحمام احترافي",
        luxuryRooms: "Luxury Rooms",
        roomsDesc: "الغرف الداخلية المريحة",
        pickupDropoff: "Pick-up & Drop-off",
        pickupDesc: "خدمة التوصيل",
        outdoorFields: "Outdoor Safe Fields",
        outdoorDesc: "ساحات خارجية آمنة",
        dogWalking: "Dog Walking",
        walkingDesc: "مشي الكلاب اليومي",
        veterinaryServices: "Veterinary Services",
        veterinaryDesc: "خدمات بيطرية على مدار الساعة",
        petMonitoring: "Pet Monitoring",
        monitoringDesc: "مراقبة الكلاب 24/7",
        privateGrass: "Private Grass Area",
        grassDesc: "مساحة عشب خاصة",
        indoorPlay: "Indoor Play Area",
        playDesc: "منطقة لعب داخلية",
        
        // Packages Section
        packagesTitle: "حزم الإقامة",
        premiumPackage: "المميزة",
        classicPackage: "الكلاسيكية",
        dailyPackage: "اليومية",
        premiumFeature1: "المشي 4 مرات يوميًا",
        premiumFeature2: "ممارسة 4 أنشطة",
        premiumFeature3: "مساحة عشب خاصة",
        premiumFeature4: "تحديثات وصور يومية",
        premiumFeature5: "مكافآت مخصصة",
        classicFeature1: "المشي 3 مرات",
        classicFeature2: "ممارسة 3 أنشطة",
        classicFeature3: "حظيرة لعب داخلية",
        classicFeature4: "منطقة استرخاء",
        classicFeature5: "جلسة حالقة وتنظيف",
        dailyFeature1: "المشي مرتين",
        dailyFeature2: "منطقة لعب خارجية",
        dailyFeature3: "مسار رشاقة",
        dailyFeature4: "حفر حفرة في الرمل",
        packageNote: "يمكن تخصيص الحزم لإقامات طويلة أو متطلبات خاصة بعد التواصل مع الفندق",
        
        // Facilities Section
        facilitiesTitle: "مرافق الفندق",
        groomingFacility: "صالة للحلاقة ومنتجع",
        outdoorFacility: "مراعي خارجية آمنة ومسارات المشي",
        indoorFacility: "حظيرة لعب داخلية ومساحات خضراء خاصة",
        veterinaryFacility: "خدمات بيطرية على مدار الساعة",
        
        // Team Section
        teamTitle: "فريقنا",
        teamDesc: "يتكون فريقنا من محترفين متخصصين في رعاية الحيوانات، كلهم شغوفون بما يفعلون وملتزمون بتقديم أفضل رعاية ممكنة لكلابنا.",
        mariaName: "ماريا تشين",
        mariaTitle: "أخصائية التجميل",
        mariaDesc: "خبيرة في العناية والتجميل",
        jamesName: "جيمس لي",
        jamesTitle: "مدرب الكلاب الرئيسي",
        jamesDesc: "متخصص في سلوك وتدريب الكلاب",
        liName: "لي وونغ",
        liTitle: "مديرة العمليات",
        liDesc: "خبيرة في إدارة مرافق رعاية الحيوانات",
        doctorName: "الدكتور تشان",
        doctorTitle: "الطبيب البيطري الرئيسي",
        doctorDesc: "خبرة 15 عامًا في رعاية الحيوانات",
        
        // News Section
        newsTitle: "آخر الأخبار",
        dailyPhotos: "صور يومية لكلابكم",
        dailyPhotosDesc: "يمكن للعملاء متابعة الصور اليومية لكلابهم",
        offersEvents: "عروض وفعاليات جديدة",
        offersEventsDesc: "اطلع على تحديثات الفندق وعرض أي عروض أو فعاليات جديدة",
        
        // Contact Section
        contactTitle: "تواصل معنا",
        emailLabel: "البريد الإلكتروني",
        phoneLabel: "الهاتف",
        fullName: "الاسم الكامل",
        emailAddress: "البريد الإلكتروني",
        phoneNumber: "رقم الهاتف",
        packageType: "نوع الحزمة",
        selectPackage: "اختر الحزمة",
        customPackage: "مخصصة",
        startDate: "تاريخ بدء الإقامة",
        endDate: "تاريخ انتهاء الإقامة",
        dogCount: "عدد الكلاب",
        dogSize: "حجم الكلاب",
        selectSize: "اختر حجم الكلاب",
        smallDogs: "صغيرة (أقل من 10كجم)",
        mediumDogs: "متوسطة (10-25كجم)",
        largeDogs: "كبيرة (أكثر من 25كجم)",
        yourMessage: "رسالتك أو ملاحظات إضافية",
        sendBooking: "إرسال طلب الحجز",
        
        // FAQ Section
        faqTitle: "أسئلة شائعة",
        faqQ1: "ما هي ساعات العمل؟",
        faqA1: "نحن نعمل على مدار 24 ساعة طوال أيام الأسبوع لتقديم أفضل رعاية لكلابكم.",
        faqQ2: "هل يمكنني زيارة كلبي خلال إقامته؟",
        faqA2: "نعم، نرحب بالزيارات في أي وقت خلال ساعات العمل. يرجى حجز موعد مسبقاً.",
        faqQ3: "ما هي متطلبات التسجيل؟",
        faqA3: "يتطلب التسجيل شهادة تطعيم سارية وتقرير صحي حديث من الطبيب البيطري.",
        faqQ4: "هل تقدمون خدمة التوصيل والاستلام؟",
        faqA4: "نعم، نقدم خدمة التوصيل والاستلام من وإلى أي مكان في هونغ كونغ مقابل رسوم إضافية.",
        faqQ5: "كيف تضمنون سلامة الكلاب؟",
        faqA5: "لدينا فريق مراقبة على مدار الساعة، كاميرات أمنية، وخدمات بيطرية متاحة دائماً.",
        faqQ6: "هل يمكنني إحضار طعام خاص لكلبي؟",
        faqA6: "بالتأكيد! يمكنك إحضار طعام كلبي المفضل وسنقوم بتقديمه له حسب التعليمات.",
        
        // Footer
        footerDesc: "فندق كلاب متكامل في هونغ كونغ",
        allRights: "جميع الحقوق محفوظة"
    },
    en: {
        // Navigation
        home: "Home",
        about: "About Us",
        services: "Services",
        packages: "Packages",
        facilities: "Facilities",
        team: "Our Team",
        news: "News",
        contact: "Contact Us",
        faq: "FAQ",
        
        // Home Section
        heroTitle: "Welcome to Loving Homes",
        heroSubtitle: "The warm and comfortable place for your dogs in the heart of Hong Kong",
        heroDesc1: "We provide a safe and fun environment with modern facilities and high-quality services",
        heroDesc2: "You can explore our site to learn about our services, diverse packages, and contact us easily",
        exploreServices: "Explore Our Services",
        contactUs: "Contact Us",
        
        // About Section
        aboutTitle: "About Us",
        aboutDesc1: "Loving Homes is an integrated dog hotel that provides a warm and safe environment",
        aboutDesc2: "We care for your dogs while considering their comfort and happiness",
        aboutDesc3: "The hotel includes safe pastures, indoor and outdoor play areas, and daily walking and exercise paths",
        
        // Services Section
        servicesTitle: "Our Services",
        groomingSpa: "Grooming & Spa",
        groomingDesc: "Professional cleaning and bathing",
        luxuryRooms: "Luxury Rooms",
        roomsDesc: "Comfortable indoor rooms",
        pickupDropoff: "Pick-up & Drop-off",
        pickupDesc: "Transportation service",
        outdoorFields: "Outdoor Safe Fields",
        outdoorDesc: "Safe outdoor areas",
        dogWalking: "Dog Walking",
        walkingDesc: "Daily dog walking",
        veterinaryServices: "Veterinary Services",
        veterinaryDesc: "24/7 veterinary services",
        petMonitoring: "Pet Monitoring",
        monitoringDesc: "24/7 dog monitoring",
        privateGrass: "Private Grass Area",
        grassDesc: "Private grass area",
        indoorPlay: "Indoor Play Area",
        playDesc: "Indoor play area",
        
        // Packages Section
        packagesTitle: "Stay Packages",
        premiumPackage: "Premium",
        classicPackage: "Classic",
        dailyPackage: "Daily",
        premiumFeature1: "Walking 4 times daily",
        premiumFeature2: "Practice 4 activities",
        premiumFeature3: "Private grass area",
        premiumFeature4: "Daily updates and photos",
        premiumFeature5: "Custom rewards",
        classicFeature1: "Walking 3 times",
        classicFeature2: "Practice 3 activities",
        classicFeature3: "Indoor play area",
        classicFeature4: "Relaxation area",
        classicFeature5: "Grooming and cleaning session",
        dailyFeature1: "Walking twice",
        dailyFeature2: "Outdoor play area",
        dailyFeature3: "Agility course",
        dailyFeature4: "Sand digging",
        packageNote: "Packages can be customized for long stays or special requirements after contacting the hotel",
        
        // Facilities Section
        facilitiesTitle: "Hotel Facilities",
        groomingFacility: "Grooming salon and spa",
        outdoorFacility: "Safe outdoor pastures and walking paths",
        indoorFacility: "Indoor play area and private green spaces",
        veterinaryFacility: "24/7 veterinary services",
        
        // News Section
        newsTitle: "Latest News",
        dailyPhotos: "Daily Photos of Your Dogs",
        dailyPhotosDesc: "Customers can follow daily photos of their dogs",
        offersEvents: "New Offers and Events",
        offersEventsDesc: "Check hotel updates and view any new offers or events",
        
        // Contact Section
        contactTitle: "Contact Us",
        emailLabel: "Email",
        phoneLabel: "Phone",
        fullName: "Full Name",
        emailAddress: "Email Address",
        phoneNumber: "Phone Number",
        packageType: "Package Type",
        selectPackage: "Select Package",
        customPackage: "Custom",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        
        // Team Section
        teamTitle: "Our Team",
        teamDesc: "Our team consists of professionals specialized in animal care. They are all passionate about what they do and committed to providing the best possible care for our dogs.",
        mariaName: "Maria Chen",
        mariaTitle: "Grooming Specialist",
        mariaDesc: "Expert in care and grooming",
        jamesName: "James Lee",
        jamesTitle: "Head Dog Trainer",
        jamesDesc: "Specialized in dog behavior and training",
        liName: "Li Wong",
        liTitle: "Operations Manager",
        liDesc: "Expert in managing animal care facilities",
        doctorName: "Dr. Chan",
        doctorTitle: "Chief Veterinarian",
        doctorDesc: "15 years of experience in animal care",
        
        // FAQ Section
        faqTitle: "Frequently Asked Questions",
        faqQ1: "What are your working hours?",
        faqA1: "We work 24 hours a day, 7 days a week to provide the best care for your dogs.",
        faqQ2: "Can I visit my dog during their stay?",
        faqA2: "Yes, we welcome visits at any time during business hours. Please book an appointment in advance.",
        faqQ3: "What are the registration requirements?",
        faqA3: "Registration requires a valid vaccination certificate and a recent health report from a veterinarian.",
        faqQ4: "Do you offer pickup and delivery service?",
        faqA4: "Yes, we offer pickup and delivery service to and from anywhere in Hong Kong for an additional fee.",
        faqQ5: "How do you ensure the dogs' safety?",
        faqA5: "We have a 24-hour monitoring team, security cameras, and veterinary services always available.",
        faqQ6: "Can I bring special food for my dog?",
        faqA6: "Absolutely! You can bring your dog's favorite food and we will serve it according to instructions.",
        
        // Footer
        footerDesc: "Integrated dog hotel in Hong Kong",
        allRights: "All rights reserved"
    },
    fr: {
        // Navigation
        home: "Accueil",
        about: "À propos",
        services: "Services",
        packages: "Forfaits",
        facilities: "Installations",
        team: "Notre Équipe",
        news: "Actualités",
        contact: "Contact",
        faq: "FAQ",
        
        // Home Section
        heroTitle: "Bienvenue chez Loving Homes",
        heroSubtitle: "L'endroit chaleureux et confortable pour vos chiens au cœur de Hong Kong",
        heroDesc1: "Nous offrons un environnement sûr et amusant avec des installations modernes et des services de haute qualité",
        heroDesc2: "Vous pouvez explorer notre site pour découvrir nos services, nos forfaits variés et nous contacter facilement",
        exploreServices: "Explorer Nos Services",
        contactUs: "Nous Contacter",
        
        // About Section
        aboutTitle: "À Propos",
        aboutDesc1: "Loving Homes est un hôtel pour chiens intégré qui offre un environnement chaleureux et sûr",
        aboutDesc2: "Nous prenons soin de vos chiens en considérant leur confort et leur bonheur",
        aboutDesc3: "L'hôtel comprend des pâturages sûrs, des aires de jeu intérieures et extérieures, et des chemins de promenade et d'exercice quotidiens",
        
        // Services Section
        servicesTitle: "Nos Services",
        groomingSpa: "Toilettage & Spa",
        groomingDesc: "Nettoyage et bain professionnels",
        luxuryRooms: "Chambres de Luxe",
        roomsDesc: "Chambres intérieures confortables",
        pickupDropoff: "Navette",
        pickupDesc: "Service de transport",
        outdoorFields: "Zones Extérieures Sûres",
        outdoorDesc: "Zones extérieures sécurisées",
        dogWalking: "Promenade de Chiens",
        walkingDesc: "Promenade quotidienne des chiens",
        veterinaryServices: "Services Vétérinaires",
        veterinaryDesc: "Services vétérinaires 24/7",
        petMonitoring: "Surveillance Animaux",
        monitoringDesc: "Surveillance chiens 24/7",
        privateGrass: "Zone Herbe Privée",
        grassDesc: "Zone herbeuse privée",
        indoorPlay: "Aire de Jeu Intérieure",
        playDesc: "Aire de jeu intérieure",
        
        // Packages Section
        packagesTitle: "Forfaits Séjour",
        premiumPackage: "Premium",
        classicPackage: "Classique",
        dailyPackage: "Quotidien",
        premiumFeature1: "Promenade 4 fois par jour",
        premiumFeature2: "Pratique 4 activités",
        premiumFeature3: "Zone herbe privée",
        premiumFeature4: "Mises à jour et photos quotidiennes",
        premiumFeature5: "Récompenses personnalisées",
        classicFeature1: "Promenade 3 fois",
        classicFeature2: "Pratique 3 activités",
        classicFeature3: "Aire de jeu intérieure",
        classicFeature4: "Zone de détente",
        classicFeature5: "Séance de toilettage et nettoyage",
        dailyFeature1: "Promenade deux fois",
        dailyFeature2: "Aire de jeu extérieure",
        dailyFeature3: "Parcours d'agilité",
        dailyFeature4: "Creusage dans le sable",
        packageNote: "Les forfaits peuvent être personnalisés pour des séjours longs ou des exigences spéciales après contact avec l'hôtel",
        
        // Facilities Section
        facilitiesTitle: "Installations Hôtel",
        groomingFacility: "Salon de toilettage et spa",
        outdoorFacility: "Pâturages extérieurs sûrs et chemins de promenade",
        indoorFacility: "Aire de jeu intérieure et espaces verts privés",
        veterinaryFacility: "Services vétérinaires 24/7",
        
        // News Section
        newsTitle: "Dernières Nouvelles",
        dailyPhotos: "Photos Quotidiennes de Vos Chiens",
        dailyPhotosDesc: "Les clients peuvent suivre les photos quotidiennes de leurs chiens",
        offersEvents: "Nouvelles Offres et Événements",
        offersEventsDesc: "Consultez les mises à jour de l'hôtel et voyez les nouvelles offres ou événements",
        
        // Contact Section
        contactTitle: "Contact",
        emailLabel: "Email",
        phoneLabel: "Téléphone",
        fullName: "Nom Complet",
        emailAddress: "Adresse Email",
        phoneNumber: "Numéro Téléphone",
        packageType: "Type Forfait",
        selectPackage: "Sélectionner Forfait",
        customPackage: "Personnalisé",
        yourMessage: "Votre Message",
        sendMessage: "Envoyer le message",
        
        // Team Section
        teamTitle: "Notre Équipe",
        teamDesc: "Notre équipe est composée de professionnels spécialisés dans les soins animaux. Ils sont tous passionnés par ce qu'ils font et engagés à fournir les meilleurs soins possibles pour nos chiens.",
        mariaName: "Maria Chen",
        mariaTitle: "Spécialiste en toilettage",
        mariaDesc: "Expert en soins et toilettage",
        jamesName: "James Lee",
        jamesTitle: "Entraîneur principal de chiens",
        jamesDesc: "Spécialisé dans le comportement et l'entraînement des chiens",
        liName: "Li Wong",
        liTitle: "Directrice des opérations",
        liDesc: "Expert dans la gestion des installations de soins animaux",
        doctorName: "Dr. Chan",
        doctorTitle: "Vétérinaire en chef",
        doctorDesc: "15 ans d'expérience dans les soins animaux",
        
        // FAQ Section
        faqTitle: "Questions Fréquemment Posées",
        faqQ1: "Quelles sont vos heures de travail?",
        faqA1: "Nous travaillons 24 heures sur 24, 7 jours sur 7 pour fournir les meilleurs soins pour vos chiens.",
        faqQ2: "Puis-je visiter mon chien pendant son séjour?",
        faqA2: "Oui, nous accueillons les visites à tout moment pendant les heures de travail. Veuillez prendre rendez-vous à l'avance.",
        faqQ3: "Quelles sont les exigences d'inscription?",
        faqA3: "L'inscription nécessite un certificat de vaccination valide et un rapport de santé récent d'un vétérinaire.",
        faqQ4: "Offrez-vous un service de ramassage et livraison?",
        faqA4: "Oui, nous offrons un service de ramassage et livraison vers et depuis n'importe où à Hong Kong pour des frais supplémentaires.",
        faqQ5: "Comment assurez-vous la sécurité des chiens?",
        faqA5: "Nous avons une équipe de surveillance 24h/24, des caméras de sécurité et des services vétérinaires toujours disponibles.",
        faqQ6: "Puis-je apporter de la nourriture spéciale pour mon chien?",
        faqA6: "Absolument! Vous pouvez apporter la nourriture préférée de votre chien et nous la servirons selon les instructions.",
        
        // Footer
        footerDesc: "Hôtel pour chiens intégré à Hong Kong",
        allRights: "Tous droits réservés"
    },
    es: {
        // Navigation
        home: "Inicio",
        about: "Sobre Nosotros",
        services: "Servicios",
        packages: "Paquetes",
        facilities: "Instalaciones",
        team: "Nuestro Equipo",
        news: "Noticias",
        contact: "Contacto",
        faq: "Preguntas Frecuentes",
        
        // Home Section
        aboutTitle: "Sobre Nosotros",
        aboutDesc1: "Loving Homes es un hotel para perros integrado que proporciona un ambiente cálido y seguro",
        aboutDesc2: "Nos cuidamos de sus perros considerando su comodidad y felicidad",
        aboutDesc3: "El hotel incluye pastizales seguros, áreas de juego interiores y exteriores, y caminos diarios de paseo y ejercicio",
        
        // Services Section
        servicesTitle: "Nuestros Servicios",
        groomingSpa: "Peluquería & Spa",
        groomingDesc: "Limpieza y baño profesionales",
        luxuryRooms: "Habitaciones de Lujo",
        roomsDesc: "Habitaciones interiores cómodas",
        pickupDropoff: "Transporte",
        pickupDesc: "Servicio de transporte",
        outdoorFields: "Zonas Exteriores Seguras",
        outdoorDesc: "Áreas exteriores seguras",
        dogWalking: "Paseo de Perros",
        walkingDesc: "Paseo diario de perros",
        veterinaryServices: "Servicios Veterinarios",
        veterinaryDesc: "Servicios veterinarios 24/7",
        petMonitoring: "Monitoreo Mascotas",
        monitoringDesc: "Monitoreo perros 24/7",
        privateGrass: "Área Cesped Privada",
        grassDesc: "Area de cesped privada",
        indoorPlay: "Área Juego Interior",
        playDesc: "Área de juego interior",
        
        // Packages Section
        packagesTitle: "Paquetes Estadía",
        premiumPackage: "Premium",
        classicPackage: "Clásico",
        dailyPackage: "Diario",
        premiumFeature1: "Paseo 4 veces al día",
        premiumFeature2: "Práctica 4 actividades",
        premiumFeature3: "Área de cesped privada",
        premiumFeature4: "Actualizaciones y fotos diarias",
        premiumFeature5: "Recompensas personalizadas",
        classicFeature1: "Paseo 3 veces",
        classicFeature2: "Práctica 3 actividades",
        classicFeature3: "Área de juego interior",
        classicFeature4: "Área de relajación",
        classicFeature5: "Sesión de aseo y limpieza",
        dailyFeature1: "Paseo dos veces",
        dailyFeature2: "Área de juego exterior",
        dailyFeature3: "Curso de agilidad",
        dailyFeature4: "Cavar en la arena",
        packageNote: "Los paquetes pueden personalizarse para estancias largas o requisitos especiales después de contactar el hotel",
        
        // Facilities Section
        facilitiesTitle: "Instalaciones Hotel",
        groomingFacility: "Salón de peluquería y spa",
        outdoorFacility: "Pastizales exteriores seguros y caminos de paseo",
        indoorFacility: "Área de juego interior y espacios verdes privados",
        veterinaryFacility: "Servicios veterinarios 24/7",
        
        // News Section
        newsTitle: "Últimas Noticias",
        dailyPhotos: "Fotos Diarias de Sus Perros",
        dailyPhotosDesc: "Los clientes pueden seguir las fotos diarias de sus perros",
        offersEvents: "Nuevas Ofertas y Eventos",
        offersEventsDesc: "Consulte las actualizaciones del hotel y vea nuevas ofertas o eventos",
        
        // Contact Section
        contactTitle: "Contáctanos",
        emailLabel: "Email",
        phoneLabel: "Teléfono",
        fullName: "Nombre Completo",
        emailAddress: "Dirección Email",
        phoneNumber: "Número Teléfono",
        packageType: "Tipo Paquete",
        selectPackage: "Seleccionar Paquete",
        customPackage: "Personalizado",
        yourMessage: "Su Mensaje",
        sendMessage: "Enviar Mensaje",
        
        // Team Section
        teamTitle: "Nuestro Equipo",
        teamDesc: "Nuestro equipo está compuesto por profesionales especializados en el cuidado de animales. Todos apasionados por lo que hacen y comprometidos a proporcionar el mejor cuidado posible para nuestros perros.",
        mariaName: "Maria Chen",
        mariaTitle: "Especialista en Peluquería",
        mariaDesc: "Experta en cuidado y peluquería",
        jamesName: "James Lee",
        jamesTitle: "Entrenador Principal de Perros",
        jamesDesc: "Especializado en comportamiento y entrenamiento de perros",
        liName: "Li Wong",
        liTitle: "Gerente de Operaciones",
        liDesc: "Experta en la gestión de instalaciones de cuidado de animales",
        doctorName: "Dr. Chan",
        doctorTitle: "Veterinario Jefe",
        doctorDesc: "15 años de experiencia en el cuidado de animales",
        
        // FAQ Section
        faqTitle: "Preguntas Frecuentes",
        faqQ1: "¿Cuáles son sus horas de trabajo?",
        faqA1: "Trabajamos 24 horas al día, 7 días a la semana para proporcionar el mejor cuidado para sus perros.",
        faqQ2: "¿Puedo visitar a mi perro durante su estancia?",
        faqA2: "Sí, damos la bienvenida a las visitas en cualquier momento durante el horario laboral. Por favor reserve una cita con anticipación.",
        faqQ3: "¿Cuáles son los requisitos de registro?",
        faqA3: "El registro requiere un certificado de vacunación válido y un informe de salud reciente de un veterinario.",
        faqQ4: "¿Ofrecen servicio de recogida y entrega?",
        faqA4: "Sí, ofrecemos servicio de recogida y entrega hacia y desde cualquier lugar en Hong Kong por una tarifa adicional.",
        faqQ5: "¿Cómo aseguran la seguridad de los perros?",
        faqA5: "Tenemos un equipo de monitoreo 24 horas, cámaras de seguridad y servicios veterinarios siempre disponibles.",
        faqQ6: "¿Puedo traer comida especial para mi perro?",
        faqA6: "¡Absolutamente! Puede traer la comida favorita de su perro y la serviremos según las instrucciones.",
        
        // Footer
        footerDesc: "Hotel para perros integrado en Hong Kong",
        allRights: "Todos los derechos reservados"
    },
    ko: {
        // Navigation
        home: "홈",
        about: "소개",
        services: "서비스",
        packages: "패키지",
        facilities: "시설",
        team: "우리 팀",
        news: "뉴스",
        contact: "연락처",
        faq: "자주 묻는 질문",
        
        // Home Section
        heroTitle: "러빙홈스에 오신 것을 환영합니다",
        heroSubtitle: "홍콩 중심부에 있는 반려견을 위한 따뜻하고 편안한 장소",
        heroDesc1: "저희는 현대적인 시설과 고품질 서비스로 안전하고 즐거운 환경을 제공합니다",
        heroDesc2: "저희 사이트를 탐색하여 서비스, 다양한 패키지를 알아보시고 쉽게 연락할 수 있습니다",
        exploreServices: "서비스 탐색",
        contactUs: "연락하기",
        
        // About Section
        aboutTitle: "소개",
        aboutDesc1: "러빙홈스는 따뜻하고 안전한 환경을 제공하는 통합 반려견 호텔입니다",
        aboutDesc2: "저희는 반려견의 편안함과 행복을 고려하여 돌봅니다",
        aboutDesc3: "호텔에는 안전한 목초지, 실내외 놀이터, 일일 산책 및 운동 경로가 포함되어 있습니다",
        
        // Services Section
        servicesTitle: "서비스",
        groomingSpa: "그루밍 & 스파",
        groomingDesc: "전문적인 세척 및 목욕",
        luxuryRooms: "럭셔리 룸",
        roomsDesc: "편안한 실내 방",
        pickupDropoff: "픽업 & 드롭오프",
        pickupDesc: "운송 서비스",
        outdoorFields: "안전한 야외 구역",
        outdoorDesc: "안전한 실외 구역",
        dogWalking: "산책",
        walkingDesc: "일일 반려견 산책",
        veterinaryServices: "수의 서비스",
        veterinaryDesc: "24/7 수의 서비스",
        petMonitoring: "펫 모니터링",
        monitoringDesc: "24/7 반려견 모니터링",
        privateGrass: "개인 잔디 구역",
        grassDesc: "개인 잔디 구역",
        indoorPlay: "실내 놀이터",
        playDesc: "실내 놀이 구역",
        
        // Packages Section
        packagesTitle: "숙박 패키지",
        premiumPackage: "프리미엄",
        classicPackage: "클래식",
        dailyPackage: "일일",
        premiumFeature1: "일일 4회 산책",
        premiumFeature2: "4가지 활동",
        premiumFeature3: "개인 잔디 구역",
        premiumFeature4: "일일 업데이트 및 사진",
        premiumFeature5: "맞춤 보상",
        classicFeature1: "3회 산책",
        classicFeature2: "3가지 활동",
        classicFeature3: "실내 놀이터",
        classicFeature4: "휴식 구역",
        classicFeature5: "그루밍 및 세척 세션",
        dailyFeature1: "2회 산책",
        dailyFeature2: "야외 놀이터",
        dailyFeature3: "애질리티 코스",
        dailyFeature4: "모래 파기",
        packageNote: "호텔에 연락하여 장기 숙박이나 특별 요구사항에 맞게 패키지를 맞춤화할 수 있습니다",
        
        // Facilities Section
        facilitiesTitle: "호텔 시설",
        groomingFacility: "그루밍 살롱 및 스파",
        outdoorFacility: "안전한 야외 목초지 및 산책 경로",
        indoorFacility: "실내 놀이터 및 개인 녹지 공간",
        veterinaryFacility: "24/7 수의 서비스",
        
        // News Section
        newsTitle: "최신 뉴스",
        dailyPhotos: "반려견의 일일 사진",
        dailyPhotosDesc: "고객은 반려견의 일일 사진을 따를 수 있습니다",
        offersEvents: "새로운 제안 및 이벤트",
        offersEventsDesc: "호텔 업데이트를 확인하고 새로운 제안이나 이벤트를 보세요",
        
        // Contact Section
        contactTitle: "연락처",
        emailLabel: "이메일",
        phoneLabel: "전화",
        fullName: "성명",
        emailAddress: "이메일 주소",
        phoneNumber: "전화번호",
        packageType: "패키지 유형",
        selectPackage: "패키지 선택",
        customPackage: "맞춤",
        yourMessage: "메시지",
        sendMessage: "메시지 보내기",
        
        // Team Section
        teamTitle: "우리 팀",
        teamDesc: "우리 팀은 동물 관리에 전문화된 전문가들로 구성되어 있습니다. 그들은 모두 자신의 일에 열정적이며 우리 개들에게 최상의 관리를 제공하는 데 헌신적입니다.",
        mariaName: "마리아 첸",
        mariaTitle: "그루밍 전문가",
        mariaDesc: "관리 및 그루밍 전문가",
        jamesName: "제임스 리",
        jamesTitle: "수석 개 트레이너",
        jamesDesc: "개 행동 및 훈련 전문가",
        liName: "리 웡",
        liTitle: "운영 관리자",
        liDesc: "동물 관리 시설 관리 전문가",
        doctorName: "참 박사",
        doctorTitle: "수의사장",
        doctorDesc: "동물 관리 15년 경험",
        
        // FAQ Section
        faqTitle: "자주 묻는 질문",
        faqQ1: "영업시간은 어떻게 되나요?",
        faqA1: "우리는 개들에게 최상의 관리를 제공하기 위해 24시간, 주 7일 근무합니다.",
        faqQ2: "개가 머무는 동안 방문할 수 있나요?",
        faqA2: "네, 영업시간 동안 언제든지 방문을 환영합니다. 미리 약속을 예약해주세요.",
        faqQ3: "등록 요구사항은 무엇인가요?",
        faqA3: "등록에는 유효한 예방접종 증명서와 수의사의 최근 건강 보고서가 필요합니다.",
        faqQ4: "픽업 및 배송 서비스를 제공하나요?",
        faqA4: "네, 추가 비용으로 홍콩 어디에서든 픽업 및 배송 서비스를 제공합니다.",
        faqQ5: "개들의 안전을 어떻게 보장하나요?",
        faqA5: "24시간 감시 팀, 보안 카메라, 항상 이용 가능한 수의사 서비스가 있습니다.",
        faqQ6: "개를 위해 특별한 음식을 가져올 수 있나요?",
        faqA6: "물론입니다! 개가 좋아하는 음식을 가져오시면 지시에 따라 제공해 드립니다.",
        
        // Footer
        footerDesc: "홍콩의 통합 반려견 호텔",
        allRights: "모든 권리 보유"
    }
};

let currentLang = 'ar';
let currentTextSize = 'medium';
let speechEnabled = false;

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const langSelect = document.getElementById('langSelect');
const textIncrease = document.getElementById('textIncrease');
const textDecrease = document.getElementById('textDecrease');
const textToSpeech = document.getElementById('textToSpeech');
const contactForm = document.getElementById('contactForm');

// Video Control Variables
let isVideoPlaying = true;
let isImageVisible = false;

// Video Play Function
function playVideo() {
    const thumbnail = document.getElementById('videoThumbnail');
    const video = document.getElementById('video-frame');
    const toggleVideoBtn = document.getElementById('toggleVideo');
    const toggleImageBtn = document.getElementById('toggleImage');
    
    if (!thumbnail || !video) return;
    
    thumbnail.style.display = 'none';
    video.style.display = 'block';
    video.play();
    isVideoPlaying = true;
    isImageVisible = false;
    
    updateVideoControls();
    updateImageControls();
}

// Toggle Video Play/Pause
function toggleVideo() {
    const video = document.getElementById('video-frame');
    if (!video) return;
    
    if (isVideoPlaying) {
        video.pause();
        isVideoPlaying = false;
    } else {
        video.play();
        isVideoPlaying = true;
    }
    
    updateVideoControls();
}

// Toggle Image Visibility
function toggleImage() {
    const thumbnail = document.getElementById('videoThumbnail');
    const video = document.getElementById('video-frame');
    
    if (!thumbnail || !video) return;
    
    if (isImageVisible) {
        thumbnail.style.display = 'none';
        video.style.display = 'block';
        isImageVisible = false;
        // Resume video when switching back to video
        if (!isVideoPlaying) {
            video.play();
            isVideoPlaying = true;
        }
    } else {
        thumbnail.style.display = 'block';
        video.style.display = 'none';
        isImageVisible = true;
        isVideoPlaying = false;
        video.pause();
    }
    
    updateVideoControls();
    updateImageControls();
}

// Update Video Controls
function updateVideoControls() {
    const toggleVideoBtn = document.getElementById('toggleVideo');
    if (!toggleVideoBtn) return;
    
    const icon = toggleVideoBtn.querySelector('i');
    const text = toggleVideoBtn.querySelector('span');
    
    if (isVideoPlaying) {
        if (icon) icon.className = 'fas fa-pause';
        if (text) text.textContent = 'إيقاف الفيديو';
    } else {
        if (icon) icon.className = 'fas fa-play';
        if (text) text.textContent = 'تشغيل الفيديو';
    }
}

// Update Image Controls
function updateImageControls() {
    const toggleImageBtn = document.getElementById('toggleImage');
    if (!toggleImageBtn) return;
    
    const text = toggleImageBtn.querySelector('span');
    
    if (isImageVisible) {
        if (text) text.textContent = 'إخفاء الصورة';
    } else {
        if (text) text.textContent = 'إظهار الصورة';
    }
}

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Observe cards
    document.querySelectorAll('.service-card, .package-card, .team-member, .faq-item').forEach(card => {
        observer.observe(card);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeAccessibility();
    initializeContactForm();
    initializeScrollAnimations();
    initializeVideoControls();
});

// Initialize Video Controls
function initializeVideoControls() {
    const toggleVideoBtn = document.getElementById('toggleVideo');
    const toggleImageBtn = document.getElementById('toggleImage');
    const thumbnail = document.getElementById('videoThumbnail');
    const iframe = document.getElementById('video-frame');
    
    // Hide thumbnail initially since video autoplays
    thumbnail.style.display = 'none';
    iframe.style.display = 'block';
    
    // Add event listeners
    toggleVideoBtn.addEventListener('click', toggleVideo);
    toggleImageBtn.addEventListener('click', toggleImage);
    
    // Initialize control states
    updateVideoControls();
    updateImageControls();
}

// Navigation
function initializeNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
            updateActiveLink(this);
            closeMobileMenu();
        });
    });

    hamburger.addEventListener('click', toggleMobileMenu);
}

function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        targetSection.classList.add('fade-in');
    }
}

function updateActiveLink(activeLink) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Accessibility Features
function initializeAccessibility() {
    // Language Selector
    langSelect.addEventListener('change', function() {
        currentLang = this.value;
        updateLanguage();
        showNotification(`Language: ${this.options[this.selectedIndex].text}`);
    });
    
    // Text Size Controls
    textIncrease.addEventListener('click', increaseTextSize);
    textDecrease.addEventListener('click', decreaseTextSize);
    
    // Text to Speech
    textToSpeech.addEventListener('click', toggleTextToSpeech);
}

function updateLanguage() {
    // Update page direction and language attribute
    if (currentLang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.body.style.fontFamily = "'Tajawal', sans-serif";
    } else if (currentLang === 'ko') {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'ko');
        document.body.style.fontFamily = "'Malgun Gothic', sans-serif";
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', currentLang);
        document.body.style.fontFamily = "'Tajawal', sans-serif";
    }
    
    // Update all text content
    updateAllTextContent();
}

function updateAllTextContent() {
    const t = translations[currentLang];
    
    // Update Navigation
    document.querySelector('a[href="#home"]').textContent = t.home;
    document.querySelector('a[href="#about"]').textContent = t.about;
    document.querySelector('a[href="#services"]').textContent = t.services;
    document.querySelector('a[href="#packages"]').textContent = t.packages;
    document.querySelector('a[href="#facilities"]').textContent = t.facilities;
    document.querySelector('a[href="#team"]').textContent = t.team;
    document.querySelector('a[href="#news"]').textContent = t.news;
    document.querySelector('a[href="#contact"]').textContent = t.contact;
    document.querySelector('a[href="#faq"]').textContent = t.faq;
    
    // Update Home Section
    document.querySelector('h1[data-text]').textContent = t.heroTitle;
    const heroPs = document.querySelectorAll('.hero-content p[data-text]');
    if (heroPs[0]) heroPs[0].textContent = t.heroSubtitle;
    if (heroPs[1]) heroPs[1].textContent = t.heroDesc1;
    if (heroPs[2]) heroPs[2].textContent = t.heroDesc2;
    document.querySelector('.btn-primary').textContent = t.exploreServices;
    document.querySelector('.btn-secondary').textContent = t.contactUs;
    
    // Update About Section
    document.querySelector('#about h2').textContent = t.aboutTitle;
    const aboutPs = document.querySelectorAll('.about-text p[data-text]');
    if (aboutPs[0]) aboutPs[0].textContent = t.aboutDesc1;
    if (aboutPs[1]) aboutPs[1].textContent = t.aboutDesc2;
    if (aboutPs[2]) aboutPs[2].textContent = t.aboutDesc3;
    
    // Update Services Section
    document.querySelector('#services h2').textContent = t.servicesTitle;
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards[0]) {
        serviceCards[0].querySelector('h3').textContent = t.groomingSpa;
        serviceCards[0].querySelector('p').textContent = t.groomingDesc;
    }
    if (serviceCards[1]) {
        serviceCards[1].querySelector('h3').textContent = t.luxuryRooms;
        serviceCards[1].querySelector('p').textContent = t.roomsDesc;
    }
    if (serviceCards[2]) {
        serviceCards[2].querySelector('h3').textContent = t.pickupDropoff;
        serviceCards[2].querySelector('p').textContent = t.pickupDesc;
    }
    if (serviceCards[3]) {
        serviceCards[3].querySelector('h3').textContent = t.outdoorFields;
        serviceCards[3].querySelector('p').textContent = t.outdoorDesc;
    }
    if (serviceCards[4]) {
        serviceCards[4].querySelector('h3').textContent = t.dogWalking;
        serviceCards[4].querySelector('p').textContent = t.walkingDesc;
    }
    if (serviceCards[5]) {
        serviceCards[5].querySelector('h3').textContent = t.veterinaryServices;
        serviceCards[5].querySelector('p').textContent = t.veterinaryDesc;
    }
    if (serviceCards[6]) {
        serviceCards[6].querySelector('h3').textContent = t.petMonitoring;
        serviceCards[6].querySelector('p').textContent = t.monitoringDesc;
    }
    if (serviceCards[7]) {
        serviceCards[7].querySelector('h3').textContent = t.privateGrass;
        serviceCards[7].querySelector('p').textContent = t.grassDesc;
    }
    if (serviceCards[8]) {
        serviceCards[8].querySelector('h3').textContent = t.indoorPlay;
        serviceCards[8].querySelector('p').textContent = t.playDesc;
    }
    
    // Update Packages Section
    document.querySelector('#packages h2').textContent = t.packagesTitle;
    const packageCards = document.querySelectorAll('.package-card');
    if (packageCards[0]) {
        packageCards[0].querySelector('h3').textContent = t.premiumPackage;
        const premiumFeatures = packageCards[0].querySelectorAll('li');
        if (premiumFeatures[0]) premiumFeatures[0].textContent = t.premiumFeature1;
        if (premiumFeatures[1]) premiumFeatures[1].textContent = t.premiumFeature2;
        if (premiumFeatures[2]) premiumFeatures[2].textContent = t.premiumFeature3;
        if (premiumFeatures[3]) premiumFeatures[3].textContent = t.premiumFeature4;
        if (premiumFeatures[4]) premiumFeatures[4].textContent = t.premiumFeature5;
    }
    if (packageCards[1]) {
        packageCards[1].querySelector('h3').textContent = t.classicPackage;
        const classicFeatures = packageCards[1].querySelectorAll('li');
        if (classicFeatures[0]) classicFeatures[0].textContent = t.classicFeature1;
        if (classicFeatures[1]) classicFeatures[1].textContent = t.classicFeature2;
        if (classicFeatures[2]) classicFeatures[2].textContent = t.classicFeature3;
        if (classicFeatures[3]) classicFeatures[3].textContent = t.classicFeature4;
        if (classicFeatures[4]) classicFeatures[4].textContent = t.classicFeature5;
    }
    if (packageCards[2]) {
        packageCards[2].querySelector('h3').textContent = t.dailyPackage;
        const dailyFeatures = packageCards[2].querySelectorAll('li');
        if (dailyFeatures[0]) dailyFeatures[0].textContent = t.dailyFeature1;
        if (dailyFeatures[1]) dailyFeatures[1].textContent = t.dailyFeature2;
        if (dailyFeatures[2]) dailyFeatures[2].textContent = t.dailyFeature3;
        if (dailyFeatures[3]) dailyFeatures[3].textContent = t.dailyFeature4;
    }
    document.querySelector('.package-note').textContent = t.packageNote;
    
    // Update Facilities Section
    document.querySelector('#facilities h2').textContent = t.facilitiesTitle;
    const facilityItems = document.querySelectorAll('.facility-item');
    if (facilityItems[0]) facilityItems[0].querySelector('h3').textContent = t.groomingFacility;
    if (facilityItems[1]) facilityItems[1].querySelector('h3').textContent = t.outdoorFacility;
    if (facilityItems[2]) facilityItems[2].querySelector('h3').textContent = t.indoorFacility;
    if (facilityItems[3]) facilityItems[3].querySelector('h3').textContent = t.veterinaryFacility;
    
    // Update News Section
    document.querySelector('#news h2').textContent = t.newsTitle;
    const newsCards = document.querySelectorAll('.news-card');
    if (newsCards[0]) {
        newsCards[0].querySelector('h3').textContent = t.dailyPhotos;
        newsCards[0].querySelector('p').textContent = t.dailyPhotosDesc;
    }
    if (newsCards[1]) {
        newsCards[1].querySelector('h3').textContent = t.offersEvents;
        newsCards[1].querySelector('p').textContent = t.offersEventsDesc;
    }
    
    // Update Contact Section
    document.querySelector('#contact h2').textContent = t.contactTitle;
    const contactItems = document.querySelectorAll('.contact-item h3');
    if (contactItems[0]) contactItems[0].textContent = t.emailLabel;
    if (contactItems[1]) contactItems[1].textContent = t.phoneLabel;
    
    // Update Contact Form
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
    if (formInputs[0]) formInputs[0].placeholder = t.fullName;
    if (formInputs[1]) formInputs[1].placeholder = t.emailAddress;
    if (formInputs[2]) formInputs[2].placeholder = t.phoneNumber;
    if (formInputs[3]) formInputs[3].innerHTML = `<option value="">${t.selectPackage}</option><option value="premium">${t.premiumPackage}</option><option value="classic">${t.classicPackage}</option><option value="daily">${t.dailyPackage}</option><option value="custom">${t.customPackage}</option>`;
    if (formInputs[4]) formInputs[4].placeholder = t.startDate;
    if (formInputs[5]) formInputs[5].placeholder = t.endDate;
    if (formInputs[6]) formInputs[6].placeholder = t.dogCount;
    if (formInputs[7]) formInputs[7].innerHTML = `<option value="">${t.selectSize}</option><option value="small">${t.smallDogs}</option><option value="medium">${t.mediumDogs}</option><option value="large">${t.largeDogs}</option>`;
    if (formInputs[8]) formInputs[8].placeholder = t.yourMessage;
    document.querySelector('.contact-form button').textContent = t.sendBooking;
    
    // Update Team Section
    const teamTitle = document.querySelector('#team h2');
    if (teamTitle) teamTitle.textContent = t.teamTitle;
    const teamDesc = document.querySelector('.team-description');
    if (teamDesc) teamDesc.textContent = t.teamDesc;
    
    const teamMembers = document.querySelectorAll('.team-member');
    if (teamMembers[0]) {
        teamMembers[0].querySelector('.member-name').textContent = t.mariaName;
        teamMembers[0].querySelector('.member-title').textContent = t.mariaTitle;
        teamMembers[0].querySelector('.member-description').textContent = t.mariaDesc;
    }
    if (teamMembers[1]) {
        teamMembers[1].querySelector('.member-name').textContent = t.jamesName;
        teamMembers[1].querySelector('.member-title').textContent = t.jamesTitle;
        teamMembers[1].querySelector('.member-description').textContent = t.jamesDesc;
    }
    if (teamMembers[2]) {
        teamMembers[2].querySelector('.member-name').textContent = t.liName;
        teamMembers[2].querySelector('.member-title').textContent = t.liTitle;
        teamMembers[2].querySelector('.member-description').textContent = t.liDesc;
    }
    if (teamMembers[3]) {
        teamMembers[3].querySelector('.member-name').textContent = t.doctorName;
        teamMembers[3].querySelector('.member-title').textContent = t.doctorTitle;
        teamMembers[3].querySelector('.member-description').textContent = t.doctorDesc;
    }
    
    // Update FAQ Section
    const faqTitle = document.querySelector('#faq h2');
    if (faqTitle) faqTitle.textContent = t.faqTitle;
    
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems[0]) {
        faqItems[0].querySelector('.faq-question h3').textContent = t.faqQ1;
        faqItems[0].querySelector('.faq-answer p').textContent = t.faqA1;
    }
    if (faqItems[1]) {
        faqItems[1].querySelector('.faq-question h3').textContent = t.faqQ2;
        faqItems[1].querySelector('.faq-answer p').textContent = t.faqA2;
    }
    if (faqItems[2]) {
        faqItems[2].querySelector('.faq-question h3').textContent = t.faqQ3;
        faqItems[2].querySelector('.faq-answer p').textContent = t.faqA3;
    }
    if (faqItems[3]) {
        faqItems[3].querySelector('.faq-question h3').textContent = t.faqQ4;
        faqItems[3].querySelector('.faq-answer p').textContent = t.faqA4;
    }
    if (faqItems[4]) {
        faqItems[4].querySelector('.faq-question h3').textContent = t.faqQ5;
        faqItems[4].querySelector('.faq-answer p').textContent = t.faqA5;
    }
    if (faqItems[5]) {
        faqItems[5].querySelector('.faq-question h3').textContent = t.faqQ6;
        faqItems[5].querySelector('.faq-answer p').textContent = t.faqA6;
    }
    
    // Update Footer
    document.querySelector('.footer-content p').textContent = t.footerDesc;
    document.querySelector('.footer-bottom p').innerHTML = `&copy; 2024 لُوفينغ هومز. ${t.allRights}.`;
}

function increaseTextSize() {
    const sizes = ['small', 'medium', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(currentTextSize);
    currentTextSize = sizes[Math.min(currentIndex + 1, sizes.length - 1)];
    updateTextSize();
}

function decreaseTextSize() {
    const sizes = ['small', 'medium', 'large', 'xlarge'];
    const currentIndex = sizes.indexOf(currentTextSize);
    currentTextSize = sizes[Math.max(currentIndex - 1, 0)];
    updateTextSize();
}

function updateTextSize() {
    document.body.classList.remove('text-size-small', 'text-size-medium', 'text-size-large', 'text-size-xlarge');
    document.body.classList.add(`text-size-${currentTextSize}`);
    
    const sizeNames = {
        small: 'صغير',
        medium: 'متوسط',
        large: 'كبير',
        xlarge: 'كبير جداً'
    };
    
    showNotification(`حجم النص: ${sizeNames[currentTextSize]}`);
}

function toggleTextToSpeech() {
    speechEnabled = !speechEnabled;
    textToSpeech.classList.toggle('active');
    
    if (speechEnabled) {
        startTextToSpeech();
        showNotification('Text-to-speech enabled');
    } else {
        stopTextToSpeech();
        showNotification('Text-to-speech disabled');
    }
}

function startTextToSpeech() {
    if ('speechSynthesis' in window) {
        const activeSection = document.querySelector('.section.active');
        const textElements = activeSection.querySelectorAll('[data-text]');
        
        textElements.forEach((element, index) => {
            setTimeout(() => {
                const text = element.getAttribute('data-text') || element.textContent;
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = currentLang === 'ar' ? 'ar-SA' : 'en-US';
                speechSynthesis.speak(utterance);
            }, index * 2000);
        });
    }
}

function stopTextToSpeech() {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
    }
}

// Contact Form
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission();
        });
    }
}

function handleFormSubmission() {
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    showNotification('Message sent successfully! We will contact you soon.');
    contactForm.reset();
}

// Animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .package-card, .facility-item, .news-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility Functions
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        z-index: 10000;
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Optimization
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Performance Optimization
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Handle responsive adjustments
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }, 250);
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
    
    // Alt + L for language
    if (e.altKey && e.key === 'l') {
        toggleLanguage();
    }
    
    // Alt + + for text size increase
    if (e.altKey && e.key === '+') {
        increaseTextSize();
    }
    
    // Alt + - for text size decrease
    if (e.altKey && e.key === '-') {
        decreaseTextSize();
    }
    
    // Alt + S for text to speech
    if (e.altKey && e.key === 's') {
        toggleTextToSpeech();
    }
});

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    .notification {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(style);
