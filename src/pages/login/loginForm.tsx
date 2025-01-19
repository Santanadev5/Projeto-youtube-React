import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // implementar a lógica de envio para a API
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Fazer login</h2>
      <p style={styles.subtitle}>Prosseguir no YouTube</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="email" style={styles.label}>E-mail</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password" style={styles.label}>Senha</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <div style={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              style={styles.checkbox}
            />
            <label htmlFor="showPassword" style={styles.checkboxLabel}>Mostrar senha</label>
          </div>
        </div>
        <button type="submit" style={styles.button}>Próxima</button>
        <p>
          <a href="/create-account" style={styles.link}>Criar conta</a>
        </p>
      </form>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "450px", // Ajuste na largura do formulário
    width: "90%", // Responsivo: ocupa 90% da largura da tela
    margin: "50px auto", // Espaçamento superior para centralizar melhor
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "30px 20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: "15px",
    fontSize: "26px",
    color: "#333",
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: "25px",
    fontSize: "14px",
    color: "#777",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#555",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#1a73e8",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  checkbox: {
    marginRight: "8px",
  },
  checkboxLabel: {
    fontSize: "14px",
    color: "#555",
  },
  button: {
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    outline: "none",
  },
  buttonHover: {
    backgroundColor: "#1558b0",
  },
  link: {
    marginTop: "10px",
    color: "#1a73e8",
    textDecoration: "none",
    fontSize: "14px",
  },
};

export default LoginForm;
