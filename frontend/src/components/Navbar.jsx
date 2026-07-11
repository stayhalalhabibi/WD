import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "#0d6efd",
      }}
    >
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

      <Link to="/about" style={{ color: "white", marginRight: "20px" }}>
        About
      </Link>

      <Link to="/contact" style={{ color: "white", marginRight: "20px" }}>
        Contact
      </Link>

      <Link to="/assessment" style={{ color: "white" }}>
        Assessment
      </Link>
    </nav>
  );
}

export default Navbar;