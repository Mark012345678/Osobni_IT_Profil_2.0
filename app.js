// Načtení dat z profile.json
fetch('profile.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Vložení jména a titulu
        renderProfile(data);
        
        // Vložení dovedností
        renderSkills(data.skills);
        
        // Vložení zájmů
        renderInterests(data.interests);
    })
    .catch(error => {
        console.error('Chyba při načítání dat:', error);
        displayError('Chyba při načítání profilu. Prosím, obnovte stránku.');
    });

/**
 * Vykreslí profil (jméno a titul)
 */
function renderProfile(data) {
    const nameElement = document.getElementById('profileName');
    const titleElement = document.getElementById('profileTitle');
    
    if (nameElement) {
        nameElement.textContent = data.name;
    }
    
    if (titleElement) {
        titleElement.textContent = data.title;
    }
    
    console.log('✅ Profil vykreslený:', data.name);
}

/**
 * Vykreslí seznam dovedností
 */
function renderSkills(skills) {
    const skillsList = document.getElementById('skillsList');
    
    if (!skillsList) {
        console.error('❌ Kontejner skillsList nenalezen');
        return;
    }
    
    skillsList.innerHTML = ''; // Vyčistit obsah
    
    // Vytvořit HTML pro každou dovednost
    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.style.animation = `slideIn 0.5s ease ${index * 0.1}s backwards`;
        
        // Náhodná šířka progress baru (60-95%)
        const skillLevel = Math.floor(Math.random() * 36) + 60;
        
        skillItem.innerHTML = `
            <span class="skill-name">${skill}</span>
            <div class="skill-bar">
                <div class="skill-progress" style="width: ${skillLevel}%"></div>
            </div>
        `;
        
        skillsList.appendChild(skillItem);
    });
    
    console.log(`✅ ${skills.length} dovedností vykresleno`);
}

/**
 * Vykreslí seznam zájmů
 */
function renderInterests(interests) {
    const interestsList = document.getElementById('interestsList');
    
    if (!interestsList) {
        console.error('❌ Kontejner interestsList nenalezen');
        return;
    }
    
    interestsList.innerHTML = ''; // Vyčistit obsah
    
    // Vytvořit HTML pro každý zájem
    interests.forEach((interest, index) => {
        const interestCard = document.createElement('div');
        interestCard.className = 'interest-card';
        interestCard.style.animation = `slideIn 0.5s ease ${index * 0.1}s backwards`;
        
        interestCard.innerHTML = `
            <div class="interest-icon">${interest.icon}</div>
            <h3>${interest.title}</h3>
            <p>${interest.description}</p>
        `;
        
        interestsList.appendChild(interestCard);
    });
    
    console.log(`✅ ${interests.length} zájmů vykresleno`);
}

/**
 * Zobrazí chybovou zprávu
 */
function displayError(message) {
    const container = document.querySelector('.container');
    if (container) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            background-color: #ff6b6b;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            margin: 20px 0;
            text-align: center;
            font-weight: 600;
        `;
        errorDiv.textContent = message;
        container.insertBefore(errorDiv, container.firstChild);
    }
}

// Smooth scroll pro navigaci
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

// Highlight aktivních nav linků
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer pro animace
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Přidání CSS stylů pro animace
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .nav-link.active {
        color: var(--primary-color);
    }

    .nav-link.active::after {
        width: 100%;
    }

    .skill-item {
        opacity: 0;
        animation: slideIn 0.5s ease forwards;
    }

    .interest-card {
        opacity: 0;
        animation: slideIn 0.5s ease forwards;
    }
`;
document.head.appendChild(style);

console.log('✅ App.js načten a připraven');
