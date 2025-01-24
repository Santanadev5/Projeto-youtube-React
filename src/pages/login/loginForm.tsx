import React, { useState } from "react";
import RegisterForm from "./RegisterForm"; // Importando o componente de registro

const LoginForm: React.FC = () => {
  const [showRegister, setShowRegister] = useState(false);

  // Alternar entre login e criar conta
  if (showRegister) {
    return <RegisterForm />;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Fazer login</h2>
      <p style={styles.subtitle}>Prosseguir no YouTube</p>
      <form onSubmit={(e) => e.preventDefault()} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="email" style={styles.label}>E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="password" style={styles.label}>Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite sua senha"
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Próxima</button>
        <p style={styles.footerText}>
          Não tem uma conta?{" "}
          <span
            style={{ color: "#1a73e8", cursor: "pointer", textDecoration: "underline" }}
            onClick={() => setShowRegister(true)}
          >
            Criar conta
          </span>
        </p>
      </form>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "450px",
    width: "90%",
    margin: "50px auto",
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
    marginBottom: "20px",
    fontSize: "16px",
    color: "#555",
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
  footerText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
};

export default LoginForm;
