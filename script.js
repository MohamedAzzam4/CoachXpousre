// Wait for the entire page to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================================
    // --- 1. Portfolio Modal Logic ---
    // ==================================
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('portfolio-modal');
    const modalImg = document.getElementById('modal-img');
    const closeButton = document.querySelector('.close-button');

    // Add a click event to each portfolio item to open the modal
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-img-src');
            modalImg.src = imgSrc;
            modal.style.display = 'flex';
        });
    });

    // Function to close the modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Event listeners to close the modal
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        // Close if the click is on the dark background, not the image itself
        if (e.target === modal) {
            closeModal();
        }
    });

    // ==================================
    // --- 2. Language Switcher Logic ---
    // ==================================
    
    // Object containing all text translations
    const translations = {
        en: {
            heroTitle: "START BUILDING YOUR EMPIRE.",
            heroSubtitle: "We turn your coaching expertise into a profitable, professional brand.",
            heroButton: "[ Get Started ]",
            painPointTitle: "You Have The Expertise, But...",
            painPoint1: "<strong>Your time is valuable,</strong> and design work steals it from you.",
            painPoint2: "<strong>The competition is fierce,</strong> and standing out requires more than just experience.",
            painPoint3: "<strong>Your current brand</strong> doesn't reflect your quality or justify higher prices.",
            painPointImageAlt: "A coach looking exhausted",
            servicesTitle: "The Solution is Here<br>Our Tailored Services", // ✨ Updated Line
            service1Title: "Professional PDF Design",
            service1Desc: "We transform training and nutrition plans from plain text into premium, branded PDF files that reflect your professionalism.",
            service2Title: "Professional Coach Profile",
            service2Desc: "We design a comprehensive coach profile that highlights your experience, story, and achievements to be your strongest marketing tool.",
            service3Title: "Social Media Content Packages",
            service3Desc: "We provide monthly packages of ready-to-publish posts and designs to ensure a consistent and professional online presence.",
            portfolioTitle: "See The Quality For Yourself",
            portfolio1: "Full Identity for Coach Khaled",
            portfolio2: "Training Program Design",
            portfolio3: "Social Media Package",
            portfolio4: "Coach Profile",
            finalCtaTitle: "Ready to Build Your Empire?",
            finalCtaButton: "[ Contact Us Now ]",
            copyright: "&copy; 2024 CoachXposure. All rights reserved."
        },
        ar: {
            heroTitle: "ابدأ في بناء إمبراطوريتك الان",
            heroSubtitle: "نحول خبرتك التدريبية إلى علامة تجارية تدر عليك الأرباح.",
            heroButton: "[ ابدأ الآن ]",
            painPointTitle: "لديك الخبرة، لكن...",
            painPoint1: "<strong>وقتك ثمين،</strong> والتصميم ومتابعة صناع المحتوى يسرقه منك.",
            painPoint2: "<strong>المنافسة شرسة،</strong> والتميز عن الآخرين يتطلب أكثر من مجرد خبرة.",
            painPoint3: "<strong>علامتك التجارية الحالية</strong> لا تعكس جودة خبرتك ولا تبرر أسعاراً أعلى.",
            painPointImageAlt: "مدرب يظهر عليه الإرهاق",
            servicesTitle: "الحل بين يديك<br>خدماتنا المصممة لك", // ✨ Updated Line
            service1Title: "تصميم برامج PDF احترافية",
            service1Desc: "نحول خطط التدريب والتغذية من مجرد نصوص إلى ملفات PDF ذات تصميم وهوية بصرية فاخرة تعكس احترافيتك.",
            service2Title: "ملف المدرب الاحترافي",
            service2Desc: "نصمم لك ملفًا تعريفيًا شاملاً (Coach Profile) يبرز خبراتك وقصتك وإنجازاتك، ليكون أداتك التسويقية الأقوى.",
            service3Title: "باقات محتوى السوشيال ميديا",
            service3Desc: "نوفر لك باقات شهرية من التصاميم والبوستات الجاهزة للنشر، لضمان حضور مستمر واحترافي على حساباتك.",
            portfolioTitle: "شاهد جودة عملنا بنفسك",
            portfolio1: "هوية كاملة للمدرب خالد",
            portfolio2: "تصميم برنامج تدريبي",
            portfolio3: "تصميم برنامج تدريبي",
            portfolio4: "ملف تعريفي للمدرب",
            finalCtaTitle: "هل أنت مستعد لبناء إمبراطوريتك؟",
            finalCtaButton: "[ تواصل معنا الآن ]",
            copyright: "&copy; 2024 CoachXposure. جميع الحقوق محفوظة."
        }
    };

    const langSwitcher = document.querySelector('.lang-switcher');
    const langButtons = {
        en: document.getElementById('lang-en'),
        ar: document.getElementById('lang-ar')
    };
    const htmlEl = document.documentElement;
    
    // Function to set the language of the page
    const setLanguage = (lang) => {
        // Set attributes on <html> tag for direction and language
        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Add/remove body classes for font styling
        document.body.classList.toggle('lang-ar', lang === 'ar');
        document.body.classList.toggle('lang-en', lang === 'en');

        // Update all text elements with the data-key attribute
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                if (element.tagName === 'IMG') {
                    element.alt = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            }
        });

        // Update active button style
        langButtons.en.classList.toggle('active', lang === 'en');
        langButtons.ar.classList.toggle('active', lang === 'ar');

        // Save language preference in the browser's local storage
        localStorage.setItem('language', lang);
    };

    // Add click event to the language switcher container
    langSwitcher.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const lang = e.target.id.replace('lang-', '');
            setLanguage(lang);
        }
    });

    // Check for a saved language in local storage, or default to Arabic
    const savedLang = localStorage.getItem('language') || 'ar';
    setLanguage(savedLang);

    // ==================================
    // --- 3. Reveal on Scroll Logic ---
    // ==================================
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    // The observer callback function
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Select all elements to be revealed and start observing them
    const elementsToReveal = document.querySelectorAll('.reveal-on-scroll');
    elementsToReveal.forEach(element => {
        observer.observe(element);
    });
});
