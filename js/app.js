/**
 * ARROGANT — 1:1 Bedouin's Daughter
 * GSAP 3.12.7 + ScrollTrigger + CustomEase
 * Sin Barba (BD usa navegación nativa), sin Lenis (BD usa scroll nativo)
 * Todos los valores [C] del teardown de bedouins-daughter
 */

const { gsap, ScrollTrigger, CustomEase } = window;
gsap.registerPlugin(ScrollTrigger, CustomEase);

// ── CATÁLOGO DE PRODUCTOS ────────────────────────────────

const PRODUCTS = {
  'ring-01': {
    name:        'ARROGANT RING I',
    subtitle:    'Sterling Silver — Ring',
    code:        'ARG-R01',
    price:       '$280',
    priceNum:    280,
    category:    'RINGS',
    scarcity:    'Hand-formed · Limited pieces',
    description: '<p>Ring I is a 6mm wide band, hand-formed in 925 sterling silver. Brushed matte finish — oxidizes naturally over time and wears differently in every light.</p><p>Nothing mass-produced. Each piece carries minor variations in surface that are characteristic, not defects.</p>',
    details:     '925 sterling silver. 6mm wide band. Brushed matte finish. Hand-formed — minor surface variations between pieces. Clean with warm water and a soft cloth. Avoid chlorine and harsh chemicals.',
    sizing:      'Sizing runs true. If between sizes, order up one. Measure your finger at the widest point. S=5, M=7, L=9.',
    shipping:    'Ships within 3–5 business days. Free shipping on orders over $300. Returns accepted within 14 days — unworn, in original packaging with tag attached.',
    sizes:       ['5', '6', '7', '8', '9'],
    img:         'https://picsum.photos/seed/arrogant-ring/600/800',
    imgs:        ['https://picsum.photos/seed/arrogant-ring/600/800', 'https://picsum.photos/seed/arrogant-ring2/600/800', 'https://picsum.photos/seed/arrogant-ring3/600/800'],
  },
  'chain-01': {
    name:        'ARROGANT CHAIN I',
    subtitle:    'Sterling Silver — Necklace',
    code:        'ARG-C01',
    price:       '$320',
    priceNum:    320,
    category:    'NECKLACES',
    scarcity:    'Hand-formed · Limited pieces',
    description: '<p>Chain I is 60cm of rolo chain in 925 sterling silver. Heavy gauge, 3.5mm links — designed to be seen and felt against the skin.</p><p>Wears alone or layered over Ring I. The weight is intentional.</p>',
    details:     '925 sterling silver. Rolo chain, 3.5mm links, 60cm length. Heavy gauge. Lobster claw clasp. Clean with warm water and a soft cloth. Avoid chlorine and harsh chemicals.',
    sizing:      'One size — 60cm length (23.6 inches). Lays at collarbone to upper chest depending on frame.',
    shipping:    'Ships within 3–5 business days. Free shipping on orders over $300. Returns accepted within 14 days — unworn, in original packaging with tag attached.',
    sizes:       ['ONE SIZE'],
    img:         'https://picsum.photos/seed/arrogant-chain/600/800',
    imgs:        ['https://picsum.photos/seed/arrogant-chain/600/800', 'https://picsum.photos/seed/arrogant-chain2/600/800'],
  },
  'cuff-01': {
    name:        'ARROGANT CUFF I',
    subtitle:    'Sterling Silver — Cuff',
    code:        'ARG-CF01',
    price:       '$350',
    priceNum:    350,
    category:    'CUFFS',
    scarcity:    'Cold-forged · Limited pieces',
    description: '<p>Cuff I is a rigid open cuff, cold-forged in 925 sterling silver. 18mm wide. Slightly textured on the interior for grip — no two are identical. This is the point.</p><p>Cold-forging preserves the crystalline structure of the silver. It is harder, heavier, and more permanent than cast silver.</p>',
    details:     '925 sterling silver. Cold-forged open cuff, 18mm wide. Textured interior. Surface variations are characteristic of cold-forging, not defects. Clean with warm water and a soft cloth.',
    sizing:      'Comes in XS / S / M / L. Measure your wrist circumference: XS = 13–14cm, S = 14–15cm, M = 16–17cm, L = 18–19cm. Cuffs can be gently adjusted ±3mm.',
    shipping:    'Ships within 3–5 business days. Free shipping on orders over $300. Returns accepted within 14 days — unworn, in original packaging with tag attached.',
    sizes:       ['XS', 'S', 'M', 'L'],
    img:         'https://picsum.photos/seed/arrogant-cuff/600/800',
    imgs:        ['https://picsum.photos/seed/arrogant-cuff/600/800', 'https://picsum.photos/seed/arrogant-cuff2/600/800'],
  },
};

