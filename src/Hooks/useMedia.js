import React from "react";

const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    function chengeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    chengeMatch();
    window.addEventListener('resize', chengeMatch);
    return () => {
      window.removeEventListener('resize', chengeMatch)
    }
  }, [media]);

  return match;
};

export default useMedia;
