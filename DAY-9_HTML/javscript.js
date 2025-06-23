// Array of image filenames
const images = ['https://i.ytimg.com/vi/ibNrPjETR_k/maxresdefault.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Anta0151_%2819771223522%29.jpg/1200px-Anta0151_%2819771223522%29.jpg', 'https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/02/29031558/Bergen.jpg'];
let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.getElementById('indicators');

// Show image based on currentIndex
function showImage(index) {
  sliderImage.src = images[index];
  updateIndicators(index);
}

// Update active dot
function updateIndicators(index) {
  indicators.innerHTML = '';
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add(i === index ? 'active' : '');
    indicators.appendChild(dot);
  });
}

// Previous button click
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Next button click
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Auto-slide every 4 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 4000);

// Initial load
showImage(currentIndex);
