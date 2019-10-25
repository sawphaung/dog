const img = document.getElementById('random-image');

console.log(img);

const request = async () => {
  // Fetch from API
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  // Generate the Data
  const data = await res.json();
  img.src = data.message;
};

request();
