import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Link,
   Switch,
   Redirect,
   useLocation
 } from "react-router-dom";
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';
import Homepage from './pages/Homepage'
import Footer from './components/Footter';
import ItemProduct from './components/ItemProduct';
import About from './components/About';
import './App.css'
function App() {
  return (
     <Router>
        <div className="containers">
            <Header />
            <Switch>
               <Route path="/" exact component={Homepage} />
               <Route path="/collections" exact component={Product} />
               <Route path="/carts" exact component={Cart} />
               <Route path="/product/:id" exact component={ItemProduct} />
               <Route path="/about" exact component={About} />
               <Route path="*">
            <NoMatch />
          </Route>
            </Switch>
            <Footer></Footer>
        </div>
     </Router>
  );
}

function NoMatch() {
   let location = useLocation();
 
   return (
     <div>
       <h3>
         No match for <code>{location.pathname}</code>
       </h3>
     </div>
   );
 }
 
export default App;
