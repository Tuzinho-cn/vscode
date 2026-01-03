document.addEventListener('DOMContentLoaded',()=>{
	// Splash: centered pepper moves to final location while letters reveal behind it
	(function handleSplash(){
		const splash = document.getElementById('splash');
		if(!splash) return;
		const drop = splash.querySelector('.splash-drop');
		const finalLogo = splash.querySelector('.splash-logo-alt');
		const title = splash.querySelector('.splash-title');
		const sub = splash.querySelector('.splash-sub');

		// prepare title letters (wrap each char in span)
		if(title){
			const text = title.textContent.trim();
			title.textContent = '';
			for(let i=0;i<text.length;i++){
				const ch = text[i];
				const span = document.createElement('span');
				span.className = 'letter';
				span.textContent = ch === ' ' ? '\u00A0' : ch;
				title.appendChild(span);
			}
		}

		// start animation a tick later so layout stabilizes
		requestAnimationFrame(()=>{
			setTimeout(()=>{
				if(!drop || !finalLogo) return;
				// ensure drop is visible
				drop.style.display = '';
				const splashRect = splash.getBoundingClientRect();
				const logoRect = finalLogo.getBoundingClientRect();

				// compute start position: end of title (last letter)
				const letters = title ? Array.from(title.querySelectorAll('.letter')) : [];
				let startLeft, startTop;
				if(letters.length){
					const last = letters[letters.length - 1];
					const lastRect = last.getBoundingClientRect();
					startLeft = lastRect.left + lastRect.width/2 - splashRect.left;
					startTop = lastRect.top + lastRect.height/2 - splashRect.top;
				} else {
					// fallback: center
					startLeft = splashRect.width/2;
					startTop = splashRect.height/2;
				}

				// compute target (logo center) relative to splash
				const targetLeft = logoRect.left + logoRect.width/2 - splashRect.left;
				const targetTop = logoRect.top + logoRect.height/2 - splashRect.top;

				// position drop at start
				drop.style.left = `${startLeft}px`;
				drop.style.top = `${startTop}px`;
				drop.style.transform = 'translate(-50%,-50%)';

				// durations: letters keep current speed, pepper move is slower
				const lettersDuration = 700; // ms for letters reveal (sped up)
				const moveDuration = 2200; // ms for pepper movement (slower)
				const easing = 'cubic-bezier(.2,.9,.2,1)';

				// animate left/top to target using WAAPI (slower move)
				const anim = drop.animate([
					{ left: `${startLeft}px`, top: `${startTop}px` },
					{ left: `${targetLeft}px`, top: `${targetTop}px` }
				], { duration: moveDuration, easing, fill: 'forwards' });

				// reveal letters behind the moving pepper, staggered across lettersDuration (back-to-front)
				const startDelay = 0;
				const totalLetters = letters.length || 1;
				letters.forEach((el, idx)=>{
					const orderIndex = (totalLetters - 1 - idx);
					const t = Math.round(startDelay + (lettersDuration) * (orderIndex / totalLetters));
					setTimeout(()=> el.classList.add('show'), t);
				});

				// when animation finishes, show final logo and reveal subtitle then fade
				anim.onfinish = ()=>{
					// reveal the final inline logo and ensure drop removed
					finalLogo.style.opacity = '1';
					drop.style.display = 'none';
					splash.classList.add('revealed');
					if(sub){ sub.style.opacity = '1'; }

					// start fade immediately when pepper arrives
					splash.classList.add('fade-out');
					splash.addEventListener('transitionend', ()=>{ try{splash.remove();}catch(e){} }, {once:true});
				};
			}, 60);
		});
	})();
	const peppers = [
		{id:1,name:'Malagueta',state:'Bahia',city:'Ilhéus',price:4.5,sold:420,img:'https://imageswscdn.wslojas.com.br/files/24600/MED_prod_610976242222.jpg'},
		{id:2,name:'Dedo-de-Moça',state:'Pernambuco',city:'Recife',price:6.5,sold:320,img:'https://conservasserradomar.com.br/imagens/produtos/pimenta-dedo-de-moca-300g-serra-do-mar.png'},
		{id:3,name:'Biquinho',state:'Minas Gerais',city:'Ouro Preto',price:5.0,sold:150,img:'https://destro.fbitsstatic.net/img/p/pimenta-biquinho-hemmer-200g-73143/259679.jpg?w=500&h=500&v=202501231555&qs=ignore'},
		{id:4,name:'Habanero',state:'Ceará',city:'Fortaleza',price:12.0,sold:85,img:'https://images.tcdn.com.br/img/img_prod/604686/conserva_de_pimenta_habanero_vermelha_200g_1497_1_f2edb8589487348c316ddf424fff3234.jpg'},
		{id:5,name:'Jalapeño',state:'São Paulo',city:'Campinas',price:7.5,sold:210,img:'https://m.media-amazon.com/images/I/51VQhmUUEHL._AC_SX679_.jpg'},
		{id:6,name:'Cumari',state:'Bahia',city:'Salvador',price:3.8,sold:95,img:'https://www.brasileuquero.com/cdn/shop/files/pimenta5.png?v=1726514717&width=600'},
		{id:7,name:'Pimenta-de-Cheiro',state:'Amazonas',city:'Manaus',price:8.0,sold:60,img:'https://m.magazineluiza.com.br/a-static/420x420/pimenta-de-cheiro-em-conserva-companhia-das-ervas-240g/casasantaluzia2/64816/0c57f027f398cae46d75758b2abba40c.jpeg'},
		{id:8,name:'Cumari-do-Pará',state:'Pará',city:'Belém',price:4.2,sold:180,img:'https://m.media-amazon.com/images/I/61r7EM16PDL._AC_SY679_.jpg'}
	];

	const peppersEl = document.getElementById('peppers');
	const sortSelect = document.getElementById('sortSelect');
	const stateSelect = document.getElementById('stateSelect');
	const searchInput = document.getElementById('searchInput');
	const clearBtn = document.getElementById('clearBtn');
	const navEl = document.querySelector('.nav');

	function render(list){
		peppersEl.innerHTML = '';
		if(!list.length){
			peppersEl.innerHTML = '<p>Nenhuma pimenta encontrada.</p>';
			return;
		}
		list.forEach(p=>{
			const card = document.createElement('article');
			card.className = 'card';
			card.innerHTML = `
				<img src="${p.img}" alt="${p.name}">
				<div class="card-body">
					<h3>${p.name}</h3>
					<div class="meta">${p.city} — ${p.state}</div>
					<div class="price-sold">
						<div class="price">R$ ${p.price.toFixed(2)}</div>
						<div class="sold">${p.sold} vendidos</div>
					</div>
				</div>
			`;
			peppersEl.appendChild(card);
		})
	}

	function populateStates(){
		const states = Array.from(new Set(peppers.map(p=>p.state))).sort();
		states.forEach(s=>{
			const opt = document.createElement('option');
			opt.value = s; opt.textContent = s;
			stateSelect.appendChild(opt);
		})
	}

	function applyFilters(){
		let list = [...peppers];
		const state = stateSelect.value;
		const q = searchInput.value.trim().toLowerCase();
		if(state !== 'all') list = list.filter(p=>p.state === state);
		if(q) list = list.filter(p=>p.name.toLowerCase().includes(q));

		const sort = sortSelect.value;
		if(sort === 'most_sold') list.sort((a,b)=>b.sold - a.sold);
		else if(sort === 'least_sold') list.sort((a,b)=>a.sold - b.sold);
		else if(sort === 'cheapest') list.sort((a,b)=>a.price - b.price);
		else if(sort === 'expensive') list.sort((a,b)=>b.price - a.price);
		else if(sort === 'state') list.sort((a,b)=>a.state.localeCompare(b.state));

		render(list);
	}

	populateStates();
	render(peppers);

	// apply filters only when the user clicks "Aplicar"
	// remove automatic listeners
	// note: applyFiltersBtn calls applyFilters when pressed

	// Clear removes all filters and applies immediately
	clearBtn.addEventListener('click',()=>{
		searchInput.value='';
		stateSelect.value='all';
		sortSelect.value='most_sold';
		applyFilters();
		// close panel if open
		if(filterPanel){
			filterPanel.classList.remove('show');
			filterBtn && filterBtn.setAttribute('aria-expanded','false');
			filterPanel.setAttribute('aria-hidden','true');
		}
	});

	// Filter panel toggle and actions
	const filterBtn = document.getElementById('filterBtn');
	const filterPanel = document.getElementById('filterPanel');
	const applyFiltersBtn = document.getElementById('applyFiltersBtn');
	const closeFiltersBtn = document.getElementById('closeFiltersBtn');
	const searchBtn = document.getElementById('searchBtn');

	if(filterBtn && filterPanel){
		filterBtn.addEventListener('click', (e)=>{
			e.stopPropagation();
			const show = filterPanel.classList.toggle('show');
			filterBtn.setAttribute('aria-expanded', show ? 'true' : 'false');
			filterPanel.setAttribute('aria-hidden', show ? 'false' : 'true');
		});

		if(applyFiltersBtn){
			applyFiltersBtn.addEventListener('click', ()=>{
				applyFilters();
				filterPanel.classList.remove('show');
				filterBtn.setAttribute('aria-expanded','false');
				filterPanel.setAttribute('aria-hidden','true');
			});
		}

		if(closeFiltersBtn){
			closeFiltersBtn.addEventListener('click', ()=>{
				filterPanel.classList.remove('show');
				filterBtn.setAttribute('aria-expanded','false');
				filterPanel.setAttribute('aria-hidden','true');
			});
		}

		// close when clicking outside
		document.addEventListener('click', (ev)=>{
			if(!filterPanel.contains(ev.target) && ev.target !== filterBtn){
				filterPanel.classList.remove('show');
				filterBtn.setAttribute('aria-expanded','false');
				filterPanel.setAttribute('aria-hidden','true');
			}
		});
	}

	// Search button: apply current filters + search
	if(searchBtn){
		searchBtn.addEventListener('click', ()=>{
			applyFilters();
		});
		// also allow Enter key inside search input to trigger same action
		searchInput.addEventListener('keydown', (e)=>{
			if(e.key === 'Enter'){
				e.preventDefault();
				applyFilters();
			}
		});
	}

	// Add sticky compact header behavior on scroll
	const heroEl = document.querySelector('.hero');
	const onScroll = () => {
		const heroBottom = heroEl ? Math.round(heroEl.getBoundingClientRect().bottom) : 9999;
		// show compact nav only when hero is completely out of view
		const scrolled = heroBottom <= 0;
		document.body.classList.toggle('scrolled', scrolled);
		// when nav becomes fixed, set a CSS var to reserve the same height on the hero
		if(navEl){
			const navH = navEl.offsetHeight + 'px';
			document.documentElement.style.setProperty('--nav-h', scrolled ? navH : '0px');
		}
	};

	window.addEventListener('scroll', onScroll, {passive:true});
	// run once to set initial state
	onScroll();

});

