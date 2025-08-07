// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { loginSchema, LoginFormValues } from "@/schemas/login.schema";
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

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const form = useForm<LoginFormValues>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   const onSubmit = (data: LoginFormValues) => {
//     console.log("Form Data: ", data);
//   };

//   return (
//     <div className="w-full max-w-md p-6 rounded-2xl shadow-lg bg-card text-foreground border border-border">
//       {/* Header */}
//       <div className="flex flex-col gap-2 items-center mb-6">
//         <CgProfile size={56} className="text-primary" />
//         <h1 className="text-3xl font-semibold text-primary font-arabic italic">
//           تسجيل الدخول
//         </h1>
//         <p className="text-sm text-muted-foreground text-center font-arabic">
//           أدخل البريد الإلكتروني وكلمة المرور الخاصة بك لتسجيل الدخول إلى حسابك.
//         </p>
//       </div>

//       {/* Form */}
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//           {/* Email Field */}
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>البريد الإلكتروني</FormLabel>
//                 <FormControl>
//                   <Input
//                     type="email"
//                     placeholder="example@email.com"
//                     {...field}
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />

//           {/* Password Field */}
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

//           {/* Forgot Password Link */}
//           <div className="text-end">
//             <Link
//               to="/forgot-password"
//               className="text-sm text-muted-foreground hover:underline hover:text-accent"
//             >
//               هل نسيت كلمة المرور؟
//             </Link>
//           </div>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
//           >
//             تسجيل الدخول
//           </Button>
//         </form>
//       </Form>

//       {/* Footer */}
//       <p className="text-sm text-center mt-6 text-muted-foreground">
//         ليس لديك حساب؟{" "}
//         <Link
//           to="/signup"
//           className="text-accent font-semibold hover:underline"
//         >
//           إنشاء حساب
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default LoginForm;

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

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        <h1 className="text-3xl font-semibold text-primary">تسجيل الدخول</h1>
        <p className="text-sm text-muted-foreground">
          يرجى إدخال بياناتك لتسجيل الدخول إلى حسابك.
        </p>
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

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            تسجيل الدخول
          </Button>
        </form>
      </Form>

      {/* Footer */}
      <div className="mt-4 text-sm text-center text-muted-foreground">
        <Link
          to="/forgot-password"
          className="hover:underline text-accent font-medium"
        >
          نسيت كلمة المرور؟
        </Link>
      </div>

      <p className="text-sm text-center mt-4 text-muted-foreground">
        ليس لديك حساب؟{" "}
        <Link
          to="/signup"
          className="text-accent hover:underline font-semibold"
        >
          إنشاء حساب جديد
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
