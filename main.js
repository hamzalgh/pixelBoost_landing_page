const icon = document.getElementById('theme-toggle');
const moon = `<svg id='theme-icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z'/>
              </svg>`;
const sun = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-medium-icon lucide-sun-medium"><circle cx="12" cy="12" r="4"/><path d="M12 3v1"/><path d="M12 20v1"/><path d="M3 12h1"/><path d="M20 12h1"/><path d="m18.364 5.636-.707.707"/><path d="m6.343 17.657-.707.707"/><path d="m5.636 5.636.707.707"/><path d="m17.657 17.657.707.707"/></svg>`;
const upBtn = document.querySelector("#upBtn");
const valueDisplays = document.querySelectorAll(".num");
const aboutCards = document.querySelectorAll("section ul li");
const servicesCards = document.querySelectorAll("section div article");
const interval = 1500;
let activated = false;

// Set initial theme based on localStorage
if (localStorage.getItem('lightMode') === true) {
    document.body.classList.add('light');
    icon.innerHTML = sun;
} else {
    document.body.classList.remove('light');
    icon.innerHTML = moon;
}

// Toggle theme on icon click
icon.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLightMode = document.body.classList.contains('light');
    localStorage.setItem('lightMode', isLightMode);
    icon.innerHTML = isLightMode ? sun : moon;
});

// Show or hide the up button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        upBtn.classList.add("show");
    } else {
        upBtn.classList.remove("show");
    }
});

// Scroll to top when up button is clicked
upBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Scroll event to animate the aboute section
window.addEventListener("scroll", () => {
    const containerTop = aboutCards[0].getBoundingClientRect().top;
    const containerHeight = aboutCards[0].offsetHeight;
    const windowHeight = window.innerHeight;

    // Check if the container is in the viewport
    if (containerTop < windowHeight && containerTop + containerHeight > 0 && !activated) {
        aboutCards.forEach((card) => {
            card.classList.add("animate");
        });
        setTimeout(() => {
            valueDisplays.forEach((valueDisplay) => {
                let startValue = 0;
                let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                let duration = Math.floor(interval / endValue);
                let counter = setInterval(function () {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
            activated = true;
        }, 400);
    }else if (containerTop + containerHeight < 0 || containerTop > windowHeight && activated) {
        aboutCards.forEach((card) => {
            card.classList.remove("animate");
        });
        valueDisplays.forEach(valueDisplay => valueDisplay.textContent = "0");
        activated = false;
    }
});

// Scroll event to animate the services section
window.addEventListener("scroll", function () {
    servicesCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardHeight = card.offsetHeight;
        const windowHeight = window.innerHeight;

        // Check if the card is in the viewport
        if (cardTop < windowHeight && cardTop + cardHeight > 0) {
            card.classList.add("animate");
        } else if (cardTop + cardHeight < 0 || cardTop > windowHeight) {
            card.classList.remove("animate");
        }
    });
});