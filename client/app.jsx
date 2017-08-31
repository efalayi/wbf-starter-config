import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import './main.scss';

const App = () => {
  return(
   <div className="container-fluid home">
     <div className="jumbotron jumbotron-fluid">
      <div className="container-fluid">
        <h1 className="text-center">Setting Up Webpack for Bootstrap 4 and FontAwesome</h1>
        <hr />
        <p className="lead text-center">This is a simple starter pack for setting up your webpack for Bootstrap and Font Awesome</p>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-4">
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
        <div className="col-4">
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
        <div className="col-4">
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
        </div>
      </div>
    </div>
    <footer className="text-center">
      <p>&copy; 2017</p>
      <p>Esther Falayi | <a href="">github.com</a></p>
    </footer>
   </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
