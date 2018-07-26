 $('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        visibleOnly: false,
        onError: function(element) {
        console.log('error loading ' + element.data('src'));
        }
    });