// ── CART (localStorage) ──────────────────────────────────

const CART_KEY  = 'arrogant-cart';
const FREE_SHIP = 300;

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(i => i.id === item.id && i.size === item.size);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...item, qty: 1, uid: Date.now() });
  }
  saveCart(cart);
}

function removeFromCart(uid) {
  saveCart(getCart().filter(i => i.uid !== uid));
}

function updateCartQty(uid, delta) {
  const cart = getCart();
  const item = cart.find(i => i.uid === uid);
  if (!item) return;
  item.qty = Math.max(1, (item.qty || 1) + delta);
  saveCart(cart);
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.priceNum * (i.qty || 1), 0);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + (i.qty || 1), 0);
}

// ── CART UI ──────────────────────────────────────────────

function openCartDrawer() {
  document.getElementById('cart-drawer')?.classList.add('is-open');
  document.getElementById('cart-overlay')?.classList.add('is-visible');
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
}

function closeCartDrawer() {
  document.getElementById('cart-drawer')?.classList.remove('is-open');
  document.getElementById('cart-overlay')?.classList.remove('is-visible');
  document.body.style.overflow = '';
}

function updateCartCount() {
  const count = getCartCount();
  document.querySelectorAll('.nav-bag-count').forEach(el => {
    el.textContent = count > 0 ? `(${count})` : '';
  });
}

