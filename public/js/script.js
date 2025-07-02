(() => {
  'use strict';

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

///////////////////////////////////
// DOMContentLoaded logic
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Flash auto-dismiss after 4 seconds
  const alert = document.querySelector(".alert");
  if (alert) {
    setTimeout(() => {
      alert.classList.remove("show");
      alert.classList.add("fade");
      setTimeout(() => alert.remove(), 500);
    }, 4000);
  }

  // ✅ Show thank-you message after subscription (if stored)
  if (sessionStorage.getItem("subscribed") === "true") {
    const flashDiv = document.createElement("div");
    flashDiv.className = "alert alert-success alert-dismissible fade show col-6 offset-3 mt-3";
    flashDiv.role = "alert";
    flashDiv.innerHTML = `
      🎉 Thank you for subscribing!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    const container = document.querySelector(".container");
    if (container) container.prepend(flashDiv);

    sessionStorage.removeItem("subscribed");
  }

  // ✅ Set the session flag when the user submits the form
  const subscribeForm = document.getElementById("subscribe-form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", () => {
      sessionStorage.setItem("subscribed", "true");
    });
  }
});
