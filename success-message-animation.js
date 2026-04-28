$(document).ready(function () {
    function addProgressBar(successMessage) {
        if (successMessage.find('.progress-container').length) return;

        var progressContainer = $('<div class="progress-container"></div>');
        var progressBar = $('<div class="progress-bar"></div>');

        progressContainer.append(progressBar);
        successMessage.append(progressContainer);

        // Start from full
        progressBar.css({
            width: '100%',
            transition: 'width 5s linear'
        });

        // Force reflow then animate
        setTimeout(function () {
            progressBar.css('width', '0%');
        }, 50);

        // Hide exactly after 10s
        setTimeout(function () {
            successMessage.fadeOut(300);
        }, 5000);
    }

    // Initial check
    var initialSuccessMessage = $('#t_Alert_Success');
    if (initialSuccessMessage.length) {
        addProgressBar(initialSuccessMessage);
    }

    // Watch for dynamic APEX messages
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            $(mutation.addedNodes).each(function () {
                if ($(this).attr('id') === 't_Alert_Success') {
                    addProgressBar($(this));
                } else if ($(this).find('#t_Alert_Success').length) {
                    addProgressBar($(this).find('#t_Alert_Success'));
                }
            });
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

});


/* succecc message progress bar css*/
.progress-container {
    width: 100%;
    background-color: #278701;
    margin-top: 10px;
    overflow: hidden;
}

.progress-bar {
    width: 100%;
    height: 5px;
    background-color: #fff700b5;
    transition: width 5s linear;
} 
