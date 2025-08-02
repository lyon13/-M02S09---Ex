import { useState } from "react";

function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [categoria, setCategoria] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Título:", titulo);
    console.log("Descrição:", descricao);
    console.log("URL da Imagem:", imagemUrl);
    console.log("Categoria:", categoria);
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

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="imagem">URL da imagem de capa:</label>
          <input
            id="imagem"
            type="url"
            value={imagemUrl}
            onChange={(e) => setImagemUrl(e.target.value)}
            placeholder="https://exemplo.com/imagem.jpg"
          />
        </div>

        <div>
          <label htmlFor="dataPublicacao">Data de Publicação:</label>
          <input type="date" name="dataPublicacao" id="dataPublicacao" />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="categoria">Categoria:</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Artigo">Artigo</option>
            <option value="Notícia">Notícia</option>
            <option value="Tutorial">Tutorial</option>
            <option value="Entrevista">Entrevista</option>
          </select>
        </div>

        <button type="submit" style={{ marginTop: "1rem" }}>
          Publicar
        </button>
      </form>

      
      {imagemUrl && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Pré-visualização da imagem:</h3>
          <img
            src={imagemUrl}
            alt="Imagem de capa"
            style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
