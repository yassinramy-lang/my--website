const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "فتح القائمة");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const copyButton = document.querySelector("#copyEmail");
const copyHint = document.querySelector("#copyHint");

copyButton?.addEventListener("click", async () => {
  const email = "your.email@example.com"; // غيّر هذا البريد في index.html وscript.js
  try {
    await navigator.clipboard.writeText(email);
    copyHint.textContent = "تم نسخ البريد التجريبي. لا تنسَ تغييره إلى بريدك.";
  } catch {
    copyHint.textContent = "البريد التجريبي: " + email;
  }
});
