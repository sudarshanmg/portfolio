export const getJoke = async () => {
  console.log(process.env.X_RAPID_API_KEY);
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.log(error);
  }
};
