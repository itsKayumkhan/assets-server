/* --- UNIVERSAL LOGIC LOADED FROM GITHUB --- */
console.log("✅ GitHub Logic: Fetching successful!");

window.initProductFinder = function(config) {
    console.log("🚀 Initializing:", config.name);
    
    // Global references for the specific instance
    const tree = config.treeData;
    const images = config.imageMap;
    const gridId = config.isVersion2 ? 'step' : 'option-list';

    // Helper to get image HTML
    window.getImgHtml = function(imgKey) {
        if (imgKey && images[imgKey] && !images[imgKey].includes('no-image')) {
            return `<img src="${images[imgKey]}" class="${config.isVersion2 ? 'pf-card-img' : 'item-icon-img'}">`;
        }
        return config.isVersion2 ? '<div style="font-size:60px; opacity:0.3;">🛠️</div>' : '🔧';
    };

    // Version 2 (Card Style) Render Function
    window.renderStep = function(step, key) {
        const grid = document.getElementById(`step${step}-grid`);
        if (!grid) return;
        grid.innerHTML = '';
        const options = tree[key] || [];

        options.forEach(opt => {
            const action = opt.handle 
                ? `window.location.href='/collections/${opt.handle}'`
                : `goToStep(${step + 1}, '${opt.id}')`;

            grid.innerHTML += `
                <div class="pf-card" onclick="${action}">
                    <div class="pf-card-header">Wählen</div>
                    <div class="pf-img-wrapper">${getImgHtml(opt.imgKey)}</div>
                    <div class="pf-card-footer">${opt.label}</div>
                </div>`;
        });
    };

    // Version 1 (Dropdown Style) Render Function
    window.renderListV1 = function(key) {
        const listContainer = document.getElementById('option-list');
        if (!listContainer) return;
        listContainer.innerHTML = '';
        const items = tree[key] || [];

        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'option-item';
            div.innerHTML = `
                <div class="item-icon-wrapper">${getImgHtml(item.imgKey)}</div>
                <div class="item-content">
                    <span class="item-text">${item.label}</span>
                    <span class="item-arrow">➜</span>
                </div>`;
            div.onclick = (e) => handleSelectionV1(item, e);
            listContainer.appendChild(div);
        });
    };
    
    // Initial calls
    if(config.isVersion2) {
        console.log("Mode: Card Layout");
    } else {
        console.log("Mode: Dropdown Layout");
        renderListV1('root');
    }
};
