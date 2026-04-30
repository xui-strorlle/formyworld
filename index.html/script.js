document.addEventListener('DOMContentLoaded', function() {
    
    // Check if user is on mobile
    const isMobile = window.innerWidth < 600;

    const pageFlip = new St.PageFlip(document.getElementById('book'), {
        width: isMobile ? 300 : 600,   // If phone, use 300. If laptop, 600.
        height: isMobile ? 450 : 800,  // If phone, use 450. If laptop, 800.
        size: "stretch",
        minWidth: 250,
        maxWidth: 1200,
        minHeight: 400,
        maxHeight: 1600,
        maxShadowOpacity: 0.4,
        showCover: true,
        mobileScrollSupport: true,     // Turn this on for her phone!
        usePortrait: isMobile          // Shows 1 page at a time on phones
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    
    // ... keep the music code below ...
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
