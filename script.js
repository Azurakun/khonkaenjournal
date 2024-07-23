window.onload = function() {
    const masks = document.querySelectorAll('.mask');
    setTimeout(() => {
        masks.forEach(mask => {
            mask.style.height = '0%';
        });
    }, 300);  // Delay before the animation starts

}