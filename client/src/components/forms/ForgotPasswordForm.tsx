// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   ForgotPasswordFormValues,
//   forgotPasswordSchema,
// } from "@/schemas/forgotPassword.schema";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "../ui/input";
// import { Button } from "../ui/button";
// import { MdEmail } from "react-icons/md";
// import { ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";

// const ForgotPasswordForm = () => {
//   const form = useForm<ForgotPasswordFormValues>({
//     resolver: zodResolver(forgotPasswordSchema),
//     defaultValues: {
//       email: "",
//     },
//   });

//   const onSubmit = (data: ForgotPasswordFormValues) => {
//     console.log("Forgot Password Data:", data);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto p-6 rounded-2xl shadow-md bg-background text-foreground border border-border">
//       {/* Header */}
//       <div className="flex flex-col gap-2 items-center mb-6">
//         <MdEmail size={56} className="text-primary" />
//         <h1 className="text-3xl font-arabic italic font-semibold text-primary text-center">
//           نسيت كلمة المرور؟
//         </h1>
//         <p className="text-sm text-muted-foreground text-center">
//           لا تقلق! فقط أدخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة
//           المرور.
//         </p>
//       </div>

//       {/* Form */}
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email Address</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="email"
//                     placeholder="you@example.com"
//                     autoComplete="email"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           <div>
//             <Button
//               type="submit"
//               className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
//             >
//               Send Reset Link
//             </Button>
//           </div>
//         </form>
//       </Form>

//       {/* Back to login */}
//       <div className="mt-6 text-center">
//         <Link
//           to="/login"
//           className="flex justify-center items-center gap-1 text-sm hover:text-accent hover:underline text-muted-foreground"
//         >
//           العودة إلى تسجيل الدخول
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ForgotPasswordForm;

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

const ForgotPasswordForm = () => {
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
          نسيت كلمة المرور؟
        </h1>
        <p className="text-sm text-muted-foreground">
          أدخل بريدك الإلكتروني لإرسال رابط إعادة تعيين كلمة المرور.
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
                <FormLabel>البريد الإلكتروني</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@email.com"
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
            إرسال رابط إعادة التعيين
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <div className="mt-4 text-center">
        <Link
          to="/login"
          className="flex justify-center items-center gap-1 text-sm text-muted-foreground hover:underline"
        >
          <ArrowLeft size={18} /> العودة إلى تسجيل الدخول
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
