import React, {Component} from 'react';

class Formulario extends Component {
    constructor(){
        super();
        this.state  = {
            username:'',
            email:'',
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addUser = this.addUser.bind(this);

    }

    addUser(e){
        fetch('/apis/users',{
            method:'POST' ,
            body : JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            .then(res =>  res.json())
            .then(data => {
                console.log(data)
                M.toast({html:'Usuario Registrado '});
                this.setState({username:' ',email:' ',password:' '});

            })
            .catch(err => console.error(err));
        e.preventDefault();
    }

    handleChange(e){
       const {name ,value} = e.target;
       this.setState({
           [name] : value
       })
    }
    render() {
        return (
        
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Upp</a>

                    </div>

                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addUser}>
                                        <div className="row">
                                            <div className="input-field col s 12">
                                                <input name="username" onChange={this.handleChange} type="text" placeholder="username" value = {this.state.username} /> 
                                                <input  name="email" onChange={this.handleChange} type="text" placeholder="email" value = {this.state.email} />
                                                <input  name="password" onChange={this.handleChange} type="text" placeholder="password" value = {this.state.password} />


                                            </div>

                                        </div>
                                        <button type="submit" className="btn light-blue" >
                                            Registrarse
                                        </button>
                                    </form>

                                </div>

                            </div>

                        </div>
                    </div>


                
                </div>
            </div>
        )
    }
}

export default Formulario;