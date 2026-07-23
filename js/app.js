// Theme Initialization with LocalStorage Persistence
function initTheme() {
    const savedTheme = localStorage.getItem('sunshine_theme');
    const themeIcon = document.getElementById('themeIcon');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        if (themeIcon) themeIcon.textContent = 'light_mode';
    } else {
        document.documentElement.classList.remove('dark');
        if (themeIcon) themeIcon.textContent = 'dark_mode';
    }
}

function toggleTheme() {
    const themeIcon = document.getElementById('themeIcon');
    const isDark = document.documentElement.classList.toggle('dark');
    if (isDark) {
        localStorage.setItem('sunshine_theme', 'dark');
        if (themeIcon) themeIcon.textContent = 'light_mode';
        showToast('🌙 Switched to Warm Dark Theme');
    } else {
        localStorage.setItem('sunshine_theme', 'light');
        if (themeIcon) themeIcon.textContent = 'dark_mode';
        showToast('☀️ Switched to Light Theme');
    }
}

// Preloader Auto-Hide Handler
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.display !== 'none') {
        preloader.classList.add('opacity-0');
        setTimeout(() => preloader.style.display = 'none', 400);
    }
}

let activeCategory = "all";

// Render Homepage 6 Category Filter Pills
function renderCategories() {
    const container = document.getElementById('categoryFilterContainer');
    if (!container) return;
    let html = '';
    homepageCategories.forEach(cat => {
        const isActive = cat.id === activeCategory;
        const activeClasses = isActive 
            ? "bg-primary text-white shadow-[4px_4px_0px_#2c1e16]" 
            : "bg-surface hover:bg-accent text-on-background";
        
        html += `
            <button onclick="selectCategory('${cat.id}')" class="px-5 py-2.5 rounded-xl border-2 border-on-background font-black text-sm whitespace-nowrap transition-all flex-shrink-0 ${activeClasses}">
                ${cat.label}
            </button>
        `;
    });
    container.innerHTML = html;
}

