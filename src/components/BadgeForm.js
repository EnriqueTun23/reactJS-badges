import React from 'react';

class BadgeForm extends React.Component {
  

  handleClick = e => {
    console.log('Button was clicked');
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log('Form was submitted');
  //   console.log(this.state);
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>Foto</label>
            <input type="file" className="form-control" name='foto' onChange={this.props.onChange} value={this.props.ValoresFormulario.foto} />
          </div>
          <div className="form-group">
            <label>Nombres</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.ValoresFormulario.firstName}
            />
          </div>

          <div className="form-group">
            <label>Apellidos</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.ValoresFormulario.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.ValoresFormulario.email}
            />
          </div>

          <div className="form-group">
            <label>Titulo profesional</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.ValoresFormulario.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Facebook</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.ValoresFormulario.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Guardar
          </button>
        </form>
        {this.props.error && (
          <p className="text-danger">{this.props.error.message}</p>
        ) }
      </div>
    );
  }
}

export default BadgeForm;
