import React, { Component } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
export default class formUsuarios extends Component {
   state = {
     users: [],
     UsuarioNombre :'',
     UsuarioApellidoP:'',
     UsuarioApellidoM:'',
     NombreUsuario:'',
     UsuarioCorreo:'',
     UsuarioContraseña:'',
     TipoUsuario:'',
     AreaUsuario:''
   } 
async componentDidMount() {
        this.getUsers();

    }

getUsers=async () =>{
  const res = await axios.get('http://localhost:4000/api/users');
        this.setState({ users: res.data,
     UsuarioNombre :res.data,
     UsuarioApellidoP:res.data,
     UsuarioApellidoM:res.data,
     NombreUsuario:res.data,
     UsuarioCorreo:res.data,
     UsuarioContraseña:res.data,
     TipoUsuario:res.data,
     AreaUsuario:res.data
        
        });
}
onChangeUsuarioNombre=(e)=>{
  this.setState({
    UsuarioNombre:e.target.value
  });

}
onChangeUsuarioApellidoP=(e)=>{
  this.setState({
    UsuarioApellidoP:e.target.value
  });

}

onChangeUsuarioApellidoM=(e)=>{
  this.setState({
    UsuarioApellidoM:e.target.value
  });

}
onChangeNombreUsuario=(e)=>{
  this.setState({
    NombreUsuario:e.target.value
  });

}
onChangeUsuarioCorreo=(e)=>{
  this.setState({
    UsuarioCorreo:e.target.value
  });

}
onChangeUsuarioContraseña=(e)=>{
  this.setState({
    UsuarioContraseña:e.target.value
  });

}
onChangeTipoUsuario=(e)=>{
  this.setState({
    TipoUsuario:e.target.value
  });

}

onChangeAreaUsuario=(e)=>{
  this.setState({
    AreaUsuario:e.target.value
  });

}

onSubmit = async e =>{
  e.preventDefault();
  await axios.post('http://localhost:4000/api/users',{
    UsuarioNombre :this.state.UsuarioNombre,
     UsuarioApellidoP:this.state.UsuarioApellidoP,
     UsuarioApellidoM:this.state.UsuarioApellidoM,
     NombreUsuario:this.state.NombreUsuario,
     UsuarioCorreo:this.state.UsuarioCorreo,
     UsuarioContraseña:this.state.UsuarioContraseña,
     TipoUsuario:this.state.TipoUsuario,
     AreaUsuario:this.state.AreaUsuario
  });

  this.setState({
    UsuarioNombre :'',
     UsuarioApellidoP:'',
     UsuarioApellidoM:'',
     NombreUsuario:'',
     UsuarioCorreo:'',
     UsuarioContraseña:'',
     TipoUsuario:'',
     AreaUsuario:''

  });

    this.getUsers();
}



  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="container-md">
            <Typography component="h1" variant="h5">
              Registrar Nuevo Usuario
            </Typography>
            <form onSubmit={this.onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <input
                    type="text"
                    autoComplete="UsuarioNombre"
                    name="UsuarioNombre"
                    variant="outlined"
                    required
                    fullWidth
                    id="UsuarioNombre"
                    label="Nombre"
                    onChange={this.onChangeUsuarioNombre}
                    value={this.setState.UsuarioNombre}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    id="UsuarioApellidoP"
                    label="Apellido Paterno"
                    name="UsuarioApellidoP"
                    onChange={this.onChangeUsuarioApellidoP}
                    value={this.setState.UsuarioApellidoP}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    id="UsuarioApellidoM"
                    label="Apellido Materno"
                    name="UsuarioApellidoM"
                    onChange={this.onChangeUsuarioApellidoM}
                    value={this.setState.UsuarioApellidoM}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    name="NombreUsuario"
                    label="Nombre de Usuario"
                    id="NombreUsuario"
                    onChange={this.onNombreUsuario}
                    value={this.setState.NombreUsuario}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    name="UsuarioCorreo"
                    label="Correo Electronico"
                    id="UsuarioCorreo"
                    onChange={this.onChangeUsuarioCorreo}
                    value={this.setState.UsuarioCorreo}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    name="UsuarioContraseña"
                    label="Contraseña"
                    type="password"
                    id="UsuarioContraseña"
                    onChange={this.onChangeUsuarioContraseña}
                    value={this.setState.UsuarioContraseña}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    name="TipoUsuario"
                    label="Tipo de usuario"
                    id="TipoUsuario"
                    onChange={this.onChangeTipoUsuario}
                    value={this.setState.TipoUsuario}
                  />
                </Grid>
                <Grid item xs={12}>
                  <input
                    type="text"
                    variant="outlined"
                    required
                    fullWidth
                    name="AreaUsuario"
                    label="Area del Usuario"
                    id="AreaUsuario"
                    onChange={this.onChangeAreaUsuario}
                    value={this.setState.AreaUsuario}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="btn submit"
              >
                Registrar
              </Button>
            </form>
          </div>
        </Container>
        <div>
          <div className="com-md-8">
                        <ul className="list-group">
                            {
                                this.state.users.map(user => <li className="list-group-item list-gropu-item-action" key={user.id}>
                                    {user.UsuarioNombre},
                                    {user.UsuarioApellidoP},
                                    {user.UsuarioApellidoM},
                                    {user.UsuarioCorreo}
                                </li>)
                            }

                        </ul>

                    </div>

        </div>
      </div>
    );
  }
}
