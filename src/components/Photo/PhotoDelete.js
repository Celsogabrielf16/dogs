import React from "react";
import useFetch from "../../Hooks/useFetch";
import "./PhotoDelete.css";
import { PHOTO_DELETE } from "../../api";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button onClick={handleClick} className="PhotoDelete" disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className="PhotoDelete">
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
