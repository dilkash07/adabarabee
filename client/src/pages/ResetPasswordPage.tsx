import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import { useParams } from "react-router-dom";

const ResetPasswordPage = () => {
  const { uid, token } = useParams();

  const resetPasswordUri = `${
    import.meta.env.VITE_SERVER_URI
  }/user/reset-password/${uid}/${token}`;
  console.log("RESET_PASSWORD_URI: ", resetPasswordUri);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950">
      <ResetPasswordForm />
    </main>
  );
};

export default ResetPasswordPage;
