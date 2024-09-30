import PropTypes from "prop-types";

export const Contenedor = ({ children }) => {
  return (
    <div
      style={{ border: "2px solid red", padding: "20px", borderRadius: "15px" }}
    >
      {children}
    </div>
  );
};

// Props validation
Contenedor.propTypes = {
  children: PropTypes.node.isRequired,
};
