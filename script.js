const container = document.getElementById("dogContainer");
const refreshBtn = document.getElementById("refreshBtn");
const breedFilter = document.getElementById("breedFilter");

let allDogs = [];

async function fetchDogs() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const data = await res.json();
  allDogs = data.message;
  displayDogs(allDogs);
}

function displayDogs(dogList) {
  container.innerHTML = "";
  dogList.slice(0, 5).forEach(dogUrl => {
    const img = document.createElement("img");
    img.src = dogUrl;
    img.alt = "Dog";
    container.appendChild(img);
  });
}

refreshBtn.addEventListener("click", fetchDogs);

breedFilter.addEventListener("input", () => {
  const keyword = breedFilter.value.toLowerCase();
  const filtered = allDogs.filter(url => url.includes(keyword));
  displayDogs(filtered);
});

fetchDogs(); // initial load
