

import "./style.css";

document.querySelector("#app").innerHTML = `
<div id="loader">

    <div class="loader-logo">

        SA

    </div>

    <div class="loader-line"></div>

    <h2>

        SENODH ANAVARATNE

    </h2>

    <p id="loadingText">

    Preparing Experience...

</p>

</div>
<nav>

    <div class="logo">SA</div>

    <div class="hamburger">

        ☰

    </div>

    <div class="nav-links">

        <a href="#">Home</a>
        <a href="#showreel">Showreel</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>

    </div>

</nav>

<section class="hero">

    <video class="hero-video" autoplay muted loop playsinline fetchpriority="high">
        <source src="videos/background.mp4" type="video/mp4">
    </video>

    <div class="hero-overlay"></div>

    <div class="hero-content">

        <div class="badge">
            ● Available For Projects
        </div>

        <h1>
    AUTOMOTIVE
    <span>FILMMAKER</span>
</h1>

<h2>
    Senodh Anavaratne
</h2>

<p>
    Creating cinematic automotive films,
    commercial campaigns and social media
    content that captures speed, emotion and detail.
</p>

        <div class="buttons">
            <a href="#showreel">Watch Showreel</a>
            <a href="#portfolio">View Portfolio</a>
        </div>

    </div>

</section>

<section id="showreel" class="showreel">

    <h2 class="section-title">
        SHOWREEL
    </h2>

    <p class="section-subtitle">
        A collection of my best automotive work.
    </p>

    
<div class="showreel-wrapper"
     onclick="openVideo('/videos/showreel.mp4')">

    <img src="images/showreel.webp"loading="lazy"
decoding="async" alt="Showreel">

    <div class="showreel-overlay">

        <div class="play-button">

            ▶

        </div>

        <h3>Play Showreel</h3>

    </div>

</div>
</section>

<section id="portfolio" class="portfolio">

    <h2 class="section-title">
        Featured Projects
    </h2>

    <p class="section-subtitle">
        Cinematic automotive films, reels and event coverage.
    </p>

    <div class="portfolio-grid">

        <div class="portfolio-card"
     onclick="openVideo('/videos/havelock.mp4')">

            <img src="images/havelock.webp"loading="lazy"
decoding="async" alt="Havelock Mall">

            <div class="portfolio-overlay">

                <span class="project-tag">Car Show</span>

                <h3>Havelock Mall</h3>

                <p>CapCut</p>

                <div class="watch-film">

    ▶ Watch Film

</div>

            </div>

        </div>

        <div class="portfolio-card"
     onclick="openVideo('/videos/Port_City.mp4')">

            <img src="images/Port_City.webp"loading="lazy"
decoding="async" alt="Port">

            <div class="portfolio-overlay">

                <span class="project-tag">Cinematic</span>

                <h3>Port City</h3>

                <p>Premiere Pro</p>

                <div class="watch-film">

    ▶ Watch Film

</div>

            </div>

        </div>

        <div class="portfolio-card"
     onclick="openVideo('/videos/BMW.mp4')">

            <img src="images/BMW.webp"loading="lazy"
decoding="async" alt="BMW">

            <div class="portfolio-overlay">

                <span class="project-tag">Rolling Shots</span>

                <h3>Parking Lot BMWs</h3>

                <p>CapCut</p>

                <div class="watch-film">

    ▶ Watch Film

</div>

            </div>

        </div>

        <div class="portfolio-card"
     onclick="openVideo('/videos/Arcade.mp4')">

            <img src="images/Arcade.webp" loading="lazy"
decoding="async" alt="Arcade">

            <div class="portfolio-overlay">

                <span class="project-tag">Car meet</span>

                <h3>Arcade Meet</h3>

                <p>Premiere Pro</p>

                <div class="watch-film">

    ▶ Watch Film

</div>

            </div>

        </div>

    </div>

</section>

<section class="stats">

    <div class="stat">

        <h2>20+</h2>

        <p>Projects</p>

    </div>

    <div class="stat">

        <h2>300K+</h2>

        <p>Views</p>

    </div>

    <div class="stat">

        <h2>60FPS</h2>

        <p>Capture</p>

    </div>

    <div class="stat">

        <h2>4K</h2>

        <p>Delivery</p>

    </div>

</section>

<section id="services" class="services">

    <h2 class="section-title">
        Services
    </h2>

    <p class="section-subtitle">
        Professional automotive content for brands, events and social media.
    </p>

    <div class="services-grid">

        <div class="service-card">

            <h3>🎥 Automotive Videography</h3>

            <p>
                Cinematic filming of cars using creative camera movements,
                rolling shots and event coverage.
            </p>

        </div>

        <div class="service-card">

            <h3>🎬 Video Editing</h3>

            <p>
                Professional editing with smooth transitions, speed ramps,
                sound design and storytelling.
            </p>

        </div>

        <div class="service-card">

            <h3>🎨 Color Grading</h3>

            <p>
                Premium cinematic colors designed to make every vehicle stand out.
            </p>

        </div>

        <div class="service-card">

            <h3>📱 Social Media Content</h3>

            <p>
                Instagram Reels, TikTok videos and YouTube Shorts optimized for engagement.
            </p>

        </div>

    </div>

</section>

<section id="about" class="about">

    <h2 class="section-title">
        About Me
    </h2>

    <div class="about-box">

        <p>
            I'm Senodh Anavaratne, an automotive videographer and video editor
            based in Sri Lanka. I create cinematic films, social media content
            and promotional videos that capture speed, emotion and detail.
        </p>

        <p>
            My workflow includes filming in 4K on an iPhone 16 and editing with
            Adobe Premiere Pro and CapCut to deliver polished,
            engaging content.
        </p>

    </div>

</section>

<section id="contact" class="contact">

    <h2 class="section-title">
        Let's Work Together
    </h2>

    <p class="section-subtitle">
        Available for freelance projects and collaborations.
    </p>

    <div class="contact-buttons">

        <a href="mailto:senodhanavaratne@gmail.com">Email</a>

        <a href="https://www.instagram.com/frostbound0_0/" target="_blank">Instagram</a>

        <a href="https://www.tiktok.com/@frostbound0_0" target="_blank">TikTok</a>

    </div>

</section>

<div id="videoModal" class="video-modal">

    <div class="video-container">

        <span class="close-video">

            ✕

        </span>

        <video
        id="popupVideo"
        controls
        autoplay>

        </video>

    </div>

</div>
`;
/* Cursor Glow */

