/* --- GITHUB UNIVERSAL LOGIC --- */
console.log("✅ Universal Logic Loaded");

window.initProductFinder = function(config) {
    const images = config.imageMap;
    const tree = config.treeData;

    // --- Helper: Image Renderer ---
    const getImg = (key) => {
        if (key && images[key] && !images[key].includes('no-image')) {
            return `<img src="${images[key]}" class="${config.version === 2 ? 'pf-card-img' : 'item-icon-img'}">`;
        }
        return config.version === 2 ? '<div style="font-size:60px; opacity:0.3;">🛠️</div>' : '🔧';
    };

    // --- VERSION 1: DROPDOWN UI LOGIC ---
    if (config.version === 1) {
        let history = ['root'];
        let labels = [];

        window.renderListV1 = (key) => {
            const list = document.getElementById('option-list');
            if(!list) return;
            list.innerHTML = '';
            (tree[key] || []).forEach(item => {
                const div = document.createElement('div');
                div.className = 'option-item';
                div.innerHTML = `<div class="item-icon-wrapper">${getImg(item.imgKey)}</div>
                                 <div class="item-content"><span class="item-text">${item.label}</span><span class="item-arrow">➜</span></div>`;
                div.onclick = () => {
                    labels.push(item.label);
                    updateBreadV1();
                    if(item.id) { history.push(item.id); renderListV1(item.id); }
                    else if(item.handle) {
                        document.getElementById('dropdown-box').classList.remove('show');
                        document.getElementById('final-btn-area').style.display = 'block';
                        document.getElementById('go-btn').onclick = () => window.location.href = '/collections/' + item.handle;
                    }
                };
                list.appendChild(div);
            });
            document.getElementById('back-btn').style.display = history.length > 1 ? 'flex' : 'none';
        };

        window.toggleDropdown = () => {
            document.getElementById('dropdown-box').classList.toggle('show');
            document.getElementById('smart-bar').classList.toggle('open');
        };

        window.goBack = (e) => {
            e.stopPropagation();
            if(history.length > 1) { history.pop(); labels.pop(); renderListV1(history[history.length-1]); updateBreadV1(); }
        };

        const updateBreadV1 = () => {
            const cont = document.getElementById('path-container');
            if(!labels.length) { cont.innerHTML = '<span class="path-placeholder">Wählen Sie...</span>'; return; }
            cont.innerHTML = labels.map(l => `<span class="path-step">${l}</span>`).join('<span class="path-divider">></span>');
        };

        renderListV1('root');
    }

    // --- VERSION 2: CARD UI LOGIC ---
    if (config.version === 2) {
        window.pfHistory = [{ step: 0 }];

        window.goToStep = (step, key) => {
            pfHistory.push({ step, key });
            document.querySelectorAll('.pf-step').forEach(el => el.classList.remove('active'));
            document.getElementById('pf-back').style.display = 'inline-block';
            
            const grid = document.getElementById(`step${step}-grid`);
            if(!grid) return;
            grid.innerHTML = '';
            (tree[key] || []).forEach(opt => {
                const action = opt.handle ? `window.location.href='/collections/${opt.handle}'` : `goToStep(${step + 1}, '${opt.id}')`;
                grid.innerHTML += `<div class="pf-card" onclick="${action}">
                    <div class="pf-card-header">Wählen</div>
                    <div class="pf-img-wrapper">${getImg(opt.imgKey)}</div>
                    <div class="pf-card-footer">${opt.label}</div></div>`;
            });
            document.getElementById('step-'+step).classList.add('active');
        };

        document.getElementById('pf-back').onclick = () => {
            pfHistory.pop();
            const prev = pfHistory[pfHistory.length - 1];
            document.querySelectorAll('.pf-step').forEach(el => el.classList.remove('active'));
            document.getElementById('step-'+prev.step).classList.add('active');
            if(prev.step === 0) document.getElementById('pf-back').style.display = 'none';
        };
    }
};
