/* ==========================================================================
   الآغا — App Logic (Modern Redesign 2025)
   ========================================================================== */

// 1. DATASET: PREMIUM FOOD MENU ITEMS (DEFAULT FALLBACKS)
const DEFAULT_MENU_ITEMS = [
  // --- SHAWARMA CATEGORY ---
  {
    id: 'sh-1',
    cat: 'shawarma',
    name: 'سندويش شاورما سوبر',
    desc: 'شاورما دجاج متبلة محشوة في خبز الصاج مع كريم الثوم والمخلل اللذيذ.',
    price: 28000,
    img: 'https://images.unsplash.com/photo-1642683215881-c111c13d7065?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sh-2',
    cat: 'shawarma',
    name: 'سندويش شاورما دبل',
    desc: 'شاورما دجاج بكمية مضاعفة مع كريم الثوم ومخلل وبطاطا مقمرة.',
    price: 35000,
    img: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sh-3',
    cat: 'shawarma',
    name: 'وجبة شاورما عربي فرط',
    desc: 'شاورما دجاج مفرودة مع بطاطا مقلية وكريم ثوم ومخلل وخبز صاج.',
    price: 48000,
    img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sh-4',
    cat: 'shawarma',
    name: 'وجبة شاورما عربي دبل',
    desc: 'قطعتان كبيرتان من خبز الصاج المحشو بالشاورما المقطعة، تقدم مع بطاطا وكريم ثوم ومخلل.',
    price: 75000,
    img: 'https://images.unsplash.com/photo-1642683215881-c111c13d7065?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sh-5',
    cat: 'shawarma',
    name: 'ماريا دجاج بالجبنة',
    desc: 'خبز صاج محشو بشاورما دجاج وجبنة القشقوان الغنية، مشوية على الفحم.',
    price: 42000,
    img: 'https://images.unsplash.com/photo-1606728035253-49e196302c43?auto=format&fit=crop&w=600&q=80'
  },

  // --- BROASTED CATEGORY ---
  {
    id: 'br-1',
    cat: 'broasted',
    name: 'وجبة فروج بروستد كامل',
    desc: 'فروج كامل (4 قطع) بروستد مقرمش بتتبيلة الآغا السرية مع بطاطا، كريم ثوم ومخلل وخبز.',
    price: 140000,
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'br-2',
    cat: 'broasted',
    name: 'وجبة نصف فروج بروستد',
    desc: 'نصف فروج (قطعتان) بروستد ذهبي مقرمش مع بطاطا مقلية وكريم ثوم ومخلل وخبز.',
    price: 75000,
    img: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'br-3',
    cat: 'broasted',
    name: 'وجبة بروستد حار إكسترا',
    desc: 'فروج كامل بروستد بتتبيلة حارة جداً ومقرمشة مع بطاطا ومخلل وكريم ثوم حار.',
    price: 145000,
    img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80'
  },

  // --- GRILLED CATEGORY ---
  {
    id: 'gr-1',
    cat: 'grilled',
    name: 'فروج مشوي على الفحم كامل',
    desc: 'فروج كامل مشوي ببطء على الفحم بتتبيلة بهارات الآغا مع كريم ثوم وبطاطا ومخلل.',
    price: 130000,
    img: 'https://images.unsplash.com/photo-1598515214211-89d3e73ae83b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gr-2',
    cat: 'grilled',
    name: 'فروج مسحب مشوي',
    desc: 'فروج كامل مسحب من العظم مشوي على الفحم على الطريقة التركية بصوص حار خفيف.',
    price: 135000,
    img: 'https://images.unsplash.com/photo-1606728035253-49e196302c43?auto=format&fit=crop&w=600&q=80'
  },

  // --- WESTERN CATEGORY ---
  {
    id: 'we-1',
    cat: 'western',
    name: 'سندويش زنجر دجاج',
    desc: 'صدر دجاج كريسبي حار مع خس ومخلل وجبنة شيدر وصوص زنجر حار في خبز صمون.',
    price: 38000,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'we-2',
    cat: 'western',
    name: 'سندويش كريسبي دجاج',
    desc: 'أصابع دجاج مقرمشة غير حارة مع مايونيز وخس وجبنة شيدر في خبز صمون طازج.',
    price: 36000,
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'we-3',
    cat: 'western',
    name: 'سندويش شيش طاووق',
    desc: 'قطع دجاج مشوية متبلة بالزبادي والليمون مع كريم ثوم ومخلل وبطاطا مقلية.',
    price: 34000,
    img: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'we-4',
    cat: 'western',
    name: 'وجبة كريسبي عائلية',
    desc: '5 قطع دجاج كريسبي مقرمش مع بطاطا وسلطة كولسلو وكريم ثوم ومخلل.',
    price: 120000,
    img: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80'
  },

  // --- SIDES CATEGORY ---
  {
    id: 'si-1',
    cat: 'sides',
    name: 'صحن بطاطا مقلية',
    desc: 'بطاطا ذهبية مقرمشة ببهارات الآغا الخاصة مع صوص كاتشب.',
    price: 15000,
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'si-2',
    cat: 'sides',
    name: 'سلطة كولسلو',
    desc: 'سلطة ملفوف وجزر مبشور بصوص المايونيز المنعش والمحضر في مطبخنا.',
    price: 10000,
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'si-3',
    cat: 'sides',
    name: 'عبوة كريم ثوم إضافي',
    desc: 'ثوم بلدي كريمي محضر يومياً بخلطة الآغا السرية المتميزة.',
    price: 6000,
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'si-4',
    cat: 'sides',
    name: 'مشروب غازي عبوة معدنية',
    desc: 'كوكا كولا، سبرايت، أو فانتا باردة جداً.',
    price: 8000,
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'si-5',
    cat: 'sides',
    name: 'مياه معدنية صغيرة',
    desc: 'مياه معدنية طبيعية باردة ومنعشة.',
    price: 4000,
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
  }
];

