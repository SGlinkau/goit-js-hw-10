import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

error.style.display = "none";

document.addEventListener("DOMContentLoaded", () => {
  fetchBreeds()
    .then(data => {
      const breedSelect = new SlimSelect({
        select: ".breed-select",
        placeholder: "Select a breed",
      });

      data.forEach(breed => {
        breedSelect.addData({
          text: breed.name,
          value: breed.id,
        });
      });

      loader.style.display = "none";
    })
    .catch(err => {
      console.error("Error fetching breed list:", err);

      loader.style.display = "none";
      catInfo.style.display = "none";
      error.style.display = "block";
    });

  const breedSelect = document.querySelector(".breed-select");

  breedSelect.addEventListener("change", function () {
    const selectedBreedId = this.value;

    loader.style.display = "block";
    catInfo.style.display = "none";
    error.style.display = "none";

    fetchCatByBreed(selectedBreedId)
      .then(data => {
        const catImageUrl = data.url;
        const catDescription = data.breeds[0].description;
        const breedTemperament = data.temperament;
        const breedName = data.breeds[0].name;

        catInfo.innerHTML = `
          <div style="display: flex; align-items: center;">
            <img src="${catImageUrl}" alt="Cat" style="max-width: 400px; max-height: 400px; margin-top: 40px; margin-right: 20px;">
            <div>
              <h2>${breedName}</h2>
              <p>${catDescription}</p>
              <p><strong>Temperament:</strong> ${breedTemperament}</p>
            </div>
          </div>
        `;

        loader.style.display = "none";
        catInfo.style.display = "block";
      })
      .catch(err => {
        console.error("Error fetching cat info:", err);
        loader.style.display = "none";
        catInfo.style.display = "none";
        error.style.display = "block";
      });
  });
});
