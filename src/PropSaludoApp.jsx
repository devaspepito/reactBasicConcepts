import PropTypes from "prop-types";

export const PropSaludoApp = ({ nombre }) => {
  return (
    <>
      <h1 className="name">{nombre}</h1>
    </>
  );
};

// Props validation
PropSaludoApp.propTypes = {
  nombre: PropTypes.string.isRequired,
};
