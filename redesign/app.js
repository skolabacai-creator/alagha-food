/* =========================================================
   الآغا — App Logic
   ========================================================= */

const MENU_ITEMS = [
  { id:'sh-1', cat:'shawarma', name:'سندويش شاورما سوبر',     desc:'شاورما دجاج متبلة في خبز الصاج مع كريم الثوم والمخلل.',                            price:28000, img:'https://images.unsplash.com/photo-1642683215881-c111c13d7065?auto=format&fit=crop&w=600&q=80' },
  { id:'sh-2', cat:'shawarma', name:'سندويش شاورما دبل',       desc:'شاورما دجاج بكمية مضاعفة مع كريم الثوم ومخلل وبطاطا.',                              price:35000, img:'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=600&q=80' },
  { id:'sh-3', cat:'shawarma', name:'وجبة شاورما عربي فرط',    desc:'شاورما مفرودة مع بطاطا مقلية وكريم ثوم وخبز صاج.',                                  price:48000, img:'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80' },
  { id:'sh-4', cat:'shawarma', name:'وجبة شاورما عربي دبل',    desc:'قطعتان كبيرتان من خبز الصاج مع شاورما، بطاطا وكريم ثوم.',                           price:75000, img:'https://images.unsplash.com/photo-1642683215881-c111c13d7065?auto=format&fit=crop&w=600&q=80' },
  { id:'sh-5', cat:'shawarma', name:'ماريا دجاج بالجبنة',       desc:'خبز صاج محشو بشاورما وجبنة القشقوان الذائبة، مشوي على الفحم.',                      price:42000, img:'https://images.unsplash.com/photo-1606728035253-49e196302c43?auto=format&fit=crop&w=600&q=80' },
  { id:'br-1', cat:'broasted', name:'وجبة فروج بروستد كامل',   desc:'فروج كامل (4 قطع) بروستد ذهبي بتتبيلة الآغا مع بطاطا وخبز.',                       price:140000,img:'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80' },
  { id:'br-2', cat:'broasted', name:'وجبة نصف فروج بروستد',    desc:'نصف فروج (قطعتان) مقرمش مع بطاطا وكريم ثوم ومخلل وخبز.',                           price:75000, img:'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80' },
  { id:'br-3', cat:'broasted', name:'وجبة بروستد حار إكسترا',  desc:'فروج كامل بتتبيلة حارة جداً مع بطاطا ومخلل وكريم ثوم حار.',                       price:145000,img:'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80' },
  { id:'gr-1', cat:'grilled',  name:'فروج مشوي على الفحم كامل',desc:'فروج كامل ببهارات الآغا، مشوي ببطء على الفحم مع كريم ثوم وبطاطا.',                  price:130000,img:'https://images.unsplash.com/photo-1598515214211-89d3e73ae83b?auto=format&fit=crop&w=600&q=80' },
  { id:'gr-2', cat:'grilled',  name:'فروج مسحب مشوي',          desc:'فروج مخلى من العظم مشوي على الطريقة التركية بصوص حار خفيف.',                       price:135000,img:'https://images.unsplash.com/photo-1606728035253-49e196302c43?auto=format&fit=crop&w=600&q=80' },
  { id:'we-1', cat:'western',  name:'سندويش زنجر دجاج',        desc:'صدر دجاج مقرمش حار مع خس وجبنة شيدر وصوص الزنجر في خبز الصمون.',                   price:38000, img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80' },
  { id:'we-2', cat:'western',  name:'سندويش كريسبي دجاج',      desc:'أصابع دجاج مقرمشة غير حارة مع مايونيز وجبنة شيدر في صمون طازج.',                  price:36000, img:'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80' },
  { id:'we-3', cat:'western',  name:'سندويش شيش طاووق',        desc:'قطع دجاج مشوية بتتبيلة الزبادي والليمون مع كريم ثوم وبطاطا.',                      price:34000, img:'https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=600&q=80' },
  { id:'we-4', cat:'western',  name:'وجبة كريسبي عائلية',      desc:'5 قطع دجاج مقرمش مع بطاطا وسلطة كولسلو وكريم ثوم.',                                price:120000,img:'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=80' },
  { id:'si-1', cat:'sides',    name:'صحن بطاطا مقلية',          desc:'بطاطا ذهبية مقرمشة ببهارات الآغا الخاصة مع كاتشب.',                                price:15000, img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80' },
  { id:'si-2', cat:'sides',    name:'سلطة كولسلو',              desc:'سلطة ملفوف وجزر بصوص المايونيز المنعش.',                                            price:10000, img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80' },
  { id:'si-3', cat:'sides',    name:'عبوة كريم ثوم إضافي',      desc:'ثوم بلدي كريمي محضر على طريقة الآغا الخاصة.',                                     price:6000,  img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80' },
  { id:'si-4', cat:'sides',    name:'مشروب غازي',               desc:'كوكا كولا، سبرايت، أو فانتا باردة.',                                                price:8000,  img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80' },
  { id:'si-5', cat:'sides',    name:'مياه معدنية',              desc:'مياه معدنية طبيعية باردة.',                                                         price:4000,  img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80' },
];

const CAT_LABELS = { shawarma:'شاورما', broasted:'بروستد', grilled:'مشويات', western:'غربي', sides:'إضافات' };
const WA = '963900000000';
let cart = [];
let currentCat = 'all';

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  try { cart = JSON.parse(localStorage.getItem('agha_cart')) || []; } catch(e) { cart = []; }
  renderMenu();
  setupCats();
  setupNav();
  setupCart();
  updateCartUI();
});

// ── NAV scroll ──
function setupNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // mobile burger
  const burger = document.getElementById('burger');
  const mm = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mm.classList.toggle('open');
  });
  mm.querySelectorAll('.mm-link').forEach(l => {
    l.addEventListener('click', () => { burger.classList.remove('open'); mm.classList.remove('open'); });
  });
}

// ── Menu Render ──
function renderMenu(cat = 'all') {
  const grid = document.getElementById('foodGrid');
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
            <button class="btn-quick-wa" onclick="quickWa('${item.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              طلب
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

// ── Category filters ──
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
  if (existing) { existing.qty++; }
  else { cart.push({ id, name: item.name, price: item.price, img: item.img, qty: 1 }); }
  saveCart();
  updateCartUI();
  showToast(`✓ تمت إضافة ${item.name}`);
}

function updateQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
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
  try { localStorage.setItem('agha_cart', JSON.stringify(cart)); } catch(e) {}
}

