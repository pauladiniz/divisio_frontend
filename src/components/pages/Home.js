import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
  class Home extends Component {
    state = { authenticated: null };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated });
      }
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login('/');
    };

    logout = async () => {
      this.props.auth.logout('/');
    };

    render() {
      if (this.state.authenticated === null) return null;

      const mainContent = this.state.authenticated ? (
        <div class="Aligner">
       <div class="Aligner-item">
          <p className="lead">
            Para manipular suas listas,{' '}
            <Link to="/member">clique aqui!</Link>
          </p>
          <button class="btn waves-effect waves-light red" type="submit" name="action" onClick={this.logout}>Log Out
              <i class="material-icons right">send</i>
           </button>
        </div>
        </div>
      ) : (
        <div class="Aligner">
       <div class="Aligner-item">
          <p className="lead">
          <h1>LIST ME</h1>
            Faça sua lista de compras! :) 
          </p>
          <button class="btn waves-effect waves-light red" type="submit" name="action" onClick={this.login}>LOG IN
          <i class="material-icons right">send</i>
           </button>
           </div>
        </div>
      );

      return (
        <div class="row">
           <div class="col s12">
           {mainContent}
           </div>
        </div>
      );
    }
  }
);
