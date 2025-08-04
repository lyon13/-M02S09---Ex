import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setTotalPosts(savedPosts.length);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    // Validações
    if (!title.trim()) {
      alert("Título é obrigatório.");
      return;
    }

    if (!description.trim()) {
      alert("Descrição é obrigatória.");
      return;
    }

    if (!imageUrl.startsWith("http")) {
      alert("URL da imagem deve começar com 'http'.");
      return;
    }

    if (!category) {
      alert("Selecione uma categoria.");
      return;
    }

    const now = new Date();
    const selectedDate = new Date(date);
    if (!date || selectedDate < now.setHours(0, 0, 0, 0)) {
      alert("A data deve ser de hoje ou uma data futura.");
      return;
    }

    // Salvar post
    const newPost = { title, description, imageUrl, category, date };
    const existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    const updatedPosts = [...existingPosts, newPost];
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    // Atualizar total
    setTotalPosts(updatedPosts.length);

    // Limpar campos
    setTitle("");
    setDescription("");
    setImageUrl("");
    setCategory("");
    setDate("");

    alert("Post salvo com sucesso!");
  }

  return (
    <div className="container">
      <h1>Cadastro de Post</h1>
      <p>Total de posts: {totalPosts}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="URL da imagem de capa"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Artigo">Artigo</option>
          <option value="Notícia">Notícia</option>
          <option value="Tutorial">Tutorial</option>
          <option value="Entrevista">Entrevista</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <button type="submit">Salvar Post</button>
      </form>
    </div>
  );
}

export default App;
