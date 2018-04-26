import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './main.scss';

/**
* App.jsx: main entry file
* @since: v.1.0.0
*/
const App = () => {
  return(
    <div className="home container-fluid">
     <header className="section jumbotron jumbotron-fluid">
      <div className="container-fluid">
          <h1>Setting Up <strong><a href="https://webpack.js.org/">Webpack</a></strong> for <strong><a href="https://getbootstrap.com/">Bootstrap 4</a></strong> and <strong><a href="http://fontawesome.io/">FontAwesome</a></strong></h1>
        <hr />
        <p className="lead">This is a simple starter pack for setting up your webpack for Bootstrap and Font Awesome</p>
      </div>
    </header>
    <div className="dependencies section container-fluid">
      <div className="row">
        <div className="col-4 dev-dependencies">
          <h4>Dev Dependencies</h4>
          <ul>
            <li>express</li>
            <li>webpack</li>
            <li>webpack-dev-server</li>
            <li>jquery</li>
            <li>css-loader</li>
            <li>sass-loader</li>
            <li>style-loader</li>
            <li>node-sass</li>
            <li>url-loader</li>
            <li>file-loader</li>
            <li>image-webpack-loader</li>
            <li>extract-text-webpack-plugin</li>
            <li>transfer-webpack-plugin</li>
          </ul>
        </div>
        <div className="col-4 bootstrap-dependencies">
          <h4>Bootstrap Dependencies</h4>
          <ul>
            <li>bootstrap</li>
            <li>tether</li>
            <li>precss</li>          
            <li>postcss-loader</li>          
            <li>exports-loader</li>
            <li>imports-loader</li>
            <li>popper.js</li>
            <li>autoprefixer</li>
          </ul>
          <br />
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
          </button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Bootstrap modal test</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Modal works fine.
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 font-awesome-dependencies">
          <h4>Font Awesome Dependencies</h4>
          <ul>
            <li>font-awesome-loader</li>
            <li>font-awesome</li>
          </ul>
          <br />
          <p>FA Icons</p>
          <ul className="icons">
            <li><i className="fa fa-address-book" aria-hidden="true"></i></li>
            <li><i className="fa fa-car" aria-hidden="true"></i></li>
            <li><i className="fa fa-binoculars" aria-hidden="true"></i></li>
            <li><i className="fa fa-database" aria-hidden="true"></i></li>
            <li><i className="fa fa-paper-plane" aria-hidden="true"></i></li>
          </ul>
          <br />
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              More Icons
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="text-center">
    <ul>
      <li>&copy; 2017</li>
      <li>Esther Falayi | <a href="https://github.com/andela-efalayi/wbf-starter-config">github.com</a></li>
    </ul>
    </footer>
   </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
