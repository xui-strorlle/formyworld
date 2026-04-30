document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize the St.PageFlip physics engine
    const pageFlip = new St.PageFlip(document.getElementById('book'), {
        width: 450,           // Base page width
        height: 600,          // Base page height
        size: "fixed",        // Keeps it crisp and prevents layout shifting
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.3, // The shadow cast by the bending paper
        showCover: true,       // Tells it that the first/last pages are hard covers
        mobileScrollSupport: false,
        usePortrait: false     // Forces two-page spread like a real book
    });

    // Load the pages from our HTML elements
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    // Music Player Logic
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');

    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.innerText = "⏸ Pause Music";
        } else {
            audio.pause();
            playBtn.innerText = "▶ Press for Music";
        }
    });
});

function flipPage(index) {
    const page = pages[index];
    
    // START MUSIC ON FIRST CLICK
    if (audio.paused) {
        audio.play().catch(error => {
            console.log("Browser blocked autoplay, waiting for interaction.");
        });
        playBtn.innerText = "⏸ Pause Music";
    }

    if (page.classList.contains('flipped')) {
        page.classList.remove('flipped');
        setTimeout(() => {
            page.style.zIndex = pages.length - index;
        }, 600);
    } else {
        page.classList.add('flipped');
        page.style.zIndex = 100 + index;
    }
}

const pageFlip = new St.PageFlip(document.getElementById('book'), {
    width: 600,           // Match your new CSS width
    height: 800,          // Match your new CSS height
    size: "stretch",      // Change "fixed" to "stretch" to fill the container
    minWidth: 400,
    maxWidth: 1200,
    minHeight: 500,
    maxHeight: 1600,
    maxShadowOpacity: 0.4,
    showCover: true,
    usePortrait: false
});