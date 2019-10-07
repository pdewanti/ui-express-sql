import React, { Component } from 'react';

class WaitingEmailVerification extends Component {
    render() {
        return (
            <div className="pt-5 text-center">
                <h1>Tolong Periksa Email Anda Untuk Konfirmasi</h1>
                <h4>Klik Button Dibawah Bila Tidak Menerima Emailnya</h4>
                <input type="button" value="Resend Email" />
            </div>
        )
    }
}

export default WaitingEmailVerification;