let MENU_ITEMS = [];
const cachedMenu = localStorage.getItem('alagha_menu_items');
if (cachedMenu === null) {
  MENU_ITEMS = DEFAULT_MENU_ITEMS;
  try {
    localStorage.setItem('alagha_menu_items', JSON.stringify(DEFAULT_MENU_ITEMS));
  } catch (e) {}
} else {
  try {
    MENU_ITEMS = JSON.parse(cachedMenu) || [];
  } catch (e) {
    MENU_ITEMS = [];
  }
}

const CAT_LABELS = {
  shawarma: 'شاورما',
  broasted: 'بروستد',
  grilled: 'مشويات',
  western: 'غربي',
  sides: 'إضافات ومشروبات'
};

// WhatsApp Target Phone Number config (Placeholder for demo)
const WA = '963900000000'; // استبدل هذا الرقم برقم المطعم الفعلي عند تسليم الموقع

let cart = [];
let currentCat = 'all';

// ── Init Page Elements ──
document.addEventListener('DOMContentLoaded', () => {
  try { 
    cart = JSON.parse(localStorage.getItem('agha_cart')) || []; 
  } catch(e) { 
    cart = []; 
  }
  
  initHeroCarousel();
  renderMenu();
  setupCats();
  setupNav();
  setupCart();
  initGalleryLightbox();
  updateCartUI();

  // المزامنة التلقائية مع Firebase Firestore في الخلفية
  if (typeof db !== 'undefined') {
    syncWithFirestore();
  }
});

// ── NAV Scroll & Burger ──
function setupNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
    highlightNavLinkOnScroll();
  });

  // Mobile burger menu toggling
  const burger = document.getElementById('burger');
  const mm = document.getElementById('mobileMenu');
  
  if (burger && mm) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mm.classList.toggle('open');
    });
    
    mm.querySelectorAll('.mm-link').forEach(l => {
      l.addEventListener('click', () => { 
        burger.classList.remove('open'); 
        mm.classList.remove('open'); 
      });
    });
  }
}

