import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ForgotPasswordFormValues,
  forgotPasswordSchema,
} from "@/schemas/forgotPassword.schema";
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
import { MailCheck, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log("Forgot Password Data:", data);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-background text-foreground border border-border font-arabic">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-6 text-center">
        <MailCheck size={56} className="text-primary" />
        <h1 className="text-3xl font-semibold text-primary">
          {t("forgotPassword.title")}
        </h1>
        <p className="text-sm text-muted-foreground">
          {t("forgotPassword.subtitle")}
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("forgotPassword.emailLabel")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={t("forgotPassword.emailPlaceholder")}
                    {...field}
                  />
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
            {t("forgotPassword.submitButton")}
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <div className="mt-4 text-center">
        <Link
          to="/login"
          className="flex justify-center items-center gap-1 text-sm text-muted-foreground hover:underline"
        >
          <ArrowLeft size={18} /> {t("forgotPassword.backToLogin")}
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
