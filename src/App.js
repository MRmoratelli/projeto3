import React from "react";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";

const Login = lazy(() => import("./pages/login/login"));
const Register = lazy(() => import("./pages/register/register"));
const Catalog = lazy(() => import("./pages/catalog/catalog"));
const Cart = lazy(() => import("./pages/cart/cart"));
const Checkout = lazy(() => import("./pages/checkout/checkout"));
const Product = lazy(() => import("./pages/product/product"));
const NotFound = lazy(() => import("./pages/not-found/not-found"));

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
      <AppBar position={"static"}>
        <Toolbar
          style={{
            justfyContent: "space-btween",
          }}
        >
          <Typography variant="h6" component="h2">
            <Link className="whiteLetter" to="/catalog">
              Loja virtual
            </Link>
          </Typography>
          <div>
            <IconButton edge="end">
              <Link to="/cart">
                <ShoppingCartIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>
            <IconButton edge="end">
              <Link to="/login">
                <LogoutIcon
                  style={{
                    color: "#fff",
                    marginLeft: 16,
                  }}
                />
              </Link>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Suspense fallback={"carregando..."}>
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
