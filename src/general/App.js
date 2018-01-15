import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "../posts";
import Post from "../posts/post";
import Categories from "../categories/list";

import { Link, Route, withRouter } from "react-router-dom";


class App extends Component {

    leavingComponents = 0;

    f = {
        '/categories': <Categories />,
        '/posts': <Posts />
    }


  render() {

    // const path = this.props.location.pathname.split('/');

    return (
      <div className="mw8 center sans-serif">
          <div className="f-headline tc ma4 mb0 roboto black-50 tracked-mega navy">
              <span className="dim dib animated fadeInLeft anim-del-010 anim-dur-020">read</span>
              <span className="dim dib animated fadeInRight anim-del-010 dark-red  anim-dur-020">able</span>
          </div>

          <Link to="/" className="db f5 tc animated fadeIn delay-sm no-underline blue">HOME</Link>


          <Categories />

          <Route exact path="/" component={Posts} />
          <Route exact path="/posts/:category/:id" component={Post} />


          <footer className=" bottom-0 left-0 pv4 ph3 ph5-m ph6-l mid-gray fl w-100 cf ">
              <small className="f6 db tc">REACT & REDUX TOY PROJECT <b className="ttu mh2">READABLE</b> UDACITY NANODEGREE</small>
              <div className="tc mt3">
                  <a href="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">luis.aveiga@gmail.com</a>
              </div>
          </footer>


      </div>
    );
  }
}

// function mapStateToProps(state) {}

export default withRouter(connect()(App));