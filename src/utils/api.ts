export const getCity = async (query: string) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=837685de07a54a3ca39212306262101&q=${query}`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch city");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCurrentCity = async (query: string) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=837685de07a54a3ca39212306262101&q=${query}&days=1`,
    );

    if (!res.ok) {
      throw new Error("Failed to fetch city");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
