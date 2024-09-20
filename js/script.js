document.addEventListener('DOMContentLoaded', function() {
    // Get all the modals
    var modals = document.querySelectorAll('.modal');

    // Get all the buttons that open the modals
    var btns = document.querySelectorAll('.open-modal');

    // Add event listeners to all the buttons
    btns.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            var targetModalId = btn.getAttribute('data-target');
            var targetModal = document.querySelector(targetModalId);
            if (targetModal) {
                targetModal.style.display = 'block';
            }
        });
    });

    // Get all the <span> elements that close the modals
    var spans = document.querySelectorAll('.close');

    // Add event listeners to all the close buttons
    spans.forEach(function(span) {
        span.addEventListener('click', function() {
            var targetModalId = span.getAttribute('data-target');
            var targetModal = document.querySelector(targetModalId);
            if (targetModal) {
                targetModal.style.display = 'none';

                const video = targetModal.querySelector('video');
                if (video) {
                    video.pause(); // pause video
                    video.currentTime = 0; // position initial
                }
            }
        });
    });

    // Close the modal if clicked outside of it
    window.addEventListener('click', function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                modal.style.display = 'none';

                const video = modal.querySelector('video');
                if (video) {
                    video.pause(); // pause video
                    video.currentTime = 0; // position initial
                }
            }
        });
    });
});
