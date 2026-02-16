# 🎓 Osobní IT Profil 2.0

Moderní a přehledný osobní IT profil web inspirovaný LinkedIn. Představ se jako IT student a ukáž svůj potenciál!

## 📋 Obsah

- [Vlastnosti](#-vlastnosti)
- [Struktura](#-struktura)
- [Jak používat](#-jak-používat)
- [Úpravy](#-úpravy)
- [Technologie](#-technologie)

## ✨ Vlastnosti

- ✅ **Přehledný design** - Čistý a moderní layout s dobrým UX
- ✅ **Responzivní** - Funguje perfektně na všech zařízeních (desktop, tablet, mobil)
- ✅ **Interaktivní** - Smooth scroll, animace a dynamické efekty
- ✅ **Kompletní sekce**:
  - Hero sekce s profilem
  - O mně (kdo jsi)
  - Dovednosti (skills s progress bary)
  - Projekty (portfolio)
  - Zájmy (co tě baví)
  - Cíle (kam směřuješ)
  - Kontakt

## 📁 Struktura

```
Osobni_IT_Profil_2.0/
├── index.html          # Hlavní stránka
├── style.css           # Stylování a responsive design
├── script.js           # Interaktivita a animace
└── README.md           # Dokumentace (tento soubor)
```

## 🚀 Jak používat

### Spuštění
Jednoduše otevři `index.html` v prohlížeči nebo použij live server:

```bash
# Pokud máš Python 3
python -m http.server 8000

# Pokud máš Node.js s http-server
npx http-server
```

Poté přejdi na `http://localhost:8000`

## ✏️ Úpravy

### 1. **Osobní informace**
V `index.html` uprav tyto části:

```html
<!-- Hero sekce -->
<h1 class="hero-title">Tvoje Jméno</h1>
<p class="hero-subtitle">Tvůj titul | Frontend Developer | Designer</p>

<!-- Profil obrázek -->
<img src="tvuj-obrazek.jpg" alt="Tvůj profil" class="profile-image">

<!-- O mně -->
Uprav text v sekci `<section id="about">`
```

### 2. **Dovednosti**
Uprav skill bary a kategorie:

```html
<div class="skill-item">
    <span class="skill-name">Tvoje dovednost</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

Procento `width` představuje úroveň dovednosti (0-100%).

### 3. **Projekty**
V sekci `<section id="projects">` přidej své projekty:

```html
<div class="project-card">
    <img src="obrazek-projektu.jpg" alt="Projekt">
    <div class="project-content">
        <h3>Název Projektu</h3>
        <p>Description...</p>
        <div class="project-tags">
            <span class="tag">Technology</span>
        </div>
        <a href="odkaz-na-projekt.com" class="project-link">Více →</a>
    </div>
</div>
```

### 4. **Kontakt**
Uprav kontaktní údaje v sekci `<section id="contact">`:

```html
<a href="mailto:tvuj.email@example.com" class="contact-link">
    <span class="link-icon">📧</span>
    <span>tvuj.email@example.com</span>
</a>
```

### 5. **Barvy**
Změň barvy v `style.css` - CSS proměnné:

```css
:root {
    --primary-color: #0066cc;      /* Primární modrá */
    --secondary-color: #ff6b35;    /* Sekundární oranžová */
    --text-dark: #1a1a1a;          /* Tmavý text */
    /* ... */
}
```

### 6. **Přidej svůj obrázek**
1. Vytvoř složku `assets/` v projektu
2. Vlož svůj obrázek: `assets/profil.jpg`
3. Uprav cestu v `index.html`: `src="assets/profil.jpg"`

## 🛠️ Technologie

| Technologie | Popis |
|------------|-------|
| **HTML5** | Sémantická struktura stránky |
| **CSS3** | Moderní stylování, grid, flexbox, gradients |
| **JavaScript** | Interaktivita, animace, smooth scroll |
| **Responsive Design** | Mobile-first přístup |

### CSS Funkce
- ✅ CSS Grid a Flexbox
- ✅ Gradients a visual effects
- ✅ CSS animace (slideDown)
- ✅ Media queries pro responsivitu

### JavaScript Funkce
- ✅ Smooth scroll navigace
- ✅ Active nav link highlighting
- ✅ Intersection Observer pro animace
- ✅ Skill bar animace

## 📱 Responsivní Body Points

- **Desktop**: Nad 768px - plný layout
- **Tablet**: 481-768px - adaptovaný grid
- **Mobil**: Pod 480px - single column

## 🎨 Design Principy

- **Barvy**: Modrá (#0066cc) + Oranžová (#ff6b35)
- **Typografie**: Segoe UI / Systémové fonty
- **Spacing**: Konzistentní padding/margin
- **Animace**: Smooth transitions a hover efekty

## 💡 Tipy pro vylepšení

1. **Přidej ikony** - Použij Font Awesome nebo emoji
2. **Přidej více sekcí** - Blog, certifikáty, testimonials
3. **Dark mode** - Přidej toggle pro tmavý motiv
4. **Analytics** - Přidej Google Analytics pro sledování návštěv
5. **SEO** - Uprav meta tagy pro lepší indexaci
6. **Formulář** - Přidej kontaktní formulář s backend
7. **Galerie** - Rozšiř sekci projektů o detailní galerii

## 📧 Kontakt

Máš název, email, GitHub, LinkedIn? Uprav kontaktní informace v sekci Contact!

---

**Vytvořeno**: 2026
**Verze**: 2.0
**Licence**: MIT (volně použitelné)