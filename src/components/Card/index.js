import "./card.css";

// props = { country: { Name: 'Nome do Pais', Population: 101010 } }
function Card(props) {
  return (
    <div className="card">
      <h5>{props.country.Name}</h5>
      <label>População: {props.country.Population} </label>
      <label>Continente: {props.country.Continent}</label>
    </div>
  );
}

export default Card;
