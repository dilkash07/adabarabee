// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { signupSchema, SignupFormValues } from "@/schemas/signup.schema";
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
// import { Eye, EyeOff } from "lucide-react";
// import { Link } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";

// const SignupForm = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const form = useForm<SignupFormValues>({
//     resolver: zodResolver(signupSchema),
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       tc: false,
//     },
//   });

//   const onSubmit = (data: SignupFormValues) => {
//     console.log("Form Data: ", data);
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-background text-foreground border border-border font-arabic">
//       {/* Header */}
//       <div className="flex flex-col gap-2 items-center mb-6">
//         <CgProfile size={56} className="text-primary" />
//         <h1 className="text-3xl font-semibold text-primary tracking-wide">
//           إنشاء حساب
//         </h1>
//         <p className="text-muted-foreground text-sm text-center">
//           سجل الآن وابدأ رحلتك في عالم الأدب
//         </p>
//       </div>

//       {/* Form */}
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           {/* First & Last Name */}
//           <div className="flex gap-3">
//             <FormField
//               control={form.control}
//               name="firstName"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel>الاسم الأول</FormLabel>
//                   <FormControl>
//                     <Input placeholder="محمد" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="lastName"
//               render={({ field }) => (
//                 <FormItem className="w-full">
//                   <FormLabel>الاسم الأخير</FormLabel>
//                   <FormControl>
//                     <Input placeholder="الأنصاري" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//           </div>

//           {/* Email */}
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>البريد الإلكتروني</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="email"
//                     placeholder="example@mail.com"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Password */}
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>كلمة المرور</FormLabel>
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
//                       className="absolute right-2 top-2 text-muted-foreground"
//                     >
//                       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                     </button>
//                   </div>
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Confirm Password */}
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
//                       className="absolute right-2 top-2 text-muted-foreground"
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

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
//           >
//             إنشاء حساب
//           </Button>
//         </form>
//       </Form>

//       {/* Link to Login */}
//       <p className="text-sm text-center mt-6 text-muted-foreground">
//         لديك حساب بالفعل؟{" "}
//         <Link to="/login" className="text-accent font-semibold hover:underline">
//           تسجيل الدخول
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default SignupForm;

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormValues } from "@/schemas/signup.schema";
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
import { Eye, EyeOff, User, UserRoundPen } from "lucide-react";
import { CgProfile, CgLogIn } from "react-icons/cg";
import { useTranslation } from "react-i18next";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { t } = useTranslation();

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-background text-foreground border border-border font-arabic">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-6 text-center">
        <CgProfile size={56} className="text-primary" />
        <h1 className="text-3xl font-semibold text-primary">إنشاء حساب</h1>
        <p className="text-sm text-muted-foreground">
          يرجى تعبئة النموذج لإنشاء حساب جديد.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {/* Username */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>اسم المستخدم</FormLabel>
                <FormControl>
                  <Input placeholder="أدخل اسم المستخدم" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>كلمة المرور</FormLabel>
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
                      className="absolute right-2 top-2.5 text-muted-foreground"
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

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            إنشاء حساب
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <p className="text-sm text-center mt-6 text-muted-foreground">
        لديك حساب بالفعل؟{" "}
        <Link to="/login" className="text-accent hover:underline font-semibold">
          تسجيل الدخول
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
