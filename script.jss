document.addEventListener("DOMContentLoaded", () => {
  // 🌙 Dark Mode Toggle
  const toggleBtn = document.getElementById("toggleTheme");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // 🔢 Counter
  let count = 0;
  const counterBtn = document.getElementById("counterBtn");
  const counterDisplay = document.getElementById("counterDisplay");
  counterBtn.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = `Count: ${count}`;
  });

  // ❓ FAQ Toggle
  const question = document.querySelector(".faq .question");
  const answer = document.querySelector(".faq .answer");
  question.addEventListener("click", () => {
    answer.classList.toggle("hidden");
  });

  // 📂 Dropdown
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownMenu = document.getElementById("dropdownMenu");
  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });

  // 📑 Tabs
  const tabs = document.querySelectorAll(".tabBtn");
  const tabContents = document.querySelectorAll(".tabContent");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // remove active class from all
      tabs.forEach(t => t.classList.remove("active"));
      tabContents.forEach(c => c.classList.add("hidden"));

      // activate selected tab
      tab.classList.add("active");
      document.getElementById(tab.dataset.tab).classList.remove("hidden");
    });
  });

  // 📝 Form Validation
  const form = document.getElementById("signupForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
      formMessage.textContent = "⚠ Please fill in all fields.";
      formMessage.style.color = "red";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      formMessage.textContent = "⚠ Please enter a valid email.";
      formMessage.style.color = "red";
      return;
    }

    if (password.length < 6) {
      formMessage.textContent = "⚠ Password must be at least 6 characters.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "✅ Registration successful!";
    formMessage.style.color = "green";
    form.reset();
  });
});
