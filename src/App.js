import './App.css';
import {useState, useEffect} from 'react';

const App = ()=>{
  const [countries,setcountries] = useState([]);

  const pesquisa = async() => {
    const nameCountrie = document.getElementById('campoPesquisa').value;
    if(nameCountrie != '' && nameCountrie != null){
      const response = await fetch('https://restcountries.eu/rest/v2/name/' + nameCountrie)
      const data = await response.json();
      if(data.status == 404){
        alert('Pais não encontrado');
      }else{
        setcountries(data);
        console.log(data)
      }
    }else{
      alert('Nome não pode ser vazio');
    }
    
  }

  return (
   <div>
     <div class='divPesquisa'>
        <label>Digite o nome do Pais: </label>
        <input id='campoPesquisa' type='text'></input> 
        <button onClick={pesquisa}>Pesquisar</button>
     </div>
     <div class='paises'>
      {countries.map(c => (
        <>
        <h1>{c.name}</h1>
        <img src={c.flag}></img>

        <div class='results'>
          <label><h3>Capital:</h3></label>
          <h4>{c.capital}</h4>
        </div>

        <div class='results'>
          <label><h3>Região:</h3></label>
          <h4>{c.region}</h4>
        </div>

        <div class='results'>
          <label><h3>População:</h3></label>
          <h4>{c.population}</h4>
        </div>

        <div class='results'>
          <label><h3>Lingua:</h3></label>
          <h4>{c.languages[0].name}</h4>
        </div>
        
        </>
      ))}
     </div>
   </div>
  );
}

export default App;
