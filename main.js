const icon = document.getElementById('theme-toggle');
const moon = `<svg id='theme-icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z'/>
              </svg>`;
const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-medium-icon lucide-sun-medium"><circle cx="12" cy="12" r="4"/><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 17.657-.707.707"/><path d="m5.636 5.636.707.707"/><path d="m17.657 17.657.707.707"/></svg>`;

if (localStorage.getItem('lightMode') === true) {
    document.body.classList.add('light');
    icon.innerHTML = sun;
} else {
    document.body.classList.remove('light');
    icon.innerHTML = moon;
}

icon.addEventListener('click', function() {
    document.body.classList.toggle('light');
    const isLightMode = document.body.classList.contains('light');
    localStorage.setItem('lightMode', isLightMode);
    icon.innerHTML = isLightMode ? sun : moon;
});