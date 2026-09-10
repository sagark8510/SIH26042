// Central Controller - Manages Language & Role
const App = {
  getLanguage: function () {
    return localStorage.getItem("bhasha_lang") || "Santhali";
  },
  setLanguage: function (lang) {
    localStorage.setItem("bhasha_lang", lang);
  },
  getRole: function () {
    return localStorage.getItem("bhasha_role") || "student";
  },
  setRole: function (role) {
    localStorage.setItem("bhasha_role", role);
  },
  initHeader: function () {
    const badge = document.getElementById("currentLangDisplay");
    if (badge) {
      badge.textContent = "🌐 " + this.getLanguage();
    }
  },
  navigateTo: function (url) {
    window.location.href = url;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  App.initHeader();
});
