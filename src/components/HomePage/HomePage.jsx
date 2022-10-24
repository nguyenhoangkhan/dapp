import Banner from "../Banner";
import Container from "../Container";
import Sections from "../Sections";

const Content = () => {
  return (
    <div className="bg-black">
      <Container>
        <Banner />
        <Sections />
      </Container>
    </div>
  );
};

export default Content;
