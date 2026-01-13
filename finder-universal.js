/* --- GITHUB UNIVERSAL LOGIC --- */
console.log("✅ Universal Logic Script Started");

// Functions ko turant window par register karein
window.toggleDropdown = function() {
    const db = document.getElementById('dropdown-box');
    const sb = document.getElementById('smart-bar');
    if(db) db.classList.toggle('show');
    if(sb) sb.classList.toggle('open');
};

window.initProductFinder = function(config) {
    console.log("🚀 Initializing Version:", config.version);
    const images = config.imageMap;
    const tree = config.treeData;

    const getImg = (key) => {
        if (key && images[key] && !images[key].includes('no-image')) {
            return `<img src="${images[key]}" class="${config.version === 2 ? 'pf-card-img' : 'item-icon-img'}">`;
        }
        return config.version === 2 ? '<div style="font-size:60px; opacity:0.3;">🛠️</div>' : '🔧';
    };

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

        window.goBack = (e) => {
            e.stopPropagation();
            if(history.length > 1) { history.pop(); labels.pop(); renderListV1(history[history.length-1]); updateBreadV1(); }
        };

        const updateBreadV1 = () => {
            const cont = document.getElementById('path-container');
            if(!cont) return;
            if(!labels.length) { cont.innerHTML = '<span class="path-placeholder">Wählen Sie...</span>'; return; }
            cont.innerHTML = labels.map(l => `<span class="path-step">${l}</span>`).join('<span class="path-divider">></span>');
        };

        renderListV1('root');
    }

    if (config.version === 2) {
        window.pfHistory = [{ step: 0 }];
        window.goToStep = function(step, key) {
            console.log("Moving to Step:", step, "Key:", key);
            window.pfHistory.push({ step, key });
            document.querySelectorAll('.pf-step').forEach(el => el.classList.remove('active'));
            const backBtn = document.getElementById('pf-back');
            if(backBtn) backBtn.style.display = 'inline-block';
            
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
            const nextStep = document.getElementById('step-'+step);
            if(nextStep) nextStep.classList.add('active');
        };

        const backBtn = document.getElementById('pf-back');
        if(backBtn) {
            backBtn.onclick = () => {
                window.pfHistory.pop();
                const prev = window.pfHistory[window.pfHistory.length - 1];
                document.querySelectorAll('.pf-step').forEach(el => el.classList.remove('active'));
                document.getElementById('step-'+prev.step).classList.add('active');
                if(prev.step === 0) backBtn.style.display = 'none';
            };
        }
    }
};