// Highlight Navigation Link on Scroll
function highlightNavLinkOnScroll() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  let currentSec = '';

  sections.forEach(sec => {
    const secTop = sec.offsetTop - 80;
    if (window.scrollY >= secTop) {
      currentSec = sec.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSec}`) {
      link.classList.add('active');
    }
  });
}

// ── AUTOMATED STORAGE MIGRATION (Clean up old cached broken image paths)
try {
  let heroStr = localStorage.getItem('alagha_hero_images');
  if (heroStr && (heroStr.includes('restaurant_4.jpg') || heroStr.includes('restaurant_5.jpg'))) {
    localStorage.removeItem('alagha_hero_images');
  }
  let galleryStr = localStorage.getItem('alagha_gallery_images');
  if (galleryStr && (galleryStr.includes('restaurant_4.jpg') || galleryStr.includes('restaurant_5.jpg'))) {
    localStorage.removeItem('alagha_gallery_images');
  }
} catch(e) {}

// ── HERO BACKGROUND SLIDESHOW ──
const DEFAULT_HERO_IMAGES = [
  'image/restaurant_3.jpg',
  'image/restaurant_6.jpg',
  'image/restaurant_7.jpg'
];

let heroImages = [];
const cachedHero = localStorage.getItem('alagha_hero_images');
if (cachedHero === null) {
  heroImages = DEFAULT_HERO_IMAGES;
  try {
    localStorage.setItem('alagha_hero_images', JSON.stringify(DEFAULT_HERO_IMAGES));
  } catch (e) {}
} else {
  try {
    heroImages = JSON.parse(cachedHero) || [];
  } catch (e) {
    heroImages = [];
  }
}

function initHeroCarousel() {
  const heroImg = document.getElementById('heroImg');
  if (!heroImg || heroImages.length === 0) return;

  heroImg.src = heroImages[0];

  if (heroImages.length <= 1) return;

  let index = 0;
  setInterval(() => {
    heroImg.classList.add('fade-out');
    setTimeout(() => {
      index = (index + 1) % heroImages.length;
      heroImg.src = heroImages[index];
      heroImg.classList.remove('fade-out');
    }, 500);
  }, 5500);
}

// ── Menu Render ──
function renderMenu(cat = 'all') {
  const grid = document.getElementById('foodGrid');
  if (!grid) return;

  const items = cat === 'all' ? MENU_ITEMS : MENU_ITEMS.filter(i => i.cat === cat);
  
  grid.innerHTML = items.map(item => `
    <div class="food-card" data-id="${item.id}">
      <div class="food-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy">
        <span class="food-badge">${CAT_LABELS[item.cat] || item.cat}</span>
      </div>
      <div class="food-body">
        <div class="food-name">${item.name}</div>
        <div class="food-desc">${item.desc}</div>
        <div class="food-bottom">
          <div class="food-price">${item.price.toLocaleString('en-US')} <span>ل.س</span></div>
          <div class="food-btns">
            <button class="btn-quick-wa" onclick="quickWa('${item.id}')" aria-label="طلب سريع عبر واتساب">
              طلب سريع ⚡
            </button>
            <button class="btn-add" onclick="addToCart('${item.id}')" aria-label="إضافة للسلة">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Category Filters Setup ──
function setupCats() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      renderMenu(currentCat);
    });
  });
}

