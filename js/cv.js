const cvPage = document.getElementById("cv-page");
const cvContent = document.getElementById("cv-content");
const backBtn = document.getElementById("backBtn");
const controls = document.getElementById("controls");

function showCV(emp) {
  container.classList.add("hidden");
  controls.classList.add("hidden");
  cvPage.classList.remove("hidden");

  cvContent.innerHTML = `
    <div class="flex items-center gap-6 mb-6">
      <img src="${
        emp.profile
      }" class="w-28 h-28 rounded-full ring-4 ring-red-500/30 object-cover">
      <div>
        <h2 class="text-2xl font-bold">${emp.name}</h2>
        <p class="text-gray-500 dark:text-gray-400">${emp.position} • ${
    emp.department
  }</p>
        <p class="text-sm text-gray-400 dark:text-gray-500">Employee ID: ${
          emp.id
        }</p>
      </div>
    </div>

    <div class="space-y-6">
      <!-- Contact -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">
          📞 Contact Information
        </h3>
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
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">
          🌐 Social Media
        </h3>
        <div class="flex gap-4">
          <a href="${
            emp.socials.linkedin
          }" target="_blank" class="flex items-center gap-2 text-blue-700 hover:underline">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" class="w-5 h-5" alt="LinkedIn"/> LinkedIn
          </a>
          <a href="${
            emp.socials.github
          }" target="_blank" class="flex items-center gap-2 text-gray-800 hover:underline">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" class="w-5 h-5" alt="GitHub"/> GitHub
          </a>
          <a href="${
            emp.socials.twitter
          }" target="_blank" class="flex items-center gap-2 text-sky-500 hover:underline">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" class="w-5 h-5" alt="Twitter"/> Twitter
          </a>
          <a href="${
            emp.socials.facebook
          }" target="_blank" class="flex items-center gap-2 text-blue-600 hover:underline">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" class="w-5 h-5" alt="Facebook"/> Facebook
          </a>
        </div>
      </div>

      <!-- Employment Status -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">
          💼 Employment Status
        </h3>
        <p>${emp.status} | ${emp.active ? "Active" : "Inactive"}</p>
      </div>

      <!-- Skills -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">
          🛠️ Skills
        </h3>
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
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">
          📂 Work Experience
        </h3>
        <p class="text-gray-700 dark:text-gray-300">${emp.experienceDetails}</p>
        <ul class="list-disc ml-6 text-gray-700 dark:text-gray-300 mt-2">
          <li>Worked on multiple ${emp.position} projects at ${emp.company}</li>
          <li>Collaborated with ${emp.department} team</li>
          <li>Specialized in ${emp.skills.join(", ")}</li>
        </ul>
      </div>

      <!-- Achievements -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">
          🏆 Achievements
        </h3>
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

      <!-- Personal Projects -->
      <div>
        <h3 class="flex items-center gap-2 font-semibold text-lg mb-2">
          🚀 Personal Projects
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${emp.projects
            .map(
              (proj) => `
              <a href="${proj.github}" target="_blank" class="block group">
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
}

backBtn.addEventListener("click", () => {
  cvPage.classList.add("hidden");
  container.classList.remove("hidden");
  controls.classList.remove("hidden");
});
