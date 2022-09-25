import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Links from "./components/Link";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";

const isLogin = true;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} exact />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />

        {/* --- dynamic routing --- */}
        {/* <Route path="/profile/:id" component={Profile} /> */}

        <Switch>
          {/* --- js로 라우팅 이동 --- */}
          {/* <Route path="/login" component={Login} /> */}

          {/* --- redirect --- */}
          {/* <Route
            path="/login"
            render={() => (isLogin ? <Redirect to="/" /> : <Login />)}
          /> */}

          {/* --- switch와 not found --- */}
          {/* <Route path="/profile/:id" component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} /> */}
        </Switch>

        {/* --- JSX 컴포넌트로 페이지 이동 --- */}
        {/* <Link to="/">Home</Link>
        <Links />
        <NavLinks /> */}
      </BrowserRouter>
    );
  }
}

export default App;
