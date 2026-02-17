/* Row scrolling controls for Netflix-like rows */
document.querySelectorAll('.row').forEach(row=>{
  const left = row.querySelector('.row-btn.left');
  const right = row.querySelector('.row-btn.right');
  const items = row.querySelector('.row-items');
  if(!items) return;
  const step = items.clientWidth * 0.7;
  left?.addEventListener('click', ()=>{ items.scrollBy({left:-step, behavior:'smooth'}) });
  right?.addEventListener('click', ()=>{ items.scrollBy({left:step, behavior:'smooth'}) });
});

/* Lightweight search demo */
document.querySelector('.search')?.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter'){
    e.preventDefault();
    alert('Search: ' + e.target.value + ' (demo)');
  }
});

/* make placeholder template HTML work when injected server-side (fallback for static file) */
document.addEventListener('DOMContentLoaded', ()=>{
  // Add-to-cart behavior
  const cart = [];
  const cartCountEl = document.getElementById('cartCount');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartItemsEl = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');

  function updateCartUI(){
    const total = cart.reduce((s,i)=>s + (i.price * i.qty), 0);
    cartCountEl.textContent = cart.reduce((s,i)=>s + i.qty, 0);
    cartTotalEl.textContent = total.toFixed(2);
    cartItemsEl.innerHTML = '';
    if(cart.length === 0){
      cartItemsEl.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
      return;
    }
    cart.forEach(item=>{
      const node = document.createElement('div');
      node.className = 'cart-item';
      const seed = encodeURIComponent(item.name.toLowerCase().replace(/\s+/g,'-'));
      node.innerHTML = `\
        <img src="https://picsum.photos/seed/${seed}/80/60" alt="${item.name}" />\
        <div class="meta">\
          <div class="title">${item.name}</div>\
          <div class="price">$${(item.price).toFixed(2)} x ${item.qty}</div>\
        </div>\
        <div class="actions">\
          <button class="btn small remove" data-name="${item.name}">Remove</button>\
        </div>`;
      cartItemsEl.appendChild(node);
    });
  }

  function addToCart(name, price){
    const found = cart.find(i=>i.name === name);
    if(found) found.qty += 1;
    else cart.push({name, price:parseFloat(price), qty:1});
    updateCartUI();
  }

  document.body.addEventListener('click', (e)=>{
    const add = e.target.closest('.add-btn');
    if(add){
      const name = add.dataset.name;
      const price = parseFloat(add.dataset.price) || 0;
      addToCart(name, price);
      return;
    }
    const heroAdd = e.target.closest('#heroAdd');
    if(heroAdd){
      addToCart(heroAdd.dataset.name, heroAdd.dataset.price);
      return;
    }
    const buyNow = e.target.closest('.hero-actions .primary');
    if(buyNow){
      addToCart(buyNow.dataset.name, buyNow.dataset.price);
      openCart();
      return;
    }
    const remove = e.target.closest('.remove');
    if(remove){
      const name = remove.dataset.name;
      const idx = cart.findIndex(i=>i.name===name);
      if(idx>-1) cart.splice(idx,1);
      updateCartUI();
      return;
    }
  });

  // Cart open/close
  function openCart(){
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden','false');
  }
  function closeCart(){
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden','true');
  }

  document.getElementById('cartToggle')?.addEventListener('click', ()=>{
    if(cartDrawer.classList.contains('open')) closeCart(); else openCart();
  });
  document.getElementById('closeCart')?.addEventListener('click', closeCart);

  document.getElementById('checkout')?.addEventListener('click', ()=>{
    // persist cart to localStorage and redirect to checkout page
    try{
      localStorage.setItem('shopCart', JSON.stringify(cart));
    }catch(e){
      console.warn('Could not save cart to storage', e);
    }
    window.location.href = 'checkout.html';
  });

  updateCartUI();
});
