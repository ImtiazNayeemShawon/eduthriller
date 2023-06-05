import { useEffect } from "react";
import { useRouter } from "next/router";
import Api from "./api/apiCaller";
import { toast, Toaster } from "react-hot-toast";
import { useState } from "react";

const AdminPage = () => {
  const router = useRouter();
  const [IsloggedIn, setIsLoggedin] = useState(false);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const response = await Api.get("/admin/checkLoggedIn");
      const { loggedIn } = response.data;
      setIsLoggedin(loggedIn);
      if (IsloggedIn) {
        router.push("/adminPage");
      }
    } catch (error) {
      toast.error(error.message);
      router.push("/AdminLogin");
    }
  };

  return (
    <div>
      Hell world
      <Toaster />
    </div>
  );
};

export default AdminPage;
