window.onload = function() {
    const isMobile = window.innerWidth < 768;
    const bookElement = document.getElementById('book');

    // 1. Calculate dynamic size based on her actual phone screen
    const bookWidth = isMobile ? window.innerWidth * 0.85 : 550;
    const bookHeight = isMobile ? window.innerHeight * 0.7 : 750;

    // 2. Initialize the engine
    const pageFlip = new St.PageFlip(bookElement, {
        width: bookWidth,
        height: bookHeight,
        size: "fixed", // "fixed" is more stable for mobile than "stretch"
        minWidth: 250,
        maxWidth: 1000,
        minHeight: 400,
        maxHeight: 1500,
        maxShadowOpacity: 0.3,
        showCover: true,
        mobileScrollSupport: true, 
        usePortrait: isMobile, // Single page on phone, double on PC
        flippingTime: 1000,
        swipeDistance: 30, // Makes it easier to flip with a thumb
    });

    // 3. Load from HTML and then show the book
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    
    // Make the book visible after it's been calculated
    bookElement.style.display = 'block';

    // 4. Music and Interaction
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');

    // On mobile, audio MUST start after a click
    document.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(e => console.log("Audio waiting for interaction"));
            playBtn.innerText = "⏸ Pause";
        }
    }, { once: true }); // Only triggers on the very first tap

    playBtn.onclick = (e) => {
        e.stopPropagation(); // Prevents flipping page when clicking button
        if (audio.paused) {
            audio.play();
            playBtn.innerText = "⏸ Pause";
        } else {
            audio.pause();
            playBtn.innerText = "▶ Music";
        }
    };
};