function renderCartDrawer() {
  const cart     = getCart();
  const itemsEl  = document.getElementById('cart-items');
  const upsellEl = document.getElementById('cart-upsell');
  const totalEl  = document.getElementById('cart-total-price');
  const fillEl   = document.getElementById('cart-shipping-fill');
  const textEl   = document.getElementById('cart-shipping-text');
  const countEl  = document.getElementById('cart-drawer-count');

  if (!itemsEl) return;

  // Header count
  if (countEl) countEl.textContent = getCartCount();

  // Items
  if (!cart.length) {
    itemsEl.innerHTML = `
      <div class="cart-empty-state">
        <p>Your bag is empty.</p>
        <a href="collections.html">DISCOVER THE COLLECTION</a>
      </div>`;
  } else {
    itemsEl.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">${item.subtitle || ''} — ${item.size}</div>
          <div class="cart-item-price">${item.price}</div>
          <div class="cart-item-actions">
            <div class="cart-qty-wrap">
              <button class="cart-qty-btn" data-uid="${item.uid}" data-delta="-1">−</button>
              <span class="cart-qty-val">${item.qty}</span>
              <button class="cart-qty-btn" data-uid="${item.uid}" data-delta="1">+</button>
            </div>
            <span class="cart-item-remove" data-uid="${item.uid}">Remove</span>
          </div>
        </div>
      </div>`).join('');

    // Bind qty + remove
    itemsEl.querySelectorAll('.cart-qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        updateCartQty(parseInt(btn.dataset.uid), parseInt(btn.dataset.delta));
        renderCartDrawer();
        updateCartCount();
      });
    });
    itemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        removeFromCart(parseInt(btn.dataset.uid));
        renderCartDrawer();
        updateCartCount();
      });
    });
  }

  // Total + checkout button
  const total = getCartTotal();
  if (totalEl) totalEl.textContent = `$${total.toLocaleString()}`;

  // Free shipping bar [C — BD threshold dinámico]
  if (fillEl && textEl) {
    const pct = Math.min(100, (total / FREE_SHIP) * 100);
    fillEl.style.width = `${pct}%`;
    if (total >= FREE_SHIP) {
      textEl.textContent = 'You qualify for free shipping ✓';
    } else {
      const remaining = FREE_SHIP - total;
      textEl.textContent = `Spend $${remaining} more for free shipping`;
    }
  }

  // Upsell: piezas no en el carrito [C — BD "don't miss out on these"]
  if (upsellEl) {
    const inCart = cart.map(i => i.id);
    const picks  = Object.keys(PRODUCTS).filter(k => !inCart.includes(k)).slice(0, 2);
    if (!picks.length) {
      upsellEl.style.display = 'none';
    } else {
      upsellEl.style.display = '';
      upsellEl.querySelector('.cart-upsell-grid').innerHTML = picks.map(pid => {
        const p = PRODUCTS[pid];
        return `
          <div class="cart-upsell-item">
            <div class="cart-upsell-img">
              <img src="${p.img}" alt="${p.name}" loading="lazy">
            </div>
            <div>
              <div class="cart-upsell-name">${p.name}</div>
              <div class="cart-upsell-price">${p.price}</div>
            </div>
            <button class="cart-upsell-add" data-pid="${pid}">ADD</button>
          </div>`;
      }).join('');

      upsellEl.querySelectorAll('.cart-upsell-add').forEach(btn => {
        btn.addEventListener('click', () => {
          const p = PRODUCTS[btn.dataset.pid];
          if (!p) return;
          addToCart({
            id: btn.dataset.pid,
            name: p.name,
            subtitle: p.subtitle,
            price: p.price,
            priceNum: p.priceNum,
            img: p.img,
            size: p.sizes[0],
          });
          renderCartDrawer();
          updateCartCount();
        });
      });
    }
  }
}

// ── POPULATE PRODUCT PAGE ────────────────────────────────

function populateProduct() {
  if (!document.querySelector('.pdp-wrap')) return;

  const id = new URLSearchParams(window.location.search).get('id') || 'ring-01';
  const p  = PRODUCTS[id];
  if (!p) return;

  // Title de la pestaña
  document.title = `${p.name} — ARROGANT`;

  // Imagen principal
  const mainImg = document.getElementById('pdp-main-img');
  if (mainImg) { mainImg.src = p.img; mainImg.alt = p.name; }

  // Thumbnails
  const thumbsEl = document.getElementById('pdp-thumbs');
  if (thumbsEl) {
    thumbsEl.innerHTML = p.imgs.map((src, i) => `
      <div class="pdp-thumb ${i === 0 ? 'is-active' : ''}" data-img="${src}">
        <img src="${src}" alt="${p.name}" loading="lazy">
      </div>`).join('');
  }

  // Info
  const set = (sel, val, prop = 'textContent') => {
    const el = document.querySelector(sel);
    if (el) el[prop] = val;
  };

  set('.pdp-title', p.name);
  set('.pdp-code', p.code);
  set('.pdp-price', p.price);
  set('.pdp-scarcity', p.scarcity);
  set('.pdp-description', p.description, 'innerHTML');

  // Breadcrumb categoría
  const breadLast = document.querySelector('.pdp-breadcrumb-cat');
  if (breadLast) breadLast.textContent = p.category;

  // ATC data
  const atcBtn = document.getElementById('pdp-atc');
  if (atcBtn) {
    atcBtn.dataset.id        = id;
    atcBtn.dataset.priceNum  = p.priceNum;
    // Texto: "ADD TO BAG — $280" [C — BD precio integrado en CTA]
    const textEl = atcBtn.querySelector('.pdp-atc-text');
    if (textEl) textEl.textContent = `ADD TO BAG — ${p.price}`;
  }

  // Accordions
  const setAcc = (n, val) => {
    const body = document.querySelector(`.pdp-accordion:nth-child(${n}) .pdp-accordion-body`);
    if (body) body.innerHTML = `<p>${val}</p>`;
  };
  setAcc(1, p.details);
  setAcc(2, p.sizing);
  setAcc(3, p.shipping);

  // Size buttons
  const sizesEl = document.getElementById('pdp-sizes');
  if (sizesEl) {
    sizesEl.innerHTML = p.sizes.map(s =>
      `<button class="pdp-size-btn" data-size="${s}">${s}</button>`
    ).join('');
    // Auto-seleccionar si solo hay una talla
    if (p.sizes.length === 1) {
      sizesEl.querySelector('.pdp-size-btn')?.classList.add('is-selected');
    }
  }

  // Related: las otras 2 piezas
  const relGrid = document.querySelector('.discover-grid');
  if (relGrid) {
    const others = Object.keys(PRODUCTS).filter(k => k !== id).slice(0, 2);
    relGrid.innerHTML = others.map(rid => {
      const rp = PRODUCTS[rid];
      return `
        <a href="product.html?id=${rid}" class="product-card" data-reveal>
          <div class="product-card-img">
            <img src="${rp.img}" alt="${rp.name}" loading="lazy">
          </div>
          <div class="product-card-info">
            <div class="product-card-name">${rp.name}</div>
            <div class="product-card-sub">${rp.subtitle}</div>
            <div class="product-card-price">${rp.price}</div>
          </div>
        </a>`;
    }).join('');
    initScrollReveals(); // rebind reveals para los nuevos elementos
  }
}

// ── PDP: SIZE + ATC [C — BD] ─────────────────────────────

function initPDP() {
  if (!document.querySelector('.pdp-wrap')) return;

  let selectedSize = null;
  const id = new URLSearchParams(window.location.search).get('id') || 'ring-01';
  const p  = PRODUCTS[id];

  // Size selector
  document.addEventListener('click', e => {
    const btn = e.target.closest('.pdp-size-btn');
    if (!btn) return;
    document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('is-selected'));
    btn.classList.add('is-selected');
    selectedSize = btn.dataset.size;
    document.getElementById('pdp-size-error')?.classList.remove('is-visible');
  });

  // Gallery thumb click [C — BD cross-fade 0.2s]
  document.addEventListener('click', e => {
    const thumb = e.target.closest('.pdp-thumb');
    if (!thumb) return;
    const mainImg = document.getElementById('pdp-main-img');
    if (!mainImg) return;
    const src = thumb.dataset.img;

    gsap.to(mainImg, {
      opacity: 0,
      duration: 0.15,
      ease: 'power2.in',
      onComplete() {
        mainImg.src = src;
        gsap.to(mainImg, { opacity: 1, duration: 0.25, ease: 'power2.out' });
      }
    });

    document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('is-active'));
    thumb.classList.add('is-active');
  });

  // ATC button [C — BD press scale + text swap]
  const atcBtn  = document.getElementById('pdp-atc');
  const atcText = atcBtn?.querySelector('.pdp-atc-text');
  const atcAdded = atcBtn?.querySelector('.pdp-atc-added');

  if (atcBtn) {
    atcBtn.addEventListener('click', () => {
      // Auto-select si hay solo 1 talla
      if (!selectedSize) {
        const onlyBtn = document.querySelector('.pdp-size-btn');
        if (onlyBtn && document.querySelectorAll('.pdp-size-btn').length === 1) {
          onlyBtn.classList.add('is-selected');
          selectedSize = onlyBtn.dataset.size;
        }
      }

      if (!selectedSize) {
        // Shake [C — BD] + mostrar error
        gsap.to(atcBtn, {
          x: 7, duration: 0.07, ease: 'power1.inOut',
          yoyo: true, repeat: 5,
          onComplete: () => gsap.set(atcBtn, { x: 0 })
        });
        document.getElementById('pdp-size-error')?.classList.add('is-visible');
        return;
      }

      // Animation: scale press + text swap [C — BD]
      const tl = gsap.timeline();
      tl.to(atcBtn, { scaleX: 0.98, scaleY: 0.96, duration: 0.1, ease: 'power2.in', delay: 0.05 })
        .to(atcText,  { opacity: 0, duration: 0.12 }, '<')
        .to(atcBtn,   { scaleX: 1, scaleY: 1, duration: 0.4, ease: 'expo.out' })
        .to(atcAdded, { opacity: 1, duration: 0.2 }, '<0.1')
        .to(atcAdded, { opacity: 0, duration: 0.2 }, '+=1.2')
        .to(atcText,  { opacity: 1, duration: 0.2 }, '<');

      // Agregar al carrito
      if (p) {
        addToCart({
          id, name: p.name, subtitle: p.subtitle,
          price: p.price, priceNum: p.priceNum,
          img: p.img, size: selectedSize,
        });
      }

      updateCartCount();

      // Abrir drawer después de 0.8s [C — BD patrón]
      setTimeout(() => { openCartDrawer(); }, 800);
    });
  }

  // Accordions [C — BD toggle]
  document.querySelectorAll('.pdp-accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const acc = trigger.closest('.pdp-accordion');
      const isOpen = acc.classList.contains('is-open');
      document.querySelectorAll('.pdp-accordion').forEach(a => a.classList.remove('is-open'));
      if (!isOpen) acc.classList.add('is-open');
    });
  });
}

// ── QUICK ADD (desde collection cards) ───────────────────

function initQuickAdd() {
  document.querySelectorAll('.btn-quick-add').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const pid = btn.dataset.pid;
      const p   = PRODUCTS[pid];
      if (!p) return;

      // Añadir con primera talla (o ONE SIZE)
      addToCart({
        id: pid, name: p.name, subtitle: p.subtitle,
        price: p.price, priceNum: p.priceNum,
        img: p.img, size: p.sizes[0],
      });

      // Animation feedback [C — scale pulse]
      gsap.to(btn, {
        scale: 0.96, duration: 0.1, ease: 'power2.in',
        onComplete() {
          gsap.to(btn, { scale: 1, duration: 0.3, ease: 'expo.out' });
        }
      });

      updateCartCount();
      openCartDrawer();
    });
  });
}

// ── HERO PARALLAX [C — BD scrub:2.5 ease:"none"] ─────────

function initHeroParallax() {
  const hero = document.querySelector('.hero');
  const img  = hero?.querySelector('.hero-img-wrap img');
  if (!hero || !img) return;

  gsap.fromTo(img,
    { yPercent: 0 },
    {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start:   'top center',
        end:     'bottom top+=30',
        scrub:   2.5,
      }
    }
  );
}

// ── SCROLL REVEALS [C — BD 0.5s fade+translateY] ─────────

function initScrollReveals() {
  document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start:   'top 88%',
      onEnter: () => el.classList.add('is-visible'),
      once:    true,
    });
  });
}

// ── NAV TRANSPARENCY ─────────────────────────────────────

function initNavTheme() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 80);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ── GLOBAL INIT ───────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // Cart overlay click to close
  document.getElementById('cart-overlay')?.addEventListener('click', closeCartDrawer);

  // Cart close button (X) + "Continue shopping" buttons
  document.getElementById('cart-close')?.addEventListener('click', closeCartDrawer);
  document.querySelectorAll('[data-close-cart]').forEach(el => {
    el.addEventListener('click', closeCartDrawer);
  });

  // BAG link abre drawer (no navega) — solo en páginas que NO son cart
  document.querySelectorAll('[data-open-cart]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  // Init modules
  updateCartCount();
  populateProduct();
  initPDP();
  initQuickAdd();
  initNavTheme();
  initHeroParallax();
  initScrollReveals();
});
