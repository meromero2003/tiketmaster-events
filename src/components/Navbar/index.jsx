import { useState } from "react";

//pasar propiedad desde app
const Navbar = ({ onSearch }, ref) => {

  //Valor de useState con comillas
  const [search, setSearch] = useState('');

  function handleInputChange(event) {
    setSearch(event.target.value);
  }
  function handleInputKeyDown(event) {
    if (event.key === 'Enter') {
      //actualiza estado para la busqueda con lo que recibe desde el state
      onSearch(search);
    }
  }

  return (
    <div ref={ref} style={{
      marginBottom: 14,
      width: '100%',
      display: 'flex',
    }}>
      <div style={{ flex: 1, display: 'flex' }}>
        <p style={{
          fontSize: 24,
          fontWeight: 'bold'
        }}>Mi boletera</p>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <input
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
          style={{
            fontSize: 16,
            padding: '6px 12px',
            borderRadius: 4,
            border: 'none',
            width: 200,
          }}
        />

      </div>
    </div>
  );
};

export default Navbar;
