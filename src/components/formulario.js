import React, { Component } from 'react'
import axios from 'axios';


export default class formulario extends Component {
    state={
        users: [],
        email: '',
        password: '',
        username:''

    }
    async componentDidMount() {
        this.getUsers();

    }
    getUsers= async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data,
        password: res.data,
        username: res.data
        });

    }
    onChangeEmail=(e)=>{
       this.setState({ 
           email:e.target.value
        });
    }
    onChangePassword=(e)=>{
        this.setState({
            password:e.target.value
        });

    }

    onChangeUsername=(e)=>{
        this.setState({
            username:e.target.value
        });

    }
    
     onSubmit= async e =>{
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users',{
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        })
        this.setState({
            username:'',
            email:'',
            password:''
        });
        this.getUsers();
        
    }
    


    
    render() {
        return (
            <div className="row">
                <div>
                    <div className="col-md-12">
                        <div className="card card-body">
                            <h3>Registrar nuevo usuario</h3>
                            <form onSubmit={this.onSubmit} >
                                <div className="form-group">
                                    <input type ="text" value={this.setState.email} className="form-control" onChange={this.onChangeEmail} />
                                    <input type ="text" value={this.setState.username} className="form-control" onChange={this.onChangeUsername} />
                                    <input type ="text" value={this.setState.password} className="form-control" onChange={this.onChangePassword} />

                                </div>
                            <button type="submit" className="btn btn-primary">
                                Register
                            </button>

                            </form>
                        </div>


                    </div>
                    <div className="com-md-8">
                        <ul className="list-group">
                            {
                                this.state.users.map(user => <li className="list-group-item list-gropu-item-action" key={user.id}>
                                    {user.email}
                                </li>)
                            }

                        </ul>

                    </div>
                </div>
                
                
            </div>
        );
    }
}

