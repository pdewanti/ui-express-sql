import React, { Component } from 'react';
import queryString from 'query-string';
import axios from 'axios';

class WaitingEmailVerification extends Component {

    onBtnResendEmailClick = () => {
        console.log(this.props.location.search)
        var params = queryString.parse(this.props.location.search)
        console.log(params)
        axios.post('http://localhost:1997/resendemailconfirm', {
            email: params.email
        }).then(res => {
            alert(res.data.message)
        }).catch(err => {
            console.log(err.response)
            alert(err.response.data.message)
        })
        console.log('test')
    }

    render() {
        return (
            <div className="pt-5 text-center">
                <h1>Tolong Periksa Email Anda Untuk Konfirmasi</h1>
                <h4>Klik Button Dibawah Bila Tidak Menerima Emailnya</h4>
                <input type="button" className="btn btn-primary" value="Resend Email" onClick={this.onBtnResendEmailClick} />
            </div>
        )
    }
}

export default WaitingEmailVerification;