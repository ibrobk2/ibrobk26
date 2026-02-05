// add animation to the container
const container = document.querySelector('.container');
container.style.animation = 'fadeIn 2s ease-in-out';
// add keyframes for the fadeIn animation
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}`;
document.head.appendChild(style);
