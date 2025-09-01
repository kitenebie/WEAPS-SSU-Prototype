const searchInput = document.getElementById("searchInput");
const filterTags = document.getElementById("filterTags");
let activeRole = "";

// Create filter tags dynamically
const uniquePositions = [...new Set(employees.map((e) => e.position))];
uniquePositions.unshift("All");

uniquePositions.forEach((pos) => {
  const tag = document.createElement("button");
  tag.textContent = pos;
  tag.className =
    "px-3 py-1 text-sm rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 bg-white hover:bg-red-50";
  tag.dataset.role = pos === "All" ? "" : pos;

  tag.addEventListener("click", () => {
    activeRole = tag.dataset.role;
    [...filterTags.children].forEach((btn) =>
      btn.classList.remove("bg-red-600", "text-white")
    );
    tag.classList.add("bg-red-600", "text-red-950");
    filterEmployees();
  });

  if (pos === "All") tag.classList.add("bg-red-600", "text-white");

  filterTags.appendChild(tag);
});

// Filter employees
function filterEmployees() {
  const search = searchInput.value.toLowerCase();
  const filtered = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search) ||
      emp.position.toLowerCase().includes(search);
    const matchesRole = activeRole ? emp.position === activeRole : true;
    return matchesSearch && matchesRole;
  });
  renderCards(filtered);
}

searchInput.addEventListener("input", filterEmployees);
