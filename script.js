const grid = document.getElementById('grid');
const colorDots = document.querySelectorAll('.color-dot');
const clearBtn = document.getElementById('clear-btn');
const audio = document.getElementById('bg-audio');
const audioToggle = document.getElementById('audio-toggle');
const loader = document.getElementById('loader');

let currentColor = '#f72585';
let isAudioPlaying = false;

function init() {
    // SAFETY TIMEOUT
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);

    for (let i = 0; i < 256; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.addEventListener('click', () => {
            pixel.style.backgroundColor = currentColor;
            pixel.style.boxShadow = `0 0 10px ${currentColor}`;
        });
        grid.appendChild(pixel);
    }
}

colorDots.forEach(dot => {
    dot.onclick = () => {
        colorDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        currentColor = dot.dataset.color;
    };
});

clearBtn.onclick = () => {
    document.querySelectorAll('.pixel').forEach(p => {
        p.style.backgroundColor = 'transparent';
        p.style.boxShadow = 'none';
    });
};

audioToggle.onclick = () => {
    if (isAudioPlaying) {
        audio.pause();
        audioToggle.textContent = '🎵';
    } else {
        audio.play().catch(() => {});
        audioToggle.textContent = '🔊';
    }
    isAudioPlaying = !isAudioPlaying;
};

window.addEventListener('load', init);
setTimeout(init, 5000);