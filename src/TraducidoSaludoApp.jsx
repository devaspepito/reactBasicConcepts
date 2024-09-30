import PropTypes from "prop-types";

export const SaludoTraducido = ({ nombre, idioma }) => {
  const traducirSaludo = () => {
    switch (idioma) {
      case "es":
        return `Hola, mi nombre es ${nombre}!`;
      case "en":
        return `Hello, my name is ${nombre}!`;
      case "fr":
        return `Bonjour, je m'appelle ${nombre}!`;
      case "de":
        return `Hallo, mein Name ist ${nombre}!`;
      default:
        return `Hola, mi nombre es ${nombre}!`;
    }
  };

  return (
    <div className="saludoTraducido">
      <h1>{traducirSaludo()}</h1>
    </div>
  );
};

// Props validation
SaludoTraducido.propTypes = {
  nombre: PropTypes.string.isRequired,
  idioma: PropTypes.string.isRequired,
};
