import React, { useRef } from 'react'
import { toast } from 'react-toastify'

import emailjs from '@emailjs/browser'
import './contact.css'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jpu7pto',
        'template_auw79y8',
        form.current,
        'k4ZoePD71slnGLhSY'
      )
      .then((result) => {
        toast.success('Email enviado com sucesso!')
        e.target.reset()
      })
      .catch((error) => {
        console.error('Erro ao enviar email:', error)
        toast.error('Erro ao enviar email. Tente novamente.')
      })
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Fale Conosco</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">ti@hgvf.org.br</span>

              <a
                href="mailto:ti@hgvf.org.br"
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

          <form ref={form} onSubmit={sendEmail} className="contact__form">
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
              <label className="contact__form-tag">Problema</label>
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
