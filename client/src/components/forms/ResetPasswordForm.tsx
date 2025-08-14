import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordSchema,
  resetPasswordFormValues,
} from "@/schemas/resetPassword.schema";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { MdLockReset } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ResetPasswordForm = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<resetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: resetPasswordFormValues) => {
    console.log("Reset Password Data:", data);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-background text-foreground border border-border font-arabic">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-6 text-center">
        <MdLockReset size={56} className="text-primary" />
        <h1 className="text-3xl font-semibold text-primary">
          {t("resetPassword.title")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t("resetPassword.subtitle")}
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* New Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("resetPassword.newPasswordLabel")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={t("resetPassword.passwordPlaceholder")}
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-2 top-2 text-muted-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("resetPassword.confirmPasswordLabel")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder={t("resetPassword.passwordPlaceholder")}
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      className="absolute right-2 top-2 text-muted-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {t("resetPassword.submitButton")}
          </Button>
        </form>
      </Form>

      {/* Back to Login */}
      <div className="mt-4 text-center">
        <Link
          to="/login"
          className="flex justify-center items-center gap-1 text-sm text-muted-foreground hover:underline"
        >
          <ArrowLeft size={18} /> {t("resetPassword.backToLogin")}
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
