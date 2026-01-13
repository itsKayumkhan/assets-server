// Isme aapka poora logic hai
const ImageMap = {
    'cat_beton': '{{ section.settings.img_cat_beton | img_url: "600x" }}',
    'cat_machine': '{{ section.settings.img_cat_machine | img_url: "600x" }}',
    'lavina': '{{ section.settings.img_lavina | img_url: "600x" }}',
    'htc': '{{ section.settings.img_htc | img_url: "600x" }}',
    'husqvarna': '{{ section.settings.img_husqvarna | img_url: "600x" }}',
    'contec': '{{ section.settings.img_contec | img_url: "600x" }}',
    'airtec': '{{ section.settings.img_airtec | img_url: "600x" }}',
    'profloor': '{{ section.settings.img_profloor | img_url: "600x" }}',
    'klindex': '{{ section.settings.img_klindex | img_url: "600x" }}',
    'scanmaskin': '{{ section.settings.img_scanmaskin | img_url: "600x" }}',
    'wolff': '{{ section.settings.img_wolff | img_url: "600x" }}',
    'ds': '{{ section.settings.img_ds | img_url: "600x" }}',
    'hilti': '{{ section.settings.img_brand_hilti | img_url: "600x" }}',
    'festool': '{{ section.settings.img_brand_festool | img_url: "600x" }}',
    'flex': '{{ section.settings.img_brand_flex | img_url: "600x" }}',
    'standard': '{{ section.settings.img_brand_standard | img_url: "600x" }}',
    'colibri': '{{ section.settings.img_colibri | img_url: "600x" }}',
    'blastrac': '{{ section.settings.img_blastrac | img_url: "600x" }}',
    'einzel': '{{ section.settings.img_einzel | img_url: "600x" }}',
    'dia80': '{{ section.settings.img_dia_80 | img_url: "600x" }}',
    'dia125': '{{ section.settings.img_dia_125 | img_url: "600x" }}',
    'app_schleifen': '{{ section.settings.img_app_schleifen | img_url: "600x" }}',
    'app_entfernen': '{{ section.settings.img_app_entfernen | img_url: "600x" }}',
    'app_polieren': '{{ section.settings.img_app_polieren | img_url: "600x" }}',
    'app_holz': '{{ section.settings.img_app_holz | img_url: "600x" }}'
};

