import React, { Component } from 'react';
import axios from 'axios';
import queryString from 'query-string';

class EmailVerified extends Component {
    state = { message: 'Verifying Email, Please Wait...' }

    componentDidMount() {
        var params = queryString.parse(this.props.location.search)
        axios.post('http://localhost:1997/confirmemail', {
            email: params.email
        }).then(res => {
            this.setState({ message: 'Email Berhasil di Confirm'})
        }).catch(err => {
            this.setState({ message: 'Email Gagal di Confirm'})
        })
    }

    render() {   
        return (
            <div className="pt-5 text-center">
                <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default EmailVerified;