function updateCartUI() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  const price = cart.reduce((s, c) => s + c.price * c.qty, 0);

  document.getElementById('cartCount').textContent = total;
  document.getElementById('cartTotal').textContent = price.toLocaleString('en-US') + ' ل.س';

  const sticky = document.getElementById('stickyBar');
  document.getElementById('stickyInfo').textContent = `${total} وجبات · ${price.toLocaleString('en-US')} ل.س`;
  sticky.classList.toggle('show', total > 0);
}

function renderCartItems() {
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      <p>سلتك فارغة</p></div>`;
    foot.style.display = 'none';
    return;
  }
  foot.style.display = '';
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
        <button class="ci-del" onclick="removeItem('${c.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// ── Cart open/close ──
function setupCart() {
  const side    = document.getElementById('cartSide');
  const overlay = document.getElementById('cartOverlay');
  const openCart = () => { renderCartItems(); side.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const closeCart= () => { side.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow = ''; };

  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('cartClose').addEventListener('click', closeCart);
  document.getElementById('cartOverlay').addEventListener('click', closeCart);
  document.getElementById('stickyOpen').addEventListener('click', openCart);

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    const name = document.getElementById('custName').value.trim() || 'زبون';
    const addr = document.getElementById('custAddr').value.trim() || 'استلام من الصالة';
    const totalQty   = cart.reduce((s,c)=>s+c.qty,0);
    const totalPrice = cart.reduce((s,c)=>s+c.price*c.qty,0);
    let msg = `*طلب جديد - مطعم الآغا*\nالاسم: ${name}\nالعنوان: ${addr}\n-------------------\n`;
    cart.forEach((c,i) => { msg += `${i+1}) ${c.name} [${c.qty}] = ${(c.price*c.qty).toLocaleString('en-US')} ل.س\n`; });
    msg += `-------------------\nالإجمالي: *${totalPrice.toLocaleString('en-US')} ل.س*`;
    window.open(`https://api.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent(msg)}`, '_blank');
  });
}

// ── Quick WA ──
function quickWa(id) {
  const item = MENU_ITEMS.find(i => i.id === id);
  if (!item) return;
  const msg = `*طلب سريع - مطعم الآغا*\n\nالطلب: ${item.name}\nالسعر: ${item.price.toLocaleString('en-US')} ل.س\n\nيرجى تأكيد الطلب.`;
  window.open(`https://api.whatsapp.com/send?phone=${WA}&text=${encodeURIComponent(msg)}`, '_blank');
}

// ── Toast ──
function showToast(msg) {
  const wrap = document.getElementById('toastWrap');
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="toast-emoji">🛒</span><span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(() => {
    t.classList.add('out');
    t.addEventListener('animationend', () => t.remove(), { once: true });
  }, 2800);
}
