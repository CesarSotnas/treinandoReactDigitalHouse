const countries = [
  {
    Name: "Aruba",
    Continent: "North America",
    Population: 103000,
    Code2: "AW",
  },
  {
    Name: "Afghanistan",
    Continent: "Asia",
    Population: 22720000,
    Code2: "AF",
  },
  {
    Name: "Angola",
    Continent: "Africa",
    Population: 12878000,
    Code2: "AO",
  },
  {
    Name: "Anguilla",
    Continent: "North America",
    Population: 8000,
    Code2: "AI",
  },
  {
    Name: "Albania",
    Continent: "Europe",
    Population: 3401200,
    Code2: "AL",
  },
  {
    Name: "Andorra",
    Continent: "Europe",
    Population: 78000,
    Code2: "AD",
  },
  {
    Name: "Netherlands Antilles",
    Continent: "North America",
    Population: 217000,
    Code2: "AN",
  },
];

const API_URL = "http://localhost:3000";

export default {
  getCountries: async function getCountries() {
    const response = await fetch(`${API_URL}/countries`);
    const responseJson = await response.json();

    return responseJson;
  },
  getLanguages: async function getLanguages() {
    const response = await fetch(`${API_URL}/countries/language`);
    const responseJson = await response.json();

    return responseJson;
  },
};
