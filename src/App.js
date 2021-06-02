import "./App.css";
import Card from "./components/Card";
import Tabs from "./components/Tabs";
import worldService from "./services/world";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

/**
 *
 * hooks - funções que ajudam o desenvolvimento do React;
 * useState - controle de estado de um componente;
 * useEffect - controle de ciclo de vida de um componente;
 *
 */

function App() {
  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [search, setSearch] = useState("");
  const [tabActive, setTabActive] = useState("country");

  /**
   * useEffect = é uma função = é um hook do React;
   * dentro do useEffect nós colocamos uma outra função
   */

  function filter() {
    const listFilter = countries.filter(function (country) {
      return country.Name.indexOf(search) >= 0;
    });

    setCountries(listFilter);
  }

  useEffect(() => {
    const getCountries = async () => {
      const countriesApi = await worldService.getCountries();
      setCountries(countriesApi.response);
    };

    const getLanguages = async () => {
      const languagesApi = await worldService.getLanguages();
      console.log("resposta languages", languagesApi);
      setLanguages(languagesApi.response);
    };

    if (tabActive === "language") {
      getLanguages();
    }

    if (tabActive === "country") {
      getCountries();
    }
  }, [tabActive]);

  /* useEffect(() => {
    alert("App renderizado");
  }, []);

  useEffect(() => {
    alert("Estado tabActive atualizado");
  }, [tabActive]); */

  return (
    <>
      <Header />
      <main className="container">
        <section>
          <div className="search">
            <input
              type="text"
              value={search}
              onChange={function (event) {
                setSearch(event.target.value);
              }}
            />
            <button className="btn" onClick={filter}>
              Filtrar
            </button>
          </div>
        </section>
        <section>
          <Tabs tabActive={tabActive} setTabActive={setTabActive} />
        </section>
        <div className="country-wrapper">
          {tabActive === "country" &&
            countries.map(function (country) {
              return <Card key={country.Name} country={country} />;
            })}
          {tabActive === "language" &&
            languages.map(function (language) {
              return <div>{language.Language}</div>;
            })}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