const Tree_Data = {
    'root': [{ id: 'topf', label: 'Topfscheiben (Hand)', imgKey: 'cat_beton' },{ id: 'segmente', label: 'Schleifsegmente (Boden)', imgKey: 'cat_machine' }],
    'topf': [{ id: 'beton_hand', label: 'Betonschleifer (Hand)', imgKey: 'cat_beton' },{ id: 'schleif_machine', label: 'Schleifmaschine', imgKey: 'cat_machine' }],
    'segmente': [{ id: 'lavina', label: 'Lavina / MG', imgKey: 'lavina' },{ id: 'htc', label: 'HTC', imgKey: 'htc' },{ id: 'husqvarna', label: 'Husqvarna', imgKey: 'husqvarna' },{ id: 'contec_seg', label: 'Contec', imgKey: 'contec' },{ id: 'airtec', label: 'Airtec', imgKey: 'airtec' },{ id: 'profloor', label: 'Profloor', imgKey: 'profloor' },{ id: 'klindex', label: 'Klindex', imgKey: 'klindex' },{ id: 'scanmaskin', label: 'Scanmaskin', imgKey: 'scanmaskin' },{ id: 'wolff_seg', label: 'Wolff', imgKey: 'wolff' },{ id: 'ds_seg', label: 'DS / Diamatic', imgKey: 'ds' }],
    'beton_hand': [{ id: 'standard', label: 'Standard', imgKey: 'standard' },{ handle: 'festool-130', label: 'Festool', imgKey: 'festool' },{ handle: 'hilti-130', label: 'Hilti Ø130', imgKey: 'hilti' },{ handle: 'hilti-150', label: 'Hilti Ø150', imgKey: 'hilti' },{ handle: 'flex-150', label: 'Flex Ø150', imgKey: 'flex' },{ handle: 'flex-180', label: 'Flex Ø180', imgKey: 'flex' }],
    'schleif_machine': [{ handle: 'colibri', label: 'COLIBRI', imgKey: 'colibri' },{ handle: 'blastrac', label: 'BLASTRAC', imgKey: 'blastrac' },{ handle: 'contec', label: 'CONTEC', imgKey: 'contec' },{ handle: 'wolff', label: 'WOLFF', imgKey: 'wolff' },{ handle: 'einscheibenmaschine', label: 'Einscheibenmaschine', imgKey: 'einzel' }],
    'lavina': [{ handle: 'lavina-m6-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'lavina-m6-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' },{ handle: 'lavina-m6-holz', label: 'Holz', imgKey: 'app_holz' }],
    'htc': [{ handle: 'htc-easy-change-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'htc-easy-change-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' }],
    'wolff_seg': [{ handle: 'wolff-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'wolff-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' }],
    'ds_seg': [{ handle: 'ds-derendinger-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'ds-derendinger-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' },{ handle: 'ds-derendinger-holz', label: 'Holz', imgKey: 'app_holz' }],
    'scanmaskin': [{ handle: 'scanmaskin-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'scanmaskin-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' }],
    'klindex': [{ handle: 'klindex-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'klindex-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' }],
    'profloor': [{ handle: 'profloor-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'profloor-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' }],
    'airtec': [{ handle: 'airtec-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'airtec-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' }],
    'husqvarna': [{ handle: 'husqvarna-redi-lock-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'husqvarna-redi-lock-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' }],
    'contec_seg': [{ handle: 'contec-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'contec-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' }],
    'standard': [{ handle: 'standard-80', label: 'Ø80', imgKey: 'dia80' },{ handle: 'standard-100', label: 'Ø100', imgKey: 'dia80' },{ id: 'std-125', label: 'Ø125', imgKey: 'dia125' },{ id: 'std-180', label: 'Ø180', imgKey: 'dia125' }],
    'std-125': [{ handle: 'std-125-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'std-125-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' },{ handle: 'std-125-polieren', label: 'Polieren', imgKey: 'app_polieren' },{ handle: 'std-125-holz', label: 'Holz', imgKey: 'app_holz' }],
    'std-180': [{ handle: 'std-180-schleifen', label: 'Schleifen', imgKey: 'app_schleifen' },{ handle: 'std-180-entfernen', label: 'Entfernen', imgKey: 'app_entfernen' },{ handle: 'std-180-holz', label: 'Holz', imgKey: 'app_holz' }]
};

// Global State
let historyStack = ['root'];
let selectionLabels = [];

// Initialize function that Shopify will call
window.initProductFinder = function() {
    renderList('root');
    document.addEventListener('click', function(e) {
        if(!e.target.closest('.finder-container')) {
            document.getElementById('dropdown-box').classList.remove('show');
            document.getElementById('smart-bar').classList.remove('open');
        }
    });
};

function renderList(key) {
    const listContainer = document.getElementById('option-list');
    const backBtn = document.getElementById('back-btn');
    const searchInput = document.getElementById('search-input');
    
    listContainer.innerHTML = '';
    const items = Tree_Data[key];
    if (!items) return;

    items.forEach(item => {
        let imgHtml = '<span class="item-icon-placeholder">🔧</span>';
        if (item.imgKey && ImageMap[item.imgKey] && !ImageMap[item.imgKey].includes('no-image')) {
            imgHtml = `<img src="${ImageMap[item.imgKey]}" class="item-icon-img" alt="${item.label}">`;
        }
        const div = document.createElement('div');
        div.className = 'option-item';
        div.innerHTML = `<div class="item-icon-wrapper">${imgHtml}</div><div class="item-content"><span class="item-text">${item.label}</span><span class="item-arrow">➜</span></div>`;
        div.onclick = (e) => handleSelection(item, e);
        listContainer.appendChild(div);
    });
    backBtn.style.display = historyStack.length > 1 ? 'flex' : 'none';
}

function handleSelection(item, e) {
    e.stopPropagation();
    selectionLabels.push(item.label);
    updateBreadcrumbs();
    if (item.id) {
        historyStack.push(item.id);
        renderList(item.id);
    } else if (item.handle) {
        document.getElementById('dropdown-box').classList.remove('show');
        document.getElementById('smart-bar').classList.remove('open');
        document.getElementById('final-btn-area').style.display = 'block';
        document.getElementById('go-btn').onclick = () => window.location.href = '/collections/' + item.handle;
    }
}

window.toggleDropdown = function() {
    document.getElementById('dropdown-box').classList.toggle('show');
    document.getElementById('smart-bar').classList.toggle('open');
};

window.goBack = function(e) {
    e.stopPropagation();
    if (historyStack.length > 1) {
        historyStack.pop();
        selectionLabels.pop();
        renderList(historyStack[historyStack.length - 1]);
        updateBreadcrumbs();
    }
};

function updateBreadcrumbs() {
    const pathContainer = document.getElementById('path-container');
    pathContainer.innerHTML = '';
    if (selectionLabels.length === 0) {
        pathContainer.innerHTML = '<span class="path-placeholder">Wählen Sie Ihr Werkzeug...</span>';
        return;
    }
    selectionLabels.forEach((label, index) => {
        const step = document.createElement('span');
        step.className = 'path-step';
        step.innerText = label;
        pathContainer.appendChild(step);
        if (index < selectionLabels.length - 1) {
            const div = document.createElement('span');
            div.className = 'path-divider';
            div.innerText = '>';
            pathContainer.appendChild(div);
        }
    });
}

window.filterList = function() {
    const filter = document.getElementById('search-input').value.toUpperCase();
    const items = document.getElementById('option-list').getElementsByClassName('option-item');
    for (let i = 0; i < items.length; i++) {
        const txt = items[i].querySelector('.item-text').innerText;
        items[i].style.display = txt.toUpperCase().indexOf(filter) > -1 ? "flex" : "none";
    }
};

window.resetFinder = function() {
    historyStack = ['root'];
    selectionLabels = [];
    document.getElementById('final-btn-area').style.display = 'none';
    updateBreadcrumbs();
    renderList('root');
};
