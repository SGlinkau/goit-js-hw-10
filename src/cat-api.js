const apiKey = "live_JsN6r1FxxYTYJD5FiAycR2AgBeRInhCIqXuLzV1LCMjPijnKU2rVJJpDOjTfhmVg";

export function fetchBreeds() {
  return fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key": apiKey,
    },
  })
    .then(response => response.json())
    .catch(error => {
      throw error;
    });
}

export function fetchCatByBreed(breedId) {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
    headers: {
      "x-api-key": apiKey,
    },
  })
    .then(response => response.json())
    .then(catData => {
      return {
        ...catData[0],
        name: catData[0].breeds[0].name,
        description: catData[0].breeds[0].description,
        temperament: catData[0].breeds[0].temperament,
      };
    })
    .catch(error => {
      throw error;
    });
}
