const lightbox = document.getElementById('lightbox');
// Finds the overlay element by ID once so the script can show and hide it without repeatedly searching the page.
const lightboxImage = document.getElementById('lightboxImage');
// Finds the image inside the overlay so its source and alternative text can be replaced with the selected thumbnail's values.
const closeLightbox = document.getElementById('closeLightbox');
// Finds the close button so a click on it can dismiss the image overlay.

document.querySelectorAll('.gallery-item').forEach((item) => {
// Selects every gallery button and runs the following setup function for each individual thumbnail.
  item.addEventListener('click', () => {
  // Registers a click handler that runs when the current gallery thumbnail is activated by mouse or keyboard.
    const image = item.querySelector('img');
    // Finds the image nested inside the selected gallery button so its source and alternative text can be reused.
    lightboxImage.src = image.src;
    // Copies the selected thumbnail's image URL into the larger lightbox image element.
    lightboxImage.alt = image.alt;
    // Copies the thumbnail's descriptive alternative text to preserve accessibility in the enlarged view.
    lightbox.classList.add('open');
    // Adds the open class, which changes the lightbox CSS from hidden to visible.
    lightbox.setAttribute('aria-hidden', 'false');
    // Updates the accessibility state to tell assistive technology that the overlay is now visible.
  });
  // Ends the click handler for the current gallery item.
});
// Ends the loop that attaches click handlers to every gallery item.

function closeGallery() {
// Defines one reusable function so every closing method performs the same cleanup steps.
  lightbox.classList.remove('open');
  // Removes the open class so the CSS hides the overlay again.
  lightbox.setAttribute('aria-hidden', 'true');
  // Updates the accessibility state to indicate that the overlay is hidden.
  lightboxImage.src = '';
  // Clears the image source after closing so the previous image is not unnecessarily retained.
}
// Ends the reusable gallery-closing function.

closeLightbox.addEventListener('click', closeGallery);
// Connects the close button to the closeGallery function so clicking the X closes the overlay.
lightbox.addEventListener('click', (event) => {
// Adds a click handler to the overlay background so users can also close it by clicking outside the image.
  if (event.target === lightbox) closeGallery();
  // Checks that the click occurred on the overlay itself, rather than on the image or close button, before closing.
});
// Ends the overlay background click handler.
document.addEventListener('keydown', (event) => {
// Listens for keyboard input across the document so the lightbox can be closed without a mouse.
  if (event.key === 'Escape') closeGallery();
  // Closes the lightbox whenever the user presses the Escape key.
});
// Ends the keyboard event handler.
