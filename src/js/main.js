let URL = 'https://api.chucknorris.io/jokes/random';

const getRamdomJoke = async () => {
  try {
    document.getElementById('spinner').style.display = 'block';
    const response = await axios.get(URL);
    console.log(response.data);
    document.getElementById('spinner').style.display = 'none';
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
