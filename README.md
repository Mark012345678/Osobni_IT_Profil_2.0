# 🎓 Osobní IT Profil 2.0 – Dynamický Web

Moderní a **dynamický** osobní IT profil web inspirovaný LinkedIn. Obsah se načítá ze souboru `profile.json` pomocí JavaScriptu a Fetch API. Weby běží na GitHub Pages.

## 🚀 Nové Funkce ve Verzi 2.0

✨ **Dynamické načítání dat** – Všechny sekce (jméno, dovednosti, zájmy) se načítají z JSON souboru  
✅ **Fetch API** – Moderní způsob načítání dat bez refreshu stránky  
🛡️ **Error Handling** – Robustní ošetření chyb a validace dat  
📱 **Plně Responzivní** – Funguje na všech zařízeních  
🎨 **Animace** – Smooth transitions a slideIn efekty  

## 📋 Obsah

- [Struktura Projektu](#struktura-projektu)
- [Jak Spustit](#jak-spustit)
- [Jak Upravit](#jak-upravit)
- [Git Workflow](#git-workflow)
- [Technologie](#technologie)

## 📁 Struktura Projektu

```
Osobni_IT_Profil_2.0/
├── index.html          # HTML struktura s kontejnery pro dynamický obsah
├── style.css           # Stylování a responsive design
├── app.js              # ✨ Fetch logika + vykreslování dat
├── profile.json        # ✨ Data pro profil (jméno, skills, interests)
└── README.md           # Dokumentace
```

## 🚀 Jak Spustit

### Místní Spuštění

**Možnost 1: Python**
```bash
cd /workspaces/Osobni_IT_Profil_2.0
python -m http.server 8000
# Pak otevři http://localhost:8000
```

**Možnost 2: Node.js**
```bash
npx http-server
# Pak otevři http://localhost:8080
```

**Možnost 3: Live Server (VS Code)**
- Otevři `index.html`
- Klikni na "Go Live" v pravém dolním rohu

### GitHub Pages

Webová stránka je již hostovaná na GitHub Pages:
- 🌐 [Tvůj profil na GitHub Pages](https://[tvuj-username].github.io/Osobni_IT_Profil_2.0)

## ✏️ Jak Upravit

### 1. **Změnit Svoje Údaje v `profile.json`**

```json
{
  "name": "Tvoje Jméno",
  "title": "Tvůj Titul | Frontend Developer",
  "email": "tvuj.email@example.com",
  "phone": "+420 123 456 789",
  ...
}
```

### 2. **Přidat/Upravit Dovednosti**

V `profile.json` sekcí `skills`:

```json
"skills": [
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "React",
  "Python",
  "Tvoje dovednost"
]
```

### 3. **Upravit Zájmy**

V `profile.json` sekcí `interests`:

```json
"interests": [
  {
    "id": 1,
    "title": "Tvůj Zájem",
    "description": "Popis tvého zájmu",
    "icon": "💻"
  }
]
```

### 4. **Přidání/Úprava Projektů** (BONUS)

```json
"projects": [
  {
    "id": 1,
    "title": "Název Projektu",
    "description": "Popis",
    "technologies": ["Tech1", "Tech2"],
    "link": "https://github.com/...",
    "image": "url-obrázku"
  }
]
```

### 5. **Změna Barev** (CSS)

V `style.css` uprav CSS proměnné:

```css
:root {
    --primary-color: #0066cc;      /* Primární modrá */
    --secondary-color: #ff6b35;    /* Sekundární oranžová */
    --text-dark: #1a1a1a;          /* Tmavý text */
    /* ... */
}
```

### 6. **Přidat Profil Obrázek**

1. Vlož svůj obrázek do složky: `assets/profil.jpg`
2. V `index.html` uprav:
```html
<img src="assets/profil.jpg" alt="Profil" class="profile-image">
```

## 🔧 Jak Funguje Fetch

### app.js – Dynamické Načítání

```javascript
fetch('profile.json')
  .then(response => response.json())
  .then(data => {
    renderProfile(data);        // Vloží jméno
    renderSkills(data.skills);  // Vykresli dovednosti
    renderInterests(data.interests); // Vykresli zájmy
  })
  .catch(error => console.error('Chyba:', error));
```

### Princip:
1. ✅ Fetch stáhne `profile.json`
2. ✅ Parsuje JSON na objekty
3. ✅ Vykreslí HTML prvky dynamicky
4. ✅ Ošetří chyby s `.catch()`

## 📊 Git History – Conventional Commits

Projekt používá **Conventional Commits** formát pro čistou historii:

```
7f2a945 - style: add slideIn animation
d6140e5 - feat(js): improve error handling and validation
d500fd9 - chore: add static files
029513e - feat(js): create app.js with fetch data loading
b875c43 - feat(html): add containers for dynamic content
7917537 - feat(data): add profile.json with skills and interests
```

### Formát Commitů:

```
type(scope): krátký popis

• feat(data) – Nová data/funkce
• feat(html) – HTML změny
• feat(js) – JavaScript funkce
• style – Vzhled/CSS
• refactor – Přepsání kódu
• fix – Oprava chyby
• chore – Údržba/nástroje
• docs – Dokumentace
```

### Git Příkazy:

```bash
git status                    # Vidět změny
git add [file]               # Přidat soubor
git commit -m "feat: popis"  # Commit se zprávou
git push                     # Nahrát na GitHub
git log --oneline            # Historie commitů
```

## 🛠️ Technologie

| Technologie | Popis |
|------------|-------|
| **HTML5** | Sémantická struktura |
| **CSS3** | Moderní styling, animace |
| **JavaScript (ES6+)** | Fetch API, DOM manipulace |
| **JSON** | Struktura dat |
| **GitHub Pages** | Hosting |

### Použité JS Metody:

- `fetch()` – Načtení dat
- `.then()` – Zpracování Promise
- `.catch()` – Chybové ošetření
- `document.querySelector()` – Hledání prvků
- `document.createElement()` – Vytvoření prvků
- `.appendChild()` – Přidání prvků do DOM
- `Array.forEach()` – Iterace přes pole
- `.textContent` – Vložení textu
- `.innerHTML` – Vložení HTML

## 📝 Příklady Customizace

### Přidat Nový Skill

```javascript
// V profile.json
"skills": [
  "HTML5 & CSS3",
  "TypeScript",  // ← Nový skill
  "Python"
]
```

### Změnit Animaci

```css
/* V style.css */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(30px); /* Např. zvětšit posun */
    }
}
```

### Přidat Error Dialog

```javascript
// V app.js - already implemented!
function displayError(message) {
    // Vypíše červenou zprávu
}
```

## 🐛 Troubleshooting

| Problém | Řešení |
|---------|--------|
| "profile.json not found" | Ověř, že je soubor v kořeni projektu |
| Dovednosti se nenačítají | Otevři DevTools (F12) a zkontroluj konzoli |
| Chybí ikony v zájmech | Ověř, že máš emojis v JSON (`"icon": "💻"`) |
| CORS chyba | Usar server (ne `file://` protokol) |

## 📱 Responsive Body Points

- **Desktop** (>768px) – Plný layout
- **Tablet** (481-768px) – Adaptovaný grid
- **Mobil** (<480px) – Single column

## 🚀 Pokročilé Úpravy

### Přidej Projekty Sekci

V `index.html` přidej:
```html
<section id="projects" class="projects">
    <div id="projectsList"></div>
</section>
```

V `app.js` přidej:
```javascript
if (data.projects && Array.isArray(data.projects)) {
    renderProjects(data.projects);
}
```

### Přidej Dark Mode

```javascript
document.body.classList.toggle('dark-mode');
```

```css
body.dark-mode {
    background-color: #1a1a1a;
    color: #fff;
}
```

## 📚 Další Zdroje

- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSON Format](https://www.json.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Pages Docs](https://pages.github.com/)

## 📧 Příspěvek & Feedback

Pokud máš návrhy na vylepšení, nedvoj se a kontaktuj mě! 

---

**Verze**: 2.0 – Dynamická  
**Poslední Aktualizace**: 16. února 2026  
**Stav**: ✅ Prêt na GitHub Pages
