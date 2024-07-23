import React from 'react'

import './contact.css'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Fale Conosco</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">user@email.com</span>

              <a
                href="mailto:devcleber@outlook.com"
                className="contact__button"
                target="_blank"
                rel="noreferrer"
              >
                Enviar um Email{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="uil uil-tumblr contact__card-icon"></i>

              <h3 className="contact__card-title">Tom Ticket</h3>
              <span className="contact__card-data">Abre um chamado</span>

              <a
                href=""
                target="_blank"
                className="contact__button"
                rel="noreferrer"
              >
                Fazer chamado{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Fale com Suporte</h3>

          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Nome</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Digite seu nome"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">E-mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Digite seu e-mail.."
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Projeto</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input "
                placeholder="Escreva  seu projeto..."
              ></textarea>
            </div>
            <button>
              Enviar Menssagem <i className="uil uil-message button-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
