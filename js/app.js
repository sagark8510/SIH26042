
// Global State Keys
const STATE_KEY_LANG = "sih_selected_lang";
const STATE_KEY_ROLE = "sih_user_role";

// App Core Controller
const App = {
  // Current Target Language
  getLanguage: () => localStorage.getItem(STATE_KEY_LANG) || "Santhali",
  setLanguage: (lang) => localStorage.setItem(STATE_KEY_LANG, lang),

  // Current User Role: 'student' or 'teacher'
  getRole: () => localStorage.getItem(STATE_KEY_ROLE) || "student",
  setRole: (role) => localStorage.setItem(STATE_KEY_ROLE, role),

  // Common UI Initializer
  initPage: (pageName) => {
    // Top bar language badge auto-update
    const langBadge = document.getElementById("currentLangDisplay");
    if (langBadge) {
      langBadge.textContent = "🌐 " + App.getLanguage();
    }

    // Mark active bottom nav item automatically
    const navLinks = document.querySelectorAll(".nav-item");
    navLinks.forEach((link) => {
      if (link.getAttribute("data-page") === pageName) {
        link.classList.add("active");
      }
    });
  },

  // Safe Navigation Helper
  navigateTo: (pageUrl) => {
    window.location.href = pageUrl;
  }
};

// Global error-free initializer on load
window.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const pageId = body.getAttribute("data-page") || "home";
  App.initPage(pageId);
});
