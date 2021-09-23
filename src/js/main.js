let URL = 'https://api.chucknorris.io/jokes/random';

const getRamdomJoke = async () => {
  try {
    const response = await axios.get(URL);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getRamdomJoke();
