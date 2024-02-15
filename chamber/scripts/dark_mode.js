document.addEventListener('DOMContentLoaded', function() {
    var toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
    var body = document.querySelector('body');

    toggleSwitch.addEventListener('change', function() {
        if(this.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        } 
    });
});