const icons = {
  home: '<path d="M3 10.5 10 4l7 6.5v7a1 1 0 0 1-1 1h-4v-5H8v5H4a1 1 0 0 1-1-1z"/>',
  route: '<circle cx="5" cy="5" r="2"/><circle cx="15" cy="15" r="2"/><path d="M7 5h3a3 3 0 0 1 3 3v4M5 7v8h8"/>',
  bus: '<rect x="3" y="3" width="14" height="13" rx="2"/><path d="M3 10h14M6 16v2m8-2v2M6 6h8"/><circle cx="6" cy="13" r=".7" fill="currentColor"/><circle cx="14" cy="13" r=".7" fill="currentColor"/>',
  leaf: '<path d="M17 3C9 3 4 7 4 13c0 2 1 4 3 5 1-5 4-8 8-10-3 3-5 6-6 10 6 0 9-5 8-15Z"/>',
  message: '<path d="M4 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 3v-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M6 8h8M6 12h5"/>',
  bell: '<path d="M5 8a5 5 0 0 1 10 0c0 6 2 6 2 6H3s2 0 2-6M8 17h4"/>',
  cloud: '<path d="M6 15h9a3 3 0 0 0 .5-6A5 5 0 0 0 6 7.5 3.5 3.5 0 0 0 6 15Z"/><path d="m7 17-1 2m5-2-1 2m5-2-1 2"/>',
  search: '<circle cx="9" cy="9" r="5"/><path d="m13 13 4 4"/>',
  walk: '<circle cx="11" cy="4" r="2"/><path d="m9 8-2 4 3 2 1 5m0-10 3 3 3 1m-7 1-4 5"/>',
  parking: '<circle cx="10" cy="10" r="8"/><path d="M8 15V5h3.5a3 3 0 0 1 0 6H8"/>',
  bike: '<circle cx="5" cy="15" r="3"/><circle cx="15" cy="15" r="3"/><path d="m5 15 4-7 3 7H5Zm4-7h4m-6-2h3m2 9 3-6h-3"/>',
  umbrella: '<path d="M3 10a7 7 0 0 1 14 0H3Zm7 0v6a2 2 0 0 0 4 0"/>',
  back: '<path d="m12 4-6 6 6 6M6 10h11"/>',
  swap: '<path d="m7 4-3 3 3 3M4 7h12m-3 3 3 3-3 3M4 13h12"/>',
  layers: '<path d="m10 3 8 4-8 4-8-4 8-4Z"/><path d="m2 11 8 4 8-4m-16 4 8 4 8-4"/>',
  navigate: '<path d="m3 9 14-6-6 14-2-6-6-2Z"/>',
  bolt: '<path d="m11 2-7 10h6l-1 6 7-10h-6l1-6Z"/>',
  battery: '<rect x="2" y="6" width="15" height="9" rx="2"/><path d="M19 9v3M5 9h6"/>',
  scan: '<path d="M7 3H3v4m10-4h4v4m0 6v4h-4M7 17H3v-4M7 7h6v6H7z"/>',
  shield: '<path d="M10 2 4 5v5c0 4 2.5 7 6 8 3.5-1 6-4 6-8V5l-6-3Z"/><path d="m7 10 2 2 4-4"/>',
  info: '<circle cx="10" cy="10" r="8"/><path d="M10 9v5m0-8v.1"/>',
  coffee: '<path d="M4 7h10v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7Zm10 2h2a2 2 0 0 1 0 4h-2M3 18h12"/>',
  print: '<path d="M6 7V3h8v4M6 15H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M6 12h8v6H6z"/>',
  users: '<circle cx="7" cy="7" r="3"/><circle cx="15" cy="8" r="2"/><path d="M2 17c0-3 2-5 5-5s5 2 5 5m1-4c3 0 5 1.5 5 4"/>',
  clock: '<circle cx="10" cy="10" r="8"/><path d="M10 5v5l3 2"/>',
  smile: '<circle cx="10" cy="10" r="8"/><path d="M7 8h.1M13 8h.1M6.5 12c1 2 6 2 7 0"/>',
  chart: '<path d="M3 18V9m5 9V4m5 14v-6m5 6V7"/>',
  target: '<circle cx="10" cy="10" r="8"/><circle cx="10" cy="10" r="4"/><circle cx="10" cy="10" r="1"/>',
  send: '<path d="m2 3 16 7-16 7 3-7-3-7Z"/><path d="M5 10h13"/>',
  gift: '<rect x="3" y="8" width="14" height="10" rx="1"/><path d="M2 5h16v4H2zM10 5v13M10 5H7.5a2 2 0 1 1 2.5-2v2Zm0 0h2.5A2 2 0 1 0 10 3v2Z"/>',
  check: '<path d="m4 10 4 4 8-8"/>'
};

