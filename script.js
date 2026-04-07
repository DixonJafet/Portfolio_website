const slides = document.querySelectorAll('.slide');
const progressNav = document.getElementById('progressNav');
const labels = ['Home','FullStack Projects','Data Projects','Skills','Education','Experience'];
let current = 0;
let current_project; 
// Build progress dots
labels.forEach((label, i) => {
    const item = document.createElement('div');
    item.className = 'progress-item' + (i === 0 ? ' active' : '');
    item.innerHTML = `<span class="progress-num">${i + 1}.</span><span class="progress-label">${label}</span>`;
    item.onclick = () => goToSlide(i);
    progressNav.appendChild(item);
});

function goToSlide(index) {
slides[current].classList.remove('active');
document.querySelectorAll('.progress-item')[current].classList.remove('active');
current = index;
slides[current].classList.add('active');
document.querySelectorAll('.progress-item')[current].classList.add('active');
document.getElementById('prevBtn').disabled = current === 0;
document.getElementById('nextBtn').disabled = current === slides.length - 1;
}

function nextSlide() { if (current < slides.length - 1) goToSlide(current + 1); }
function prevSlide() { if (current > 0) goToSlide(current - 1); }

function openMenu(project) {
current_project = project;
document.getElementById('sideMenu').classList.add('open');
document.getElementById('menuOverlay').classList.add('open');
document.getElementById(project).classList.add('open');/*this is where the project dive go */
}
function closeMenu() {
document.getElementById(current_project).classList.remove('open');
document.getElementById('sideMenu').classList.remove('open');
document.getElementById('menuOverlay').classList.remove('open');


}

function handleSearch(e) {
const val = document.getElementById('searchInput').value.toLowerCase();
const idx = labels.findIndex(l => l.toLowerCase().includes(val));
if (e.key === 'Enter' && idx !== -1) goToSlide(idx);
}

// Keyboard navigation
document.addEventListener('keydown', e => {
if (e.key === 'ArrowRight') nextSlide();
if (e.key === 'ArrowLeft') prevSlide();
});

goToSlide(0);