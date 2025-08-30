const container = document.getElementById("card-container");

function renderCards(data) {
  container.innerHTML = "";
  if (data.length === 0) {
    container.innerHTML = `<p class="col-span-full text-center text-gray-500 dark:text-gray-400">No employees found.</p>`;
    return;
  }

  data.forEach((emp) => {
    const card = document.createElement("div");
    card.className =
      "cursor-pointer bg-white p-6 dark:bg-gray-800 rounded-2xl shadow-lg relative transition transform hover:-translate-y-1 hover:shadow-2xl";
    card.innerHTML = `
    <span class="bg-[#7F1D1D] h-4 w-full rounded-t-2xl absolute left-0 top-0"></span>
    <div class="flex items-center p-4 relative justify-between mb-4">
        <div class="flex items-center gap-2">
          <img src="${emp.logo}" alt="Company Logo" class="w-7 h-7 rounded-md object-cover">
          <span class="text-sm font-medium text-gray-500 dark:text-gray-400">${emp.company}</span>
        </div>
        <span class="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
          emp.active
            ? "bg-green-50 text-green-700 ring-1 ring-green-200 dark:bg-green-900/40 dark:text-green-300 dark:ring-green-700"
            : "bg-red-50 text-red-700 ring-1 ring-red-200 dark:bg-red-900/40 dark:text-red-300 dark:ring-red-700"
        }">
          <span class="w-1.5 h-1.5 rounded-full ${emp.active ? "bg-green-500" : "bg-red-500"}"></span>
          ${emp.active ? "Active" : "Inactive"}
        </span>
      </div>
      <div class="flex items-center gap-4 mb-4">
        <img src="${emp.profile}" alt="Profile Picture" class="w-20 h-20 rounded-full object-cover ring-4 ring-green-500/20">
        <div>
          <h1 class="text-lg font-semibold text-gray-800 dark:text-gray-100 leading-tight">${emp.name}</h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm">${emp.position} • ${emp.department}</p>
          <p class="text-gray-400 dark:text-gray-500 text-xs mt-0.5">Employee ID: ${emp.id}</p>
        </div>
      </div>
      <div class="space-y-3 text-sm">
        <div class="grid grid-cols-3 gap-2"><span class="col-span-1 text-gray-500 dark:text-gray-400">Email</span><span class="col-span-2 font-medium">${emp.email}</span></div>
        <div class="grid grid-cols-3 gap-2"><span class="col-span-1 text-gray-500 dark:text-gray-400">Phone</span><span class="col-span-2 font-medium">${emp.phone}</span></div>
        <div class="grid grid-cols-3 gap-2"><span class="col-span-1 text-gray-500 dark:text-gray-400">Location</span><span class="col-span-2 font-medium">${emp.location}</span></div>
        <div class="grid grid-cols-3 gap-2"><span class="col-span-1 text-gray-500 dark:text-gray-400">Status</span><span class="col-span-2"><span class="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-red-50 text-red-700">${emp.status}</span></span></div>
        <div class="pt-1"><p class="text-xs text-gray-500 dark:text-gray-400">Skills</p><div class="mt-2 flex flex-wrap gap-2">${emp.skills.map(s => `<span class="px-2.5 py-1 text-xs rounded-full bg-gray-100">${s}</span>`).join("")}</div></div>
      </div>
    `;
    card.addEventListener("click", () => showCV(emp));
    container.appendChild(card);
  });
}
