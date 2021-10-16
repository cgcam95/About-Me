import { Container } from "react-bootstrap";

import Navbar from "../../components/Navbar";

const Home = () => {
  console.log("hello from the home page");
  return (
    <Container>
      <h1>Home Page</h1>
      <p>'sup, Cam!</p>
    </Container>
  );
};

export default Home;
