import { useState } from "react";

//pasar propiedad desde app
const Navbar = ({onSearch}) => {

  //Valor de useState con comillas
  const [search, setSearch] = useState('');

  function handleInputChange(event) {
    setSearch(event.target.value);
  }
  function handleInputKeyDown(event) {
    if(event.key === 'Enter'){
      //actualiza estado para la busqueda con lo que recibe desde el state
      onSearch(search);
    }
  }

  return (
    <div>
      <p>Mi boletera</p>
      <input
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}

      />
    </div>
  );
};

export default Navbar;
