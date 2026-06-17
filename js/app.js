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
  'ring-selene': {
    name:        'SELENE RING',
    subtitle:    'Sterling Silver — Ring',
    code:        'ARG-R00',
    price:       '$290',
    priceNum:    290,
    category:    'RINGS',
    scarcity:    'Hand-formed · Limited pieces',
    description: '<p>Selene is a flat crescent shield ring with a polished orb at its tip — named after the goddess of the moon. The hammered face catches light differently at every angle. The band is oxidized dark, deliberately.</p><p>925 sterling silver. Each piece is hand-formed. The surface is meant to age.</p>',
    details:     '925 sterling silver. Flat crescent moon shield motif with sphere orb detail. Hammered textured surface. Oxidized antiqued band. Hand-formed — minor surface variations between pieces. Clean with warm water and a soft cloth.',
    sizing:      'Sizing runs true. If between sizes, order up one. S=5, M=7, L=9.',
    shipping:    'Ships within 3–5 business days. Free shipping on orders over $300. Returns accepted within 14 days — unworn, in original packaging.',
    sizes:       ['5', '6', '7', '8', '9'],
    img:         'images/arrogant-ring-selene-nobg.png',
    imgs:        ['images/arrogant-ring-selene-nobg.png'],
  },
  'ring-luna': {
    name:        'LUNA RING',
    subtitle:    'Sterling Silver — Ring',
    code:        'ARG-R01',
    price:       '$280',
    priceNum:    280,
    category:    'RINGS',
    scarcity:    'Hand-formed · Limited pieces',
    description: '<p>Luna is a statement ring shaped around the crescent moon — a hammered silver arc with a polished orb at its center. Each piece bears the marks of the hammer that formed it.</p><p>925 sterling silver. Oxidized finish that deepens with time. Not a perfect object — a living one.</p>',
    details:     '925 sterling silver. Crescent moon motif with orb detail. Hammered surface. Oxidized antiqued patina. Hand-formed — minor surface variations between pieces. Clean with warm water and a soft cloth.',
    sizing:      'Sizing runs true. If between sizes, order up one. S=5, M=7, L=9.',
    shipping:    'Ships within 3–5 business days. Free shipping on orders over $300. Returns accepted within 14 days — unworn, in original packaging.',
    sizes:       ['5', '6', '7', '8', '9'],
    img:         'images/arrogant-ring-luna-nobg.png',
    imgs:        ['images/arrogant-ring-luna-nobg.png'],
  },
  'ring-sigil': {
    name:        'SIGIL RING',
    subtitle:    'Sterling Silver — Ring',
    code:        'ARG-R02',
    price:       '$320',
    priceNum:    320,
    category:    'RINGS',
    scarcity:    'Cold-forged · Limited pieces',
    description: '<p>Sigil is a wide-band ring built around two fractured heart halves — a brutalist interpretation of something soft. Cold-forged. Heavy. Intentionally imperfect.</p><p>The surface texture is not decorative. It is evidence of how the piece was made.</p>',
    details:     '925 sterling silver. Wide band with broken-heart sculptural motif. Cold-forged. Oxidized antiqued finish with deep patina. Surface variations are characteristic, not defects. Clean with warm water and a soft cloth.',
    sizing:      'Sizing runs slightly large due to the wide band. Order your true size. S=5, M=7, L=9.',
    shipping:    'Ships within 3–5 business days. Free shipping on orders over $300. Returns accepted within 14 days — unworn, in original packaging.',
    sizes:       ['5', '6', '7', '8', '9'],
    img:         'images/arrogant-ring-sigil-nobg.png',
    imgs:        ['images/arrogant-ring-sigil-nobg.png'],
  },
  'ring-oracle': {
    name:        'ORACLE RING',
    subtitle:    'Sterling Silver — Ring',
    code:        'ARG-R03',
    price:       '$350',
    priceNum:    350,
    category:    'RINGS',
    scarcity:    'Hand-set stone · Limited pieces',
    description: '<p>Oracle is an open-back adjustable ring set with a hand-selected oval citrine cabochon. The wide brushed band offsets the warmth of the stone — silver as architecture, stone as light.</p><p>One cabochon per ring. No two stones are identical.</p>',
    details:     '925 sterling silver. Open-back adjustable band. Oval citrine cabochon, hand-set in bezel. Brushed matte finish with oxidized edges. Adjusts ±2mm. Clean with warm water and a soft cloth — do not submerge.',
    sizing:      'Open-back design fits most fingers. One size adjusts to fit 5–9. Gently press band to adjust.',
    shipping:    'Ships within 3–5 business days. Free shipping on orders over $300. Returns accepted within 14 days — unworn, in original packaging.',
    sizes:       ['ONE SIZE'],
    img:         'images/arrogant-ring-oracle-nobg.png',
    imgs:        ['images/arrogant-ring-oracle-nobg.png'],
  },
  'earring-aura': {
    name:        'AURA HOOPS',
    subtitle:    'Sterling Silver — Earrings',
    code:        'ARG-E01',
    price:       '$240',
    priceNum:    240,
    category:    'EARRINGS',
    scarcity:    'Hand-formed · Limited pieces',
    description: '<p>Aura is a chunky hoop — thick, tubular, oxidized. Heavy enough to feel present without being loud. The kind of earring that works alone.</p><p>Sold as a pair. Post and butterfly back closure.</p>',
    details:     '925 sterling silver. Chunky tubular hoop, approximately 30mm diameter. Oxidized antiqued patina. Post and butterfly back closure. Hand-formed — minor surface variations. Clean with warm water and a soft cloth.',
    sizing:      'One size — 30mm diameter. Post closure fits standard piercings.',
    shipping:    'Ships within 3–5 business days. Free shipping on orders over $300. Returns accepted within 14 days — unworn, in original packaging.',
    sizes:       ['ONE SIZE'],
    img:         'images/arrogant-earring-aura-nobg.png',
    imgs:        ['images/arrogant-earring-aura-nobg.png'],
  },
  'earring-cascade': {
    name:        'CASCADE DROPS',
    subtitle:    'Sterling Silver — Earrings',
    code:        'ARG-E02',
    price:       '$260',
    priceNum:    260,
    category:    'EARRINGS',
    scarcity:    'Hand-formed · Limited pieces',
    description: '<p>Cascade is a long open-drop earring with a hammered interior and polished edge. The negative space is part of the design — the shadow inside the form is as intentional as the form itself.</p><p>Sold as a pair. Post closure.</p>',
    details:     '925 sterling silver. Open teardrop form, approximately 50mm length. Hammered interior, polished edge. Oxidized antiqued finish. Post closure. Hand-formed — minor surface variations. Clean with warm water and a soft cloth.',
    sizing:      'One size — approximately 50mm length. Post closure fits standard piercings.',
    shipping:    'Ships within 3–5 business days. Free shipping on orders over $300. Returns accepted within 14 days — unworn, in original packaging.',
    sizes:       ['ONE SIZE'],
    img:         'images/arrogant-earring-cascade-nobg.png',
    imgs:        ['images/arrogant-earring-cascade-nobg.png'],
  },
  'earring-void': {
    name:        'VOID STUDS',
    subtitle:    'Sterling Silver — Earrings',
    code:        'ARG-E03',
    price:       '$280',
    priceNum:    280,
    category:    'EARRINGS',
    scarcity:    'Cold-forged · Limited pieces',
    description: '<p>Void is a geometric stud — a cold-forged faceted form in oxidized silver. Architectural rather than decorative. The kind of piece that changes how a face reads in light.</p><p>Sold as a pair. Post and butterfly closure.</p>',
    details:     '925 sterling silver. Faceted geometric form. Cold-forged. Oxidized antiqued finish. Post and butterfly closure. Hand-finished — minor surface variations. Clean with warm water and a soft cloth.',
    sizing:      'One size — approximately 18mm height. Post closure fits standard piercings.',
    shipping:    'Ships within 3–5 business days. Free shipping on orders over $300. Returns accepted within 14 days — unworn, in original packaging.',
    sizes:       ['ONE SIZE'],
    img:         'images/arrogant-earring-void-nobg.png',
    imgs:        ['images/arrogant-earring-void-nobg.png'],
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
  const wrap = document.querySelector('.hero-img-wrap');
  const img  = wrap?.querySelector('img');
  if (!wrap || !img) return;

  gsap.fromTo(img,
    { yPercent: 0 },
    {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        start:   'top top',
        end:     'bottom top',
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
