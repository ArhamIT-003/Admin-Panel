import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/home/home";
import Userlist from "./pages/user-list/User-list";
import { NewUser } from "./pages/newUser-page/NewUser";
import { ProductList } from "./pages/Products-List/Product-List";
import { Products } from "./pages/Product/product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
import "./app.css";
import { NewProducts } from "./pages/newProducts/NewProducts";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/user/" element={<Userlist />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:productId" element={<Products />} />
            <Route path="/newproduct" element={<NewProducts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
