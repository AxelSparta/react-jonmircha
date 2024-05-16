import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/axelnicolassparta@gmail.com", {
          body: form,
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          setResponse(res);
        })
        .catch((error) => {
          setResponse({ success: false, message: "Ocurrió un error" });
        })
        .finally(() => {
          setLoading(false);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 3000);
        });
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
