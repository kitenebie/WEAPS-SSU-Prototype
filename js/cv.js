const cvPage = document.getElementById("cv-page");
const cvContent = document.getElementById("cv-content");
const backBtn = document.getElementById("backBtn");
const controls = document.getElementById("controls");

const socialModal = document.getElementById("socialModal");
const closeModal = document.getElementById("closeModal");
const modalSocialLinks = document.getElementById("modalSocialLinks");

function showCV(emp) {
  container.classList.add("hidden");
  controls.classList.add("hidden");
  cvPage.classList.remove("hidden");

  cvContent.innerHTML = `
  <div class="flex items-center gap-6 relative mb-8 col-span-3">
    <img src="${emp.profile}" 
         class="w-28 h-28 rounded-full ring-4 ring-red-500/30 object-cover">
    <div>
      <h2 class="text-2xl font-bold">${emp.name}</h2>
      <p class="text-gray-500 dark:text-gray-400">${emp.position} • ${
    emp.department
  }</p>
      <p class="text-sm text-gray-400 dark:text-gray-500">Employee ID: ${
        emp.id
      }</p>
    </div>

    <!-- Hire Button -->
    <button onclick="openSocials()"
      class="absolute right-0 top-0 bg-red-600 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition">
      Hire
    </button>
  </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Left Column -->
    <div class="space-y-6">
      <!-- Contact -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">📞 Contact</h3>
        <p><strong>Email:</strong> <a href="mailto:${
          emp.email
        }" class="text-red-600 hover:underline">${emp.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${
          emp.phone
        }" class="text-red-600 hover:underline">${emp.phone}</a></p>
        <p><strong>Location:</strong> ${emp.location}</p>
      </div>

      <!-- Social Media -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">🌐 Social Media</h3>
        <div class="flex flex-wrap gap-3">
          <a href="${
            emp.socials.linkedin
          }" target="_blank" class="flex items-center gap-2 text-blue-700 hover:underline">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" class="w-5 h-5"/> LinkedIn
          </a>
          <a href="${
            emp.socials.github
          }" target="_blank" class="flex items-center gap-2 text-gray-800 hover:underline">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" class="w-5 h-5"/> GitHub
          </a>
          <a href="${
            emp.socials.twitter
          }" target="_blank" class="flex items-center gap-2 text-sky-500 hover:underline">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" class="w-5 h-5"/> Twitter
          </a>
          <a href="${
            emp.socials.facebook
          }" target="_blank" class="flex items-center gap-2 text-blue-600 hover:underline">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" class="w-5 h-5"/> Facebook
          </a>
        </div>
      </div>

      <!-- Employment Status -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">💼 Status</h3>
        <p>${emp.status} | ${emp.active ? "Active ✅" : "Inactive ❌"}</p>
      </div>
    </div>

    <!-- Middle Column -->
    <div class="space-y-6">
      <!-- Skills -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">🛠️ Skills</h3>
        <div class="flex flex-wrap gap-2">
          ${emp.skills
            .map(
              (skill) =>
                `<span class="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200">${skill}</span>`
            )
            .join("")}
        </div>
      </div>

      <!-- Experience -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">📂 Experience</h3>
        <p class="text-gray-700 dark:text-gray-300">${emp.experienceDetails}</p>
        <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300 mt-2">
          <li>Worked on ${emp.position} projects at ${emp.company}</li>
          <li>Collaborated with ${emp.department} team</li>
          <li>Specialized in ${emp.skills.join(", ")}</li>
        </ul>
      </div>
    </div>

    <!-- Right Column -->
    <div class="space-y-6">
      <!-- Achievements -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">🏆 Achievements</h3>
        <h4 class="font-medium">Professional:</h4>
        <ul class="list-disc ml-6 mb-3 text-gray-700 dark:text-gray-300">
          ${emp.achievements.work.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <h4 class="font-medium">Academic:</h4>
        <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300">
          ${emp.achievements.education
            .map((item) => `<li>${item}</li>`)
            .join("")}
        </ul>
      </div>
    </div>

    <!-- Projects (Span 2 Columns) -->
    <div></div>
    <div class="col-span-1 md:col-span-2 lg:col-span-2 space-y-4">
      <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">🚀 Projects</h3>
      <div class="flex flex-wrap gap-4">
        ${emp.projects
          .map(
            (proj) => `
            <a href="${proj.github}" target="_blank" class="w-44 group">
              <img src="${proj.image}" alt="${proj.title}" 
                   class="rounded-lg shadow-md group-hover:opacity-80 transition duration-200">
              <p class="mt-2 text-center text-gray-700 dark:text-gray-300 font-medium group-hover:text-red-500">
                ${proj.title}
              </p>
            </a>
          `
          )
          .join("")}
      </div>
      
    </div>
  </div>
`;
  cvContent.dataset.socials = JSON.stringify(emp.socials);
}

