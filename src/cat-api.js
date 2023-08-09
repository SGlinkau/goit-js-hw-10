const apiKey = "live_JsN6r1FxxYTYJD5FiAycR2AgBeRInhCIqXuLzV1LCMjPijnKU2rVJJpDOjTfhmVg";

export function fetchBreeds() {
  return fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key": apiKey,
    },
  })
    .then(response => response.json())
    .then(data => data)
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
    .then(data => data[0])
    .catch(error => {
      throw error;
    });
}
