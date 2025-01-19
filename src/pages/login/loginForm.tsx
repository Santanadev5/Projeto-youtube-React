// src/components/LoginForm.tsx
import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Aqui você pode implementar a lógica de envio para a API
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Fazer login</h2>
      <p style={styles.subtitle}>Prosseguir no YouTube</p>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="email">E-mail</label>
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
          <label htmlFor="password">Senha</label>
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
            />
            <label htmlFor="showPassword">Mostrar senha</label>
          </div>
        </div>
        <button type="submit" style={styles.button}>
          Próxima
        </button>
        <p>
          <a href="/create-account" style={styles.link}>
            Criar conta
          </a>
        </p>
      </form>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    marginBottom: "10px",
    fontSize: "24px",
    color: "#333",
  },
  subtitle: {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#777",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginTop: "5px",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#1a73e8",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  link: {
    marginTop: "10px",
    color: "#1a73e8",
    textDecoration: "none",
  },
};

export default LoginForm;
