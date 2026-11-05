// Ride Nippy homepage interactions
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();


// Product details page: reflect the category selected from the catalogue.
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("category");
const detailTitle = document.getElementById("detail-title");
const detailCategory = document.getElementById("detail-category");
const detailDescription = document.getElementById("detail-description");
const detailEnquiry = document.getElementById("detail-enquiry");

if (selectedCategory) {
  const safeCategory = selectedCategory.trim();
  if (detailTitle) detailTitle.innerHTML = `${safeCategory.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]))} <em>details</em>`;
  if (detailCategory) detailCategory.textContent = safeCategory;
  if (detailDescription) detailDescription.textContent = `You are viewing the ${safeCategory} category. Contact Ride Nippy to confirm available varieties, product specifications, packaging, quantities and current availability.`;
  if (detailEnquiry) detailEnquiry.href = `business-enquiry.html?product=${encodeURIComponent(safeCategory)}`;
}

// Enquiry forms open the visitor's email application.
// Replace the placeholder address below with the company's verified email before launch.
const COMPANY_EMAIL = "ADD-COMPANY-EMAIL-HERE";

document.querySelectorAll("[data-mailto-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    if (COMPANY_EMAIL === "ADD-COMPANY-EMAIL-HERE") {
      const status = form.querySelector(".form-status");
      if (status) status.textContent = "Form layout is ready, but the company's verified email address has not been configured. Add it in script.js before publishing.";
      return;
    }

    const formData = new FormData(form);
    const lines = [];
    for (const [key, value] of formData.entries()) lines.push(`${key}: ${value}`);
    const subject = form.dataset.subject || "Ride Nippy website enquiry";
    const mailto = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = mailto;
  });
});