// Open modal with socials
function openSocials(empId) {
  const socials = JSON.parse(cvContent.dataset.socials);
  modalSocialLinks.innerHTML = `
  <div class="grid grid-cols-2 gap-4">
    <a href="${socials.linkedin || "#"}" target="_blank"
      class="flex h-16 items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 
        5-5v-14c0-2.8-2.2-5-5-5zM8 19h-3v-10h3v10zM6.5 
        7.5c-1 0-1.8-.8-1.8-1.8s.8-1.7 1.8-1.7c1 
        0 1.8.8 1.8 1.8s-.8 1.7-1.8 1.7zM20 
        19h-3v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.6.7-1.9 
        1.3-.1.2-.1.5-.1.8v5.7h-3v-10h3v1.4c.4-.6 
        1.2-1.5 2.9-1.5 2.1 0 3.8 1.4 3.8 4.4v5.7z"/>
      </svg>
      LinkedIn
    </a>

    <a href="${socials.github || "#"}" target="_blank"
      class="flex h-16 items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5c-6.6 0-12 5.4-12 12 
        0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 
        1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.6.3-1.1.6-1.3-2.7-.3-5.5-1.3-5.5-5.9 
        0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 
        0 0 1-.3 3.3 1.2.9-.2 1.9-.4 2.9-.4 
        1 0 2 .1 2.9.4 2.3-1.5 3.3-1.2 
        3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 
        1.8 1.2 3.1 0 4.6-2.8 5.6-5.5 
        5.9.3.3.6.8.6 1.7v2.6c0 .3.2.7.8.6 
        4.8-1.6 8.2-6.1 8.2-11.4 
        0-6.6-5.4-12-12-12z"/>
      </svg>
      GitHub
    </a>

    <a href="${socials.twitter || "#"}" target="_blank"
      class="flex h-16 items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-lg shadow hover:bg-sky-600 transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.6c-.9.4-1.9.6-2.9.8 
        1-.6 1.8-1.6 2.1-2.7-.9.6-2 
        1-3.1 1.2-.9-.9-2.2-1.4-3.5-1.4-2.7 
        0-4.8 2.2-4.8 4.8 0 .4 
        0 .8.1 1.1-4-.2-7.6-2.1-10-5-.4.7-.6 
        1.6-.6 2.5 0 1.7.9 3.3 2.2 
        4.1-.8 0-1.6-.2-2.3-.6v.1c0 2.4 
        1.7 4.4 3.9 4.9-.4.1-.9.2-1.4.2-.3 
        0-.7 0-1-.1.7 2.1 2.7 3.6 5 
        3.7-1.9 1.5-4.3 2.4-6.9 
        2.4-.4 0-.8 0-1.2-.1 2.5 
        1.6 5.5 2.5 8.7 2.5 10.4 
        0 16.1-8.6 16.1-16.1v-.7c1-.7 
        1.8-1.6 2.5-2.6z"/>
      </svg>
      Twitter
    </a>

    <a href="${socials.facebook || "#"}" target="_blank"
      class="flex h-16 items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 0h-21.4c-.7 
        0-1.3.6-1.3 1.3v21.4c0 
        .7.6 1.3 1.3 1.3h11.5v-9.3h-3.1v-3.6h3.1v-2.7c0-3.1 
        1.9-4.8 4.6-4.8 1.3 0 2.5.1 
        2.9.1v3.3h-2c-1.6 0-1.9.8-1.9 
        1.9v2.3h3.8l-.5 3.6h-3.3v9.3h6.5c.7 
        0 1.3-.6 1.3-1.3v-21.4c0-.7-.6-1.3-1.3-1.3z"/>
      </svg>
      Facebook
    </a>
  </div>
`;

  // ✅ Ensure hidden is removed before adding flex
  socialModal.classList.remove("hidden");
  socialModal.classList.add("flex");
}

// Close modal
closeModal.addEventListener("click", () => {
  socialModal.classList.add("hidden");
  socialModal.classList.remove("flex");
});

backBtn.addEventListener("click", () => {
  cvPage.classList.add("hidden");
  container.classList.remove("hidden");
  controls.classList.remove("hidden");
});
