import { useState } from "react";

function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Título:", titulo);
    console.log("Descrição:", descricao);
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Criar Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: "1rem" }}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