const glow = document.createElement("div");

glow.classList.add("cursor-glow");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});


function createShootingStar() {

    const star = document.createElement("div");

    star.classList.add("shooting-star");

    document.body.appendChild(star);

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * (window.innerHeight * 0.4);

    let vx = 12 + Math.random() * 8;
    let vy = 4 + Math.random() * 3;

    let life = 0;

    function animate() {

        life++;

        x += vx;
        y += vy;

        vx *= 0.995;
        vy *= 0.995;

        star.style.left = x + "px";
        star.style.top = y + "px";

        star.style.opacity = 1 - life / 80;

        if (life < 80) {
            requestAnimationFrame(animate);
        } else {
            star.remove();
        }
    }

    animate();
}
setInterval(() => {

    if (Math.random() > 0.5) {
        createShootingStar();
    }
}, 100);




const modal=document.getElementById("videoModal");

const popup=document.getElementById("popupVideo");

function openVideo(video){

modal.style.display="flex";

popup.src=video;

popup.play();

}
window.openVideo = openVideo;

document.querySelector(".close-video").onclick=()=>{

popup.pause();

popup.currentTime=0;

popup.src="";

modal.style.display="none";

};

modal.onclick=(e)=>{

if(e.target===modal){

popup.pause();

popup.currentTime=0;

popup.src="";

modal.style.display="none";

}

};



const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});
document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

const loader = document.getElementById("loader");
const heroVideo = document.querySelector(".hero-video");

let loaderHidden = false;

function hideLoader() {

    if (loaderHidden) return;

    loaderHidden = true;

    heroVideo.classList.add("loaded");

    loader.classList.add("hide");

}

heroVideo.addEventListener("canplaythrough", hideLoader);

// Safety fallback
setTimeout(hideLoader, 15000);