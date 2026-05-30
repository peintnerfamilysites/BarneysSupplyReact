export default function OpenModal() {
  const navLinks = document.querySelector(".nav-links");
  // check if navLinks exists already
  if (
    !navLinks.classList.contains("hidden") &&
    navLinks.classList.contains("animate__fadeInDown")
  ) {
    //remove the fade in animation
    navLinks.classList.toggle("animate__fadeInDown");
    //if it does toggle the fade out animation
    navLinks.classList.toggle("animate__fadeOutUp");
    // after the animation is done, toggle the hidden class to hide the modal
    setTimeout(() => {
      navLinks.classList.toggle("hidden");
    }, 500);
  } else if (navLinks.classList.contains("animate__fadeOutUp")) {
    navLinks.classList.toggle("animate__fadeOutUp");
    navLinks.classList.toggle("animate__fadeInDown");
    navLinks.classList.toggle("hidden");
  } else {
    navLinks.classList.toggle("hidden");
    navLinks.classList.toggle("animate__fadeInDown");
  }
}
