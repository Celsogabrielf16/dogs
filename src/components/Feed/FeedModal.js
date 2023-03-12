import React from "react";
import { PHOTO_GET } from "../../api";
import useFetch from "../../Hooks/useFetch";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";
import "./FeedModal.css";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo);
    request(url, options);
  }, [photo, request]);

  return (
    <div>
      {error && <Error error={error}/>}
      {loading && <Loading />}
      {data && <PhotoContent data={data}/>}
    </div>
  );
};

export default FeedModal;
