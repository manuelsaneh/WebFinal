import { useNavigate } from "react-router-dom";
import { PropsWithChildren, useEffect, useState } from "react";
import Loader from "../atoms/Loader/Loader";

interface ProtectedRoutesProps {
  redirectUrl?: string;
}

const ProtectedRoutes = ({
  children,
  redirectUrl = "/",
}: PropsWithChildren<ProtectedRoutesProps>) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!token) {
          throw new Error("Unauthorized access");
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Authentication error:", error);
        navigate(redirectUrl, { replace: true });
      }
    };

    checkAuth();
  }, [token, navigate, redirectUrl]);

  // if (!token) {
  //   navigate("/", { replace: true });
  // }
  // return children;

  if (isLoading) {
    // Render loading indicator or placeholder while checking authentication
    return <Loader />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
