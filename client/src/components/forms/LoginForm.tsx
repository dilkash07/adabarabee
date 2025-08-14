import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormValues, loginSchema } from "@/schemas/login.schema";
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
import { Link } from "react-router-dom";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { CgLogIn } from "react-icons/cg";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-background text-foreground border border-border font-arabic">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-6 text-center">
        <CgLogIn size={56} className="text-primary" />
        <h1 className="text-3xl font-semibold text-primary">
          {t("login.title")}
        </h1>
        <p className="text-sm text-muted-foreground">{t("login.subtitle")}</p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("login.emailLabel")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("login.emailPlaceholder")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("login.passwordLabel")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder={t("login.passwordPlaceholder")}
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-2 top-2.5 text-muted-foreground"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
            {t("login.submitButton")}
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <div className="mt-4 text-sm text-center text-muted-foreground">
        <Link
          to="/forgot-password"
          className="hover:underline text-accent font-medium"
        >
          {t("login.forgotPassword")}
        </Link>
      </div>

      <p className="text-sm text-center mt-4 text-muted-foreground">
        {t("login.noAccount")}{" "}
        <Link
          to="/signup"
          className="text-accent hover:underline font-semibold"
        >
          {t("login.signupLink")}
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
