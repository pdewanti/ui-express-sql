import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { 
    inputLoginEmail,
    inputLoginPassword
} from '../actions';

class Login extends Component {
    render() {
        const { 
            email,
            password
        } = this.props.loginForm;

        return (
            <MDBContainer className="pt-5">
              <MDBRow className="justify-content-center">
                <MDBCol md="6">
                  <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your email"
                        icon="envelope"
                        group
                        type="email"
                        value={email}
                        onChange={(e) => this.props.inputLoginEmail(e.target.value)}
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Type your password"
                        icon="lock"
                        group
                        type="password"
                        value={password}
                        onChange={(e) => this.props.inputLoginPassword(e.target.value)}
                        validate
                      />
                    </div>
                    <div className="text-center">
                      <MDBBtn>Login</MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          )
    }
}

const mapStateToProps = ({ loginForm }) => {
    return { loginForm }
}

export default connect(mapStateToProps, {inputLoginEmail,inputLoginPassword})(Login);