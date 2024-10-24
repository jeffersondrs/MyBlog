import React, { useState, useEffect } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.comment = "";
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <div className="bg-black/40 shadow-lg p-4 text-white mb-4">
      <h3 className="text-sm mb-4 font-medium">
        Deixe um comentário sobre este artigo
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={formData.comment}
          onChange={onInputChange}
          className="p-4 outline-none w-full h-40 focus:ring-2 focus:ring-gray-200 bg-gray-300 text-gray-700 text-xs placeholder:text-gray-400"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={formData.name}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 text-xs"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          value={formData.email}
          onChange={onInputChange}
          className="py-2 px-4 outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700 text-xs"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex flex-row gap-2 items-center justify-start">
          <input
            checked={formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-gray-400 cursor-pointer text-xs"
            htmlFor="storeData"
          >
            Salvar meus dados neste navegador para a próxima vez que eu
            comentar.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500 pb-2">Todos os campos são obrigatórios</p>
      )}
      <div className="">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="transition duration-300 ease hover:bg-indigo-900 inline-block bg-green-500 text-xs font-medium text-white px-4 py-2 cursor-pointer"
        >
          Postar Comentário
        </button>
        {showSuccessMessage && (
          <span className="text-xs float-right font-medium mt-3 text-green-500">
            Comentário enviado com sucesso!
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
