// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   resetPasswordFormValues,
//   resetPasswordSchema,
// } from "@/schemas/resetPassword.schema";
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
// import { useState } from "react";
// import { ArrowLeft, Eye, EyeOff } from "lucide-react";
// import { Link } from "react-router-dom";
// import { MdLockReset } from "react-icons/md";

// const ResetPasswordForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const form = useForm<resetPasswordFormValues>({
//     resolver: zodResolver(resetPasswordSchema),
//     defaultValues: {
//       password: "",
//       confirmPassword: "",
//     },
//   });

//   const onSubmit = (data: resetPasswordFormValues) => {
//     console.log("Reset Data: ", data);
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 rounded-2xl bg-background text-foreground border border-border shadow-lg space-y-6">
//       {/* Header */}
//       <div className="flex flex-col items-center gap-3 text-center">
//         <MdLockReset size={56} className="text-primary" />
//         <h1 className="text-3xl font-semibold italic font-arabic text-primary">
//           إعادة تعيين كلمة المرور
//         </h1>
//         <p className="text-sm text-muted-foreground italic leading-relaxed">
//           الرجاء إدخال كلمة المرور الجديدة لتحديث معلومات الدخول الخاصة بك.
//         </p>
//       </div>

//       {/* Form */}
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           {/* كلمة المرور الجديدة */}
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>كلمة المرور الجديدة</FormLabel>
//                 <FormControl>
//                   <div className="relative">
//                     <Input
//                       type={showPassword ? "text" : "password"}
//                       placeholder="********"
//                       {...field}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword((prev) => !prev)}
//                       className="absolute right-2 top-2.5 text-muted-foreground"
//                     >
//                       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                     </button>
//                   </div>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* تأكيد كلمة المرور */}
//           <FormField
//             control={form.control}
//             name="confirmPassword"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>تأكيد كلمة المرور</FormLabel>
//                 <FormControl>
//                   <div className="relative">
//                     <Input
//                       type={showConfirmPassword ? "text" : "password"}
//                       placeholder="********"
//                       {...field}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowConfirmPassword((prev) => !prev)}
//                       className="absolute right-2 top-2.5 text-muted-foreground"
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff size={18} />
//                       ) : (
//                         <Eye size={18} />
//                       )}
//                     </button>
//                   </div>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Submit */}
//           <Button
//             type="submit"
//             className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-arabic"
//           >
//             إعادة تعيين
//           </Button>
//         </form>
//       </Form>

//       {/* Back to login */}
//       <div className="text-center">
//         <Link
//           to="/login"
//           className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent hover:underline font-arabic"
//         >
//           <ArrowLeft size={18} /> العودة لتسجيل الدخول
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ResetPasswordForm;

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

const ResetPasswordForm = () => {
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
          إعادة تعيين كلمة المرور
        </h1>
        <p className="text-sm text-muted-foreground">
          أدخل كلمة مرور جديدة لإعادة تعيين حسابك.
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
                <FormLabel>كلمة المرور الجديدة</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
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
                <FormLabel>تأكيد كلمة المرور</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="********"
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
            تأكيد إعادة التعيين
          </Button>
        </form>
      </Form>

      {/* Back to Login */}
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

export default ResetPasswordForm;