// ── Cart Logic ──
function addToCart(id) {
  const item = MENU_ITEMS.find(i => i.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  
  if (existing) { 
    existing.qty++; 
  } else { 
    cart.push({ id, name: item.name, price: item.price, img: item.img, qty: 1 }); 
  }
  
  saveCart();
  updateCartUI();
  showToast(`تمت إضافة "${item.name}" لسلتك! 🛒`);
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  
  if (item.qty <= 0) {
    cart = cart.filter(c => c.id !== id);
  }
  
  saveCart();
  updateCartUI();
  renderCartItems();
}

function removeItem(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  try { 
    localStorage.setItem('agha_cart', JSON.stringify(cart)); 
  } catch(e) {}
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  const price = cart.reduce((s, c) => s + c.price * c.qty, 0);

  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');
  const stickyBar = document.getElementById('stickyBar');
  const stickyInfo = document.getElementById('stickyInfo');

  if (cartCount) cartCount.textContent = total;
  if (cartTotal) cartTotal.textContent = price.toLocaleString('en-US') + ' ل.س';

  if (stickyBar && stickyInfo) {
    stickyInfo.textContent = `${total} وجبات · ${price.toLocaleString('en-US')} ل.س`;
    stickyBar.classList.toggle('show', total > 0);
  }
}

function renderCartItems() {
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  if (!body) return;

  if (!cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        <p>سلتك فارغة حالياً</p>
      </div>
    `;
    if (foot) foot.style.display = 'none';
    return;
  }
  
  if (foot) foot.style.display = '';
  body.innerHTML = cart.map(c => `
    <div class="cart-item">
      <img class="ci-img" src="${c.img}" alt="${c.name}">
      <div class="ci-info">
        <div class="ci-name">${c.name}</div>
        <div class="ci-price">${(c.price * c.qty).toLocaleString('en-US')} ل.س</div>
      </div>
      <div class="ci-controls">
        <button class="ci-qty-btn" onclick="updateQty('${c.id}',-1)">−</button>
        <span class="ci-qty">${c.qty}</span>
        <button class="ci-qty-btn" onclick="updateQty('${c.id}',1)">+</button>
        <button class="ci-del" onclick="removeItem('${c.id}')" aria-label="حذف">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// ── Cart Drawer Actions Setup ──
function setupCart() {
  const side = document.getElementById('cartSide');
  const overlay = document.getElementById('cartOverlay');
  if (!side || !overlay) return;

  const openCart = () => { 
    renderCartItems(); 
    side.classList.add('open'); 
    overlay.classList.add('open'); 
    document.body.style.overflow = 'hidden'; 
  };
  
  const closeCart = () => { 
    side.classList.remove('open'); 
    overlay.classList.remove('open'); 
    document.body.style.overflow = ''; 
  };

  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('stickyOpen').addEventListener('click', openCart);

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    const nameInput = document.getElementById('custName');
    const addrInput = document.getElementById('custAddr');
    
    const name = nameInput.value.trim() || 'زبون';
    const addr = addrInput.value.trim() || 'استلام من الصالة';
    
    const totalQty = cart.reduce((s, c) => s + c.qty, 0);
    const totalPrice = cart.reduce((s, c) => s + c.price * c.qty, 0);
    
    // Clean invoice-style receipt format to prevent WhatsApp RTL scattering
    let msg = `*طلب جديد - مطعم الآغا*\n`;
    msg += `الاسم: ${name}\n`;
    msg += `العنوان: ${addr}\n`;
    msg += `---------------------------------\n`;
    
    cart.forEach((c, i) => { 
      msg += `${i+1}) ${c.name} [العدد: ${c.qty}] - ${(c.price * c.qty).toLocaleString('en-US')} ل.س\n`; 
    });
    
    msg += `---------------------------------\n`;
    msg += `إجمالي الوجبات: ${totalQty}\n`;
    msg += `الحساب الإجمالي: *${totalPrice.toLocaleString('en-US')} ل.س*\n\n`;
    msg += `يرجى تأكيد الطلب وتحديد وقت التوصيل/الاستلام.`;
    
    window.open(`https://api.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent(msg)}`, '_blank');
  });
}

// ── Quick WhatsApp Order (Orders a single item instantly) ──
function quickWa(id) {
  const item = MENU_ITEMS.find(i => i.id === id);
  if (!item) return;
  
  let msg = `*طلب سريع - مطعم الآغا*\n\n`;
  msg += `الطلب: ${item.name}\n`;
  msg += `السعر: ${item.price.toLocaleString('en-US')} ل.س\n\n`;
  msg += `يرجى تأكيد الطلب وتجهيزه.`;
  
  window.open(`https://api.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent(msg)}`, '_blank');
}

// ── Toast System ──
function showToast(msg) {
  const wrap = document.getElementById('toastWrap');
  if (!wrap) return;

  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="toast-emoji">🛒</span><span>${msg}</span>`;
  wrap.appendChild(t);
  
  setTimeout(() => {
    t.classList.add('out');
    t.addEventListener('animationend', () => t.remove(), { once: true });
  }, 2800);
}

// ── Real Gallery Lightbox & Dynamic Render ──
const DEFAULT_GALLERY_IMAGES = [
  { src: 'image/restaurant_1.jpg', caption: 'جلساتنا وصالاتنا العائلية الفاخرة' },
  { src: 'image/restaurant_2.jpg', caption: 'أجواء ممتازة وخدمة راقية للزبائن' },
  { src: 'image/restaurant_3.jpg', caption: 'سيخ الشاورما البلدي من الآغا' },
  { src: 'image/restaurant_6.jpg', caption: 'وجبات غربية وسندويشات بنكهات ممتازة' },
  { src: 'image/restaurant_7.jpg', caption: 'مشويات الآغا الفاخرة على الفحم' }
];

let galleryImages = [];
const cachedGallery = localStorage.getItem('alagha_gallery_images');
if (cachedGallery === null) {
  galleryImages = DEFAULT_GALLERY_IMAGES;
  try {
    localStorage.setItem('alagha_gallery_images', JSON.stringify(DEFAULT_GALLERY_IMAGES));
  } catch (e) {}
} else {
  try {
    galleryImages = JSON.parse(cachedGallery) || [];
  } catch (e) {
    galleryImages = [];
  }
}

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = galleryImages.map(item => `
    <div class="gallery-item">
      <img src="${item.src}" alt="صورة من المعرض" loading="lazy">
    </div>
  `).join('');
}

function initGalleryLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  
  if (!lightbox || !lightboxImg || !lightboxCaption || !closeBtn) return;

  renderGallery();

  // Open Lightbox (without captions)
  const bindLightboxItem = (item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
      lightboxCaption.innerHTML = ""; // إخفاء النص
      document.body.style.overflow = 'hidden'; // block page scroll
    });
  };

  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(bindLightboxItem);

  // Close Lightbox
  const closeLightbox = () => {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  };
  
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

// ── Firebase Firestore Syncing (Stale-While-Revalidate) ──
async function syncWithFirestore() {
  try {
    // 1. مزامنة وجبات قائمة الطعام
    const menuDoc = await db.collection('alagha_store').doc('menu').get();
    if (menuDoc.exists) {
      const remoteMenu = menuDoc.data().items;
      if (remoteMenu && Array.isArray(remoteMenu)) {
        MENU_ITEMS = remoteMenu;
        localStorage.setItem('alagha_menu_items', JSON.stringify(remoteMenu));
        renderMenu(currentCat);
      }
    }

    // 2. مزامنة صور الهيرو سيكشن
    const heroDoc = await db.collection('alagha_store').doc('hero').get();
    if (heroDoc.exists) {
      const remoteHero = heroDoc.data().images;
      if (remoteHero && Array.isArray(remoteHero)) {
        heroImages = remoteHero;
        localStorage.setItem('alagha_hero_images', JSON.stringify(remoteHero));
      }
    }

    // 3. مزامنة صور معرض الصور
    const galleryDoc = await db.collection('alagha_store').doc('gallery').get();
    if (galleryDoc.exists) {
      const remoteGallery = galleryDoc.data().images;
      if (remoteGallery && Array.isArray(remoteGallery)) {
        galleryImages = remoteGallery;
        localStorage.setItem('alagha_gallery_images', JSON.stringify(remoteGallery));
        renderGallery();
      }
    }
  } catch (error) {
    console.warn("Firebase sync failed, running in offline mode:", error);
  }
}
