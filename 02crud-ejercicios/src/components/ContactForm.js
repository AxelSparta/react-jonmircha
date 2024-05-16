import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo nombre sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo email es inválido";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo asunto a tratar es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo comentarios es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo comentarios sólo acepta hasta 255 caracteres";
  }

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <div>
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Escribe tu nombre"
          value={form.name}
        />
        {errors.name && <Message msg={errors.name} bgColor="#dc3545" />}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Escribe tu email"
          value={form.email}
        />
        {errors.email && <Message msg={errors.email} bgColor="#dc3545" />}

        <input
          type="subject"
          name="subject"
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Asunto a tratar"
          value={form.subject}
        />
        {errors.subject && <Message msg={errors.subject} bgColor="#dc3545" />}

        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
        ></textarea>
        {errors.comments && <Message msg={errors.comments} bgColor="#dc3545" />}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response &&
        (response.success ? (
          <Message bgColor="#28a745" msg={response.message} />
        ) : (
          <Message bgColor="#dc3545" msg={response.message} />
        ))}
    </div>
  );
};

export default ContactForm;
