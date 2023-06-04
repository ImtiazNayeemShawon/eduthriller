import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Api from '../api/apiCaller';
import { toast,Toaster } from 'react-hot-toast';

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    try {
      const response = await Api.get('/admin/checkLoggedIn');
       // Replace with your backend API route to check if admin is logged in
      const { loggedIn } = response.data;
      if (!loggedIn) {
        router.push('/private/adminLogin'); // Redirect to admin login page if not logged in
      }
    } catch (error) {
      toast.error(error.message);
      // router.push('/private/AdminLogin');
    }
  };

  return (
    <div>Hell world
      <Toaster/>
       </div>
  );
};

export default AdminPage;