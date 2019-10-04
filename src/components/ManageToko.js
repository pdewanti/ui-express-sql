import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import { connect } from 'react-redux';
import { ubahPikachu } from '../actions';

class ManageToko extends Component {
    state = { 
        listToko: [], 
        listKota: [],
        inputNamaAdd: '', 
        inputAlamatAdd: '',
        selectedKotaAdd: 0,
        inputIncomeAdd: 0,
        inputTanggalBerdiriAdd: moment().format('YYYY-MM-DD'),
        selectedEditId: 0,
        inputNamaEdit: '', 
        inputAlamatEdit: '',
        selectedKotaEdit: 0,
        inputIncomeEdit: 0,
        inputTanggalBerdiriEdit: moment().format('YYYY-MM-DD'),
        selectedToko: { id: 0, nama: '' },
        imagesTokoAdd: null,
        listImageToko: [],
        selectedEditImageId: 0,
        imageTokoEdit: null
    }

    getInitialData = () => {
        axios.get('http://localhost:1997/gettoko')
            .then((res) => {
                console.log('Masuk Then')
                console.log(res.data)
                this.setState({ listToko: res.data })
                axios.get('http://localhost:1997/getkota')
                    .then((res) => {
                        this.setState({ listKota: res.data, selectedEditId: 0 })
                    }).catch((err) => {
                        console.log(err.response)
                    })
            }).catch((err) => {
                console.log('Masuk Catch')
                console.log(err.response)
            })
    }

    componentDidMount() {
        this.props.ubahPikachu('Ryan Gosling')
        this.getInitialData()
    }

    imageTokoAddChange = (e) => {
        console.log(e.target.files)
        if(e.target.files[0]) {
          this.setState({ imagesTokoAdd: e.target.files })
        } else {
          this.setState({ imagesTokoAdd: null })
        }
    }

    imageTokoEditChange = (e) => {
        console.log(e.target.files)
        if(e.target.files[0]) {
            this.setState({ imageTokoEdit: e.target.files })
        } else {
            this.setState({ imageTokoEdit: null })
        }
    }

    onBtnAddImageTokoClick = () => {
        if(this.state.imagesTokoAdd && this.state.selectedToko.id !== 0) {
            var formdata = new FormData();

            var options = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            var data = {
                namaToko: this.state.selectedToko.nama,
                tokoId: this.state.selectedToko.id
            }

            for(var i = 0; i < this.state.imagesTokoAdd.length; i++) {
                formdata.append('image', this.state.imagesTokoAdd[i])
            }
            formdata.append('data', JSON.stringify(data))

            axios.post('http://localhost:1997/addimagetoko', formdata, options)
                .then(res => {
                    console.log(res.data)
                    this.getImageByTokoId(this.state.selectedToko.id)
                }).catch(err => {
                    console.log(err.response)
                })
        } else {
            alert('Mohon Image Harus Diisi Setidaknya 1, dan Pilih salah 1 toko')
        }
        
    }

    onBtnUpdateImageTokoClick = () => {
        if(this.state.imageTokoEdit) {
            var formdata = new FormData();

            var options = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            formdata.append('image', this.state.imageTokoEdit[0])

            axios.put('http://localhost:1997/imagetoko/' + this.state.selectedEditImageId, formdata, options)
                .then(res => {
                    console.log(res.data)
                    this.setState({ selectedEditImageId: 0 })
                    this.getImageByTokoId(this.state.selectedToko.id)
                }).catch(err => {
                    console.log(err.response)
                })
        } else {
            alert('Mohon Image Harus Diisi')
        }
        
    }

