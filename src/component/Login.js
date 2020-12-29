import React, {useState} from 'react';
import {Link} from 'react-router-dom'
const Login = () => {
    const [Id_Account, setID_Account] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onChangeId_Account = (e) => {
        const value = e.target.value
        setID_Account(value)
    }
    const onChangeUsername = (e) =>{
        const value = e.target.value
        setUsername(value)
    }
    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }
    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }
    return(
        <div style={{marginTop: "150px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                            <div className="form-group">
                                    <label>Id_Account</label>
                                    <input type="text" placeholder="id anda" className="form-control" value={Id_Account} onChange={onChangeId_Account}/>
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername}/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail}/>
                                </div>
                                
                                <Link to = "/home">
                                <button className="btn btn-primary">button</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login