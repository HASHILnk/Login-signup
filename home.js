document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.querySelector('.video-container');
    const textSection = document.querySelector('.animated-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoContainer.classList.add('active');
                textSection.classList.add('visible'); 
            }
        });
    }, { threshold: 0.3 }); // Trigger animation when 30% of the section is visible

    observer.observe(videoContainer);
    observer.observe(textSection);
});