    onBtnDeleteImageClick = (id) => {
        if(window.confirm('Are You Sure?')) {
            axios.delete('http://localhost:1997/imagetoko/' + id)
            .then(res => {
                console.log(res.data)
                this.getImageByTokoId(this.state.selectedToko.id)
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

    onInputNamaAddChange = (e) => {
        console.log(e.target.value)
        if(e.target.value.length <= 15) {
            this.setState({ inputNamaAdd: e.target.value })
        }
    }

    onInputAlamatAddChange = (e) => {
        this.setState({ inputAlamatAdd: e.target.value })
    }

    onSelectKotaAddChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedKotaAdd: parseInt(e.target.value) })
    }

    onInputIncomeAddChange = (e) => {
        this.setState({ inputIncomeAdd: e.target.value })
    }

    onTanggalBerdiriAddChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalBerdiriAdd: e.target.value })
    }

    onInputNamaEditChange = (e) => {
        console.log(e.target.value)
        if(e.target.value.length <= 15) {
            this.setState({ inputNamaEdit: e.target.value })
        }
    }

    onInputAlamatEditChange = (e) => {
        this.setState({ inputAlamatEdit: e.target.value })
    }

    onSelectKotaEditChange = (e) => {
        console.log(e.target.value)
        this.setState({ selectedKotaEdit: parseInt(e.target.value) })
    }

    onInputIncomeEditChange = (e) => {
        this.setState({ inputIncomeEdit: e.target.value })
    }

    onTanggalBerdiriEditChange = (e) => {
        console.log(e.target.value)
        console.log(typeof(e.target.value))
        this.setState({ inputTanggalBerdiriEdit: e.target.value })
    }

    onBtnAddClick = () => {
        axios.post('http://localhost:1997/addtoko', {
            nama: this.state.inputNamaAdd,
            alamat: this.state.inputAlamatAdd,
            kotaId: this.state.selectedKotaAdd,
            totalIncome: parseInt(this.state.inputIncomeAdd),
            tanggalBerdiri: this.state.inputTanggalBerdiriAdd
        }).then((res) => {
            console.log(res.data)
            this.getInitialData()
        }).catch(err => {
            console.log(err.response)
        })
    }

    onBtnDeleteClick = (id) => {
        if(window.confirm('Yakin nih bro?')) {
            axios.delete('http://localhost:1997/deletetoko/' + id)
            .then((res) => {
                console.log(res.data)
                this.getInitialData()
            }).catch(err => {
                console.log(err.response)
            })
        }
    }

    onBtnSaveUpdateClick = () => {
        axios.put('http://localhost:1997/edittoko/' + this.state.selectedEditId, {
            nama: this.state.inputNamaEdit,
            alamat: this.state.inputAlamatEdit,
            kotaId: this.state.selectedKotaEdit,
            totalIncome: this.state.inputIncomeEdit,
            tanggalBerdiri: this.state.inputTanggalBerdiriEdit
        }).then(res => {
            this.getInitialData();
        }).catch(err => {
            console.log(err)
        })
    }

    getImageByTokoId = (id) => {
        axios.get('http://localhost:1997/imagetoko/' + id)
            .then(res => {
                console.log(res.data)
                this.setState({ listImageToko: res.data })
            }).catch(err => {
                console.log(err)
            })
    }

    onBtnSelectTokoClick = (toko) => {
        this.setState({ selectedToko: toko })
        this.getImageByTokoId(toko.id)
    }

    renderListKota = () => {
        return this.state.listKota.map((item) => {
            return (
                <option key={item.id} value={item.id}>{item.nama}</option>
            )
        })
    }

    renderListToko = () => {
        return this.state.listToko.map((item) => {
            if(item.id !== this.state.selectedEditId) {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nama}</td>
                        <td>{item.alamat}</td>
                        <td>{item.namaKota}</td>
                        <td>{item.totalIncome}</td>
                        <td>{moment(item.tanggalBerdiri).format('YYYY-MM-DD')}</td>
                        <td>
                            <input 
                                type="button"
                                value="Select"
                                onClick={
                                    () => this.onBtnSelectTokoClick(item)
                                }
                            />
                        </td>
                        <td>
                            <input 
                                type="button" 
                                value="Edit" 
                                onClick={() => this.setState({ 
                                        selectedEditId: item.id,
                                        inputNamaEdit: item.nama,
                                        inputAlamatEdit: item.alamat,
                                        inputIncomeEdit: item.totalIncome,
                                        inputTanggalBerdiriEdit: moment(item.tanggalBerdiri).format('YYYY-MM-DD'),
                                        selectedKotaEdit: item.kotaId
                            })}/>
                        </td>
                        <td><input type="button" value="Delete" onClick={() => this.onBtnDeleteClick(item.id)} /></td>
                    </tr>
                )
            }

            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                        <input type="text" value={this.state.inputNamaEdit} onChange={this.onInputNamaEditChange}  />
                    </td>
                    <td>
                        <textarea 
                            value={this.state.inputAlamatEdit} 
                            onChange={this.onInputAlamatEditChange}
                        />
                    </td>
                    <td>
                        <select 
                            onChange={this.onSelectKotaEditChange} 
                            value={this.state.selectedKotaEdit}
                        >
                            <option value={0}>-- Pilih Kota --</option>
                            {this.renderListKota()}
                        </select>
                    </td>
                    <td>
                        <input
                            type="number"
                            value={this.state.inputIncomeEdit}
                            onChange={this.onInputIncomeEditChange}
                        />
                    </td>
                    <td>
                        <input 
                            type="date"
                            value={this.state.inputTanggalBerdiriEdit}
                            onChange={this.onTanggalBerdiriEditChange}
                        />
                    </td>
                    <td><input type="button" value="Cancel" onClick={() => this.setState({ selectedEditId: 0 })}/></td>
                    <td><input type="button" value="Save" onClick={this.onBtnSaveUpdateClick} /></td>
                </tr>
            )
        })
    }

    renderListImageToko = () => {
        return this.state.listImageToko.map((item) => {
            if(item.id !== this.state.selectedEditImageId) {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.pathName}</td>
                        <td>
                            <img 
                                src={`http://localhost:1997${item.pathName}`}
                                style={{ width: '100px' }}
                            />
                        </td>
                        <td>{item.NamaToko}</td>
                        <td><input type="button" value="Edit" onClick={() => this.setState({ selectedEditImageId: item.id })} /></td>
                        <td><input type="button" value="Delete" onClick={() => this.onBtnDeleteImageClick(item.id)} /></td>
                    </tr>
                )
            }

            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td><input type="file" onChange={this.imageTokoEditChange} /></td>
                    <td>
                        <img 
                            src={`http://localhost:1997${item.pathName}`}
                            style={{ width: '100px' }}
                        />
                    </td>
                    <td>{item.NamaToko}</td>
                    <td><input type="button" value="Cancel" onClick={() => this.setState({ selectedEditImageId: 0 })} /></td>
                    <td><input type="button" value="Save" onClick={this.onBtnUpdateImageTokoClick} /></td>
                </tr>
            )
        })
    }

    render() {
        console.log(this.props.actorPikachu)
        return (
            <div>
                <center>
                    <h1>Manage Toko ({ this.props.actorPikachu })</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama</th>
                                <th>Alamat</th>
                                <th>Kota</th>
                                <th>Total Income</th>
                                <th>Tanggal Berdiri</th>
                                <th></th>
                                <th></th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderListToko()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" value={this.state.inputNamaAdd} onChange={this.onInputNamaAddChange}  />
                                </td>
                                <td>
                                    <textarea 
                                        value={this.state.inputAlamatAdd} 
                                        onChange={this.onInputAlamatAddChange}
                                    />
                                </td>
                                <td>
                                    <select onChange={this.onSelectKotaAddChange}>
                                        <option value={0}>-- Pilih Kota --</option>
                                        {this.renderListKota()}
                                    </select>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        value={this.state.inputIncomeAdd}
                                        onChange={this.onInputIncomeAddChange}
                                    />
                                </td>
                                <td>
                                    <input 
                                        type="date"
                                        value={this.state.inputTanggalBerdiriAdd}
                                        onChange={this.onTanggalBerdiriAddChange}
                                    />
                                </td>
                                <td>
                                    <input type="button" value="Add" onClick={this.onBtnAddClick} />
                                </td>
                                <td />
                                <td />
                            </tr>
                        </tfoot>
                    </table>
                    <h1>Manage Image</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image Path</th>
                                <th>Image</th>
                                <th>Nama Toko</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderListImageToko()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>
                                    <input type="file" onChange={this.imageTokoAddChange} multiple />
                                </td>
                                <td>{this.state.selectedToko.nama}</td>
                                <td>
                                    <input type="button" value="Add" onClick={this.onBtnAddImageTokoClick} />
                                </td>
                                <td />
                            </tr>
                        </tfoot>
                    </table>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { actorPikachu: state.pikachu }
}

export default connect(mapStateToProps, { ubahPikachu })(ManageToko);