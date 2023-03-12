import React from "react";
import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import "./FeedModal.css";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) setModalPhoto(null);
  }

  return (
    <div className="FeedModalComponent" onClick={handleOutsideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  );
};

export default FeedModal;