// Render Featured 6 Dishes Cards Grid on Homepage
function renderMenuDishes() {
    const container = document.getElementById('menuContainer');
    if (!container) return;
    
    let featuredList = fullMenuData.filter(d => d.isFeatured);

    if (activeCategory === "veg") {
        featuredList = featuredList.filter(d => d.isVeg);
    } else if (activeCategory === "nonveg") {
        featuredList = featuredList.filter(d => !d.isVeg);
    } else if (activeCategory === "pizza") {
        featuredList = featuredList.filter(d => d.category === "pizza");
    } else if (activeCategory === "chinese") {
        featuredList = featuredList.filter(d => d.category === "chinese");
    } else if (activeCategory === "shakes") {
        featuredList = featuredList.filter(d => d.category === "shakes");
    }

    let html = '';
    featuredList.forEach(dish => {
        const vegBadge = dish.isVeg 
            ? `<div class="w-4 h-4 border-2 border-green-600 flex items-center justify-center rounded bg-white"><div class="w-2.5 h-2.5 bg-green-600 rounded-full"></div></div>`
            : `<div class="w-4 h-4 border-2 border-red-600 flex items-center justify-center rounded bg-white"><div class="w-2.5 h-2.5 bg-red-600 rounded-full"></div></div>`;

        html += `
            <div onclick="openDishDetailModal(${dish.id})" class="dish-card cursor-pointer bg-white rounded-3xl overflow-hidden block-border group hover:-translate-y-2.5 hover:shadow-[12px_12px_0px_#2c1e16] transition-all duration-300">
                <div class="h-64 overflow-hidden relative border-b-4 border-on-background">
                    <img alt="${dish.name}" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="${dish.image}"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                    <div class="absolute top-4 left-4 bg-white/95 p-2 rounded-xl border-2 border-on-background shadow-md">
                        ${vegBadge}
                    </div>
                    <div class="absolute top-4 right-4 bg-accent px-4 py-1.5 rounded-xl font-black text-on-background border-2 border-on-background text-xl shadow-[4px_4px_0px_#2c1e16] group-hover:rotate-6 transition-transform">₹${dish.price}</div>
                </div>
                <div class="p-6 flex flex-col justify-between h-[210px]">
                    <div>
                        <h3 class="text-2xl font-black text-on-background mb-2 group-hover:text-primary transition-colors">${dish.name}</h3>
                        <p class="text-sm text-on-surface-variant font-semibold line-clamp-2 leading-relaxed">${dish.desc}</p>
                    </div>
                    
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/20 text-on-background border-2 border-on-background font-black text-sm w-fit mt-2">
                        ${dish.tag}
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function selectCategory(catId) {
    activeCategory = catId;
    renderCategories();
    renderMenuDishes();
}

// Open Food Card Detail Popup Modal
function openDishDetailModal(dishId) {
    const dish = fullMenuData.find(d => d.id === dishId);
    if (!dish) return;

    const modal = document.getElementById('dishDetailModal');
    const content = document.getElementById('dishDetailContent');

    const vegBadge = dish.isVeg 
        ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-green-100 text-green-800 border-2 border-green-600 font-extrabold text-sm"><span class="w-2.5 h-2.5 bg-green-600 rounded-full"></span> Pure Veg</span>`
        : `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-red-100 text-red-800 border-2 border-red-600 font-extrabold text-sm"><span class="w-2.5 h-2.5 bg-red-600 rounded-full"></span> Non-Veg</span>`;

    content.innerHTML = `
        <div class="relative rounded-2xl overflow-hidden border-4 border-on-background shadow-[8px_8px_0px_#2c1e16] h-64 sm:h-80">
            <img src="${dish.image}" alt="${dish.name}" class="w-full h-full object-cover"/>
            <div class="absolute top-4 right-4 bg-accent px-5 py-2 rounded-2xl font-black text-2xl border-2 border-on-background shadow-[4px_4px_0px_#2c1e16]">₹${dish.price}</div>
        </div>

        <div class="space-y-3">
            <div class="flex flex-wrap items-center gap-3">
                ${vegBadge}
                <span class="px-3 py-1 rounded-xl bg-accent/20 text-on-background border-2 border-on-background font-extrabold text-sm">${dish.tag}</span>
            </div>

            <h2 class="text-3xl font-black text-on-background">${dish.name}</h2>
            <p class="text-base text-on-surface-variant font-semibold leading-relaxed">${dish.desc}</p>
        </div>

        <div class="pt-4 border-t-4 border-on-background flex flex-wrap gap-4">
            <button onclick="closeDishDetailModal(); openBookingModal();" class="flex-1 bg-primary text-white py-3.5 rounded-xl border-4 border-on-background font-black text-base uppercase shadow-[4px_4px_0px_#2c1e16] hover:bg-secondary block-border flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-xl">table_restaurant</span> Reserve a Table
            </button>
            <a href="https://wa.me/919301059399?text=Hello%20Sunshine%20Cafe!%20I%20am%20interested%20in%20trying%20${encodeURIComponent(dish.name)}" target="_blank" class="flex-1 bg-[#25D366] text-white py-3.5 rounded-xl border-4 border-on-background font-black text-base uppercase shadow-[4px_4px_0px_#2c1e16] hover:bg-[#1eb052] block-border flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-xl">chat</span> Chat on WhatsApp
            </a>
        </div>
    `;

    modal.classList.remove('hidden');
}

function closeDishDetailModal() {
    document.getElementById('dishDetailModal').classList.add('hidden');
}

// View Full Menu Book Modal with All 19 Categories
function openFullMenuModal() {
    const modal = document.getElementById('fullMenuModal');
    const container = document.getElementById('fullMenuBookContainer');

    let html = '';
    fullCategories.forEach(cat => {
        const catDishes = fullMenuData.filter(d => d.category === cat.id);
        if (catDishes.length === 0) return;

        html += `
            <div class="bg-surface-container-high p-6 rounded-2xl border-4 border-on-background shadow-[6px_6px_0px_#2c1e16]">
                <h4 class="text-2xl font-black text-primary border-b-4 border-primary pb-2 mb-4 uppercase tracking-wider">${cat.label}</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        `;

        catDishes.forEach(dish => {
            html += `
                <div class="flex justify-between items-start bg-white p-4 rounded-xl border-2 border-on-background/20 cursor-pointer hover:border-primary transition-colors" onclick="openDishDetailModal(${dish.id})">
                    <div>
                        <h5 class="text-lg font-black flex items-center gap-2">
                            <span class="w-2.5 h-2.5 rounded-full ${dish.isVeg ? 'bg-green-600' : 'bg-red-600'}"></span> ${dish.name}
                        </h5>
                        <p class="text-xs text-on-surface-variant font-semibold mt-1">${dish.desc}</p>
                    </div>
                    <span class="text-lg font-black text-accent bg-accent/20 px-3 py-1 rounded-lg border border-on-background/20 shrink-0 ml-2">₹${dish.price}</span>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    modal.classList.remove('hidden');
}

function closeFullMenuModal() {
    document.getElementById('fullMenuModal').classList.add('hidden');
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Toast Helper
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.remove('translate-y-24', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
    }, 3000);
}

// Table & Event Reservation Modal Handler
const bookingModal = document.getElementById('bookingModal');
function openBookingModal() {
    if (bookingModal) bookingModal.classList.remove('hidden');
}
function closeBookingModal() {
    if (bookingModal) bookingModal.classList.add('hidden');
}

function submitBooking(e) {
    e.preventDefault();
    const name = document.getElementById('bookingName').value;
    const phone = document.getElementById('bookingPhone').value;
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const guests = document.getElementById('bookingGuests').value;
    const occasion = document.getElementById('bookingOccasion').value;
    const notes = document.getElementById('bookingNotes').value || 'None';

    const prefilledMsg = `Hello Sunshine Cafe & Restaurant,

I would like to reserve a dine-in table/event.

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Guests: ${guests}
Occasion: ${occasion}
Additional Notes: ${notes}

Please confirm my reservation.`;

    const whatsappUrl = `https://wa.me/919301059399?text=${encodeURIComponent(prefilledMsg)}`;
    window.open(whatsappUrl, '_blank');
    closeBookingModal();
    showToast('🎉 Redirecting to WhatsApp for reservation confirmation!');
}

// Gallery Lightbox Handlers
const galleryData = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJX96KNYOhVzG48a4kJn9lySgLQ2Cfzro0j2ejmbRDIipb_fbmDTMrtcrlUTpWT-wFY50_TIJH5N63perQ55OcbOtLtha5RjWVefLXkKNMcdeI-c49ukNaRp5fYtrIaS39LvBWoS2gn0M6soqHbITC1ONeUjJnXLSlcJ7A-hvA6DdYrAQ_HQ92PooTTrAW_7LrQRyDCFDupyxS_xrf2o4KfmRS_fNvJc99DBRifyqfeVZTbJd3VxnR-sZ0LQ945Qw5YT3qfG-AUCCl", title: "Restaurant Interior" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFe6g7JAj05RCByz8i5EtHIrSBkj23bwvVPTCJcdJyjUmQneITzzOky5g4-1D-9eMUz2s3wEAlUo6gKY6S2LbZIXz2zgiD8yVHfRCuFwpIFw5KAjEjWjTq6WwH1EhFYSIE7F3vL6blgyI1zLRr12QWv07_QhRQolOTbgRBXp3F6HEN7We0eDW6zG2GPJ83-_vNA0TVhCr2cIyo6N2FrOtQRLJZTpOwZfXiUwW3s4SrH7VH3cuxISX8xMMcENgISByWP9fhO54q1qBK", title: "Delicious Food Spread" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrmFfwGPxAp9jnbB09yivi8hvxFf6ZSd6YC2Dx8WOtvM5P_8_dR7b-ATBUynpkwsj_whZF_CI1XffeptIJl0ls0Sss3NrpXTbPLLECGVTnpDVgh7ZKMQoNYbzvblpKzOESXWNM8rUCbaVh162TsKfHh-5g1-XUODaGKtGcBT51equQLXwCybg2guJNrLdHZ9vwpXuJX1fcP6QZKvV7WlB4c04s8G-0PLx9fSPD_v8bvIwyv1zPVkKYxNqsP50cy_pkgQ-hl1z334z-", title: "Warm Dining Ambiance" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVTseIN4F3ufHXZ8DmuoM8H_uB3vX9y-hRZazezYarzDIIP9rp3K3Arp83W89XxMmGjzzfAZEHO5y7P3Gn27q1snv34DL3jjSzTUqYkTbdGvUCND4j6X4TF_IcfBKICGz7QJLTp9NT_rBWQLddnLRb8VTPm49BqFTinroVHMHz3LhYRxXejExeX6tem05oi5mzbnJIxcI2oMJKNm7ZZcDhAE4dDGvJXzVAVN6m2B-GN7W5CZDoKJTr5I9Y3gb8v0wpEsF7HHAKHovD", title: "Chef Preparing Signature Dishes" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY2hyUuQR33tzpHnIcC42LTKmi_6OqtW6C0VvvR3pgvL6duFEAMr_dzU6RPdBWjUEXkAXY13ByeClYzC99pKV43y8a-x00GcHbRV03pWsvqfg0rdrquGk243qJBQGIhDyUFLLmikTbFUapjE_DMVkdAzBJRlhYwtMR2ZxiM2ubRI61WL8HeFSs_KLpCysMYK2xMZdIew2ZPmHDTcy1114XMSSnqjKrQeGcKzsKeoesZ1aj8bYK2RTo0-n9MlIksaGp6zrvgOx7C82i", title: "Special Event Setup" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk_zxz1FLBRXeGr7a0_T3giLF2mcVrbIfQyD8KSwhEqjL7AG8WHm_ms583h3P3w1IXOMMqCYF4H_mATJuGdmTehpE0poaPgYt6qJIgpI25kXcvpR_HbFQ4mXsT4Oki4657uGImTB_pBRGqBh5b-VVHh7tGShVY6AIEpbbs2bfLzk914XBHqRnct2TIpGtJCJyWPjHViNvFJtUZNQky3jjWxUqsIDV8WNsI1aEYJzKKgB2GbeEuhRfhAtAUCz1xIUpXNyiVzRauI5Gk", title: "Special Gourmet Platter" }
];

const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
let currentLightboxIndex = 0;

function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightboxContent();
    if (lightboxModal) lightboxModal.classList.remove('hidden');
}

function closeLightbox() {
    if (lightboxModal) lightboxModal.classList.add('hidden');
}

function changeLightboxImage(direction) {
    currentLightboxIndex = (currentLightboxIndex + direction + galleryData.length) % galleryData.length;
    updateLightboxContent();
}

function updateLightboxContent() {
    const item = galleryData[currentLightboxIndex];
    if (lightboxImage && item) {
        lightboxImage.src = item.src;
        lightboxCaption.textContent = `${item.title} (${currentLightboxIndex + 1} of ${galleryData.length})`;
    }
}

// Navbar Glassmorphism Transformation on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    if (window.scrollY >= 70) {
        navbar.classList.add('glass-nav-scrolled');
    } else {
        navbar.classList.remove('glass-nav-scrolled');
    }
});

// Initialize on DOMReady
initTheme();

const preloaderTimer = setTimeout(hidePreloader, 1200);
window.addEventListener('load', () => {
    clearTimeout(preloaderTimer);
    hidePreloader();
});

document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderMenuDishes();
});
