import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [categoria, setCategoria] = useState("Artigo");
  const [dataPublicacao, setDataPublicacao] = useState("");

  function isValidUrl(url) {
    return url.startsWith("http");
  }

  function isFutureOrToday(dateStr) {
    const hoje = new Date();
    const data = new Date(dateStr);
    return data >= new Date(hoje.toDateString());
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!titulo.trim()) {
      toast.error("O título é obrigatório.");
      return;
    }

    if (!descricao.trim()) {
      toast.error("A descrição é obrigatória.");
      return;
    }

    if (!imagemUrl.trim() || !isValidUrl(imagemUrl)) {
      toast.error("A URL da imagem deve começar com 'http'.");
      return;
    }

    if (!categoria) {
      toast.error("Selecione uma categoria.");
      return;
    }

    if (!dataPublicacao || !isFutureOrToday(dataPublicacao)) {
      toast.error("A data deve ser hoje ou futura.");
      return;
    }

    toast.success("Post enviado com sucesso!");

    console.log({
      titulo,
      descricao,
      imagemUrl,
      categoria,
      dataPublicacao
    });

    // Resetar os campos
    setTitulo("");
    setDescricao("");
    setImagemUrl("");
    setCategoria("Artigo");
    setDataPublicacao("");
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

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="categoria">Categoria:</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Artigo">Artigo</option>
            <option value="Notícia">Notícia</option>
            <option value="Tutorial">Tutorial</option>
            <option value="Entrevista">Entrevista</option>
          </select>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label htmlFor="data">Data de Publicação:</label>
          <input
            id="data"
            type="date"
            value={dataPublicacao}
            onChange={(e) => setDataPublicacao(e.target.value)}
          />
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

      <ToastContainer />
    </div>
  );
}

export default App;
