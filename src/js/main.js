let URL = 'https://api.chucknorris.io/jokes/random';

const getRamdomJoke = async () => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
    refreshJoke();
    updateJoke(response.data.value);
  } catch (error) {
    console.error(error);
  }
}

getRamdomJoke();

const updateJoke = joke => {
  document.getElementById('joke').textContent = joke;
}

const refreshJoke = () => {
  document.getElementById('joke').textContent = '';
}

// HELPER Functions
const capitalizeTxt = txt => {
  // If you want lowercase the rest txt.slice(1).toLowerCase();
  return txt.charAt(0).toUpperCase() + txt.slice(1);
}