document.querySelectorAll('[data-icon]').forEach((node) => {
  const name = node.dataset.icon;
  node.innerHTML = `<svg viewBox="0 0 20 20" aria-hidden="true">${icons[name] || icons.info}</svg>`;
});

const pageElements = [...document.querySelectorAll('.page')];
const navButtons = [...document.querySelectorAll('.bottom-nav [data-page]')];

function showPage(pageName) {
  const targetName = ['parking', 'ebike'].includes(pageName) ? pageName : pageName;
  pageElements.forEach((page) => page.classList.toggle('active', page.dataset.pageName === targetName));
  navButtons.forEach((button) => button.classList.toggle('active', button.dataset.page === targetName));
  if (!navButtons.some((button) => button.dataset.page === targetName)) {
    navButtons.forEach((button) => button.classList.remove('active'));
  }
  const activePage = document.querySelector(`.page[data-page-name="${targetName}"]`);
  if (activePage) activePage.scrollTop = 0;
}

document.addEventListener('click', (event) => {
  const pageButton = event.target.closest('[data-page]');
  if (pageButton) showPage(pageButton.dataset.page);

  const modalButton = event.target.closest('[data-open-modal]');
  if (modalButton) openModal(modalButton.dataset.openModal);

  if (event.target.closest('[data-close-modal]')) closeModals();
});

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModals() {
  document.querySelectorAll('.modal.open').forEach((modal) => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModals();
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    showToast('Journey options updated', `${button.textContent} routes are now prioritised.`);
  });
});

document.querySelectorAll('.journey-option').forEach((option) => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.journey-option').forEach((item) => item.classList.remove('selected'));
    option.classList.add('selected');
  });
});

document.querySelectorAll('[data-start-trip]').forEach((button) => {
  button.addEventListener('dblclick', () => showToast('Journey started', 'Live guidance to Main Library is ready.'));
});

const routeData = {
  A: { image: 'assets/route_a.png', stop: 'KL Gate Mobility Hub', destination: 'To Main Library', eta: '4' },
  B: { image: 'assets/route_b.png', stop: 'Residential College 12', destination: 'To Science Cluster', eta: '6' },
  C: { image: 'assets/route_c.png', stop: 'Health Zone / PPUM', destination: 'To DTC', eta: '5' }
};

document.querySelectorAll('.route-tab').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.route;
    const data = routeData[key];
    document.querySelectorAll('.route-tab').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.getElementById('routeMap').src = data.image;
    document.querySelector('.arrival-head h3').textContent = data.stop;
    document.querySelectorAll('.arrival-row b').forEach((node) => node.textContent = data.destination);
    document.querySelector('.arrival-row strong').innerHTML = `${data.eta} <small>min</small>`;
    document.querySelectorAll('.route-letter').forEach((node) => {
      node.textContent = key;
      node.className = `route-chip ${key.toLowerCase()} route-letter`;
    });
  });
});

document.querySelectorAll('.hub-pin').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.hub-pin').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});

document.getElementById('scanBike').addEventListener('click', () => {
  showToast('Bike UM-104 selected', 'Scan simulation complete. Safety check is ready.');
});

document.getElementById('navigateParking').addEventListener('click', () => {
  showToast('Navigation started', 'Following the fastest route to KL Gate Mobility Hub.');
});

let miles = 320;
document.querySelectorAll('[data-redeem]').forEach((button) => {
  button.addEventListener('click', () => {
    const cost = Number(button.dataset.redeem);
    const reward = button.dataset.reward;
    if (miles < cost) {
      showToast('Not enough Green Miles', `You need ${cost - miles} more miles for this reward.`);
      return;
    }
    miles -= cost;
    document.getElementById('milesBalance').textContent = miles;
    document.getElementById('homeMiles').textContent = miles;
    closeModals();
    showToast('Reward redeemed', `${reward} has been added to your wallet.`);
  });
});

document.querySelectorAll('[data-portal-tab]').forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.portalTab;
    document.querySelectorAll('[data-portal-tab]').forEach((item) => item.classList.toggle('active', item === button));
    document.querySelectorAll('[data-portal-panel]').forEach((panel) => panel.classList.toggle('active', panel.dataset.portalPanel === tab));
  });
});

document.getElementById('feedbackForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const type = document.getElementById('feedbackType').value;
  event.currentTarget.reset();
  showToast('Feedback received', `${type} has been logged for the project team.`);
});

document.querySelector('.alert-card button').addEventListener('click', (event) => {
  event.currentTarget.closest('.alert-card').remove();
});

let toastTimer;
function showToast(title, message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastTitle').textContent = title;
  document.getElementById('toastMessage').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

showPage('home');
