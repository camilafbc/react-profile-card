import Card from "./components/Card";
import image from "./assets/97132028.jpg";

function App() {

  return (
    <>
      <Card 
      photo={image}
      name="Camila Coelho"
      bio="Frontend Developer"
      telefone="+5535990000000"
      email="camilafernanda914@gmail.com"
      />
    </>
  )
}

export default App
