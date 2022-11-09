import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sobre from "./components/Sobre";
import Contato from './components/Contato'
import { Redirect, Switch, Route } from "react-router-dom";
import Produtos from "./components/Produtos";
import Carrinho from "./components/Carrinho";
import Checkout from "./components/Checkout";
import Detalhes from "./components/Detalhes";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        
        <Route exact path="/" component={Home} />
        
        <Route exact path="/produtos" component={Produtos} />

        <Route exact path="/produtos/:codigo" component={Detalhes} />
        
        <Route exact path="/carrinho" component={Carrinho} />
        
        <Route exact path="/checkout" component={Checkout} />

        <Route exact path="/sobre" component={Sobre} />

        <Route exact path="/contato" component={Contato} />
        
        <Redirect to="/" />
        
      </Switch>

      <Footer />

    </>
  );
}

export default App;
