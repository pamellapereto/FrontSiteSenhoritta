import React from 'react'

const Login = () => {
  return (
    <>

      <button type="button" className="btn btn-outline-dark btnMenu" data-bs-toggle="modal" data-bs-target="#loginModal">
        <span className="fa fa-sign-in me-1"></span> Login
      </button>

      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Endereço de e-mail</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">Seu e-mail não será compartilhado com terceiros.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  {/* Lembrar senha ainda não está funcionando */}
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Lembrar senha</label>
                </div>
                <button type="submit" className="btn btn-outline-dark w-100 mt-5">Acessar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;