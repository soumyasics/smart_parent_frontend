import { useEffect, useState } from "react";

const useParentLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const parentData = localStorage.getItem("parentData");
    if (parentData) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return isLoggedIn;
};

export default useParentLoggedIn;
