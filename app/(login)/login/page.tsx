"use client";
import FormInput from "@/components/common/FormInput";
import FormWrapper from "@/components/common/FormWrapper";
import { loginSchema, LoginSchemaType } from "@/schemas/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/base/Button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router = useRouter();

  // form schema
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });


  // handle form submit
  const onsubmit = (data: LoginSchemaType) => {
    if (data.email === "aawiz@gmail.com" && data.password === "123456") {
      toast.success("login");
      router.push("/dashboard");
    } else {
      toast.error("not login");
    }
  };

  return (
    <main
      className={`w-full min-h-screen flex flex-col justify-center items-center `}
    >
      <div className="w-10/12 max-w-sm bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
        <h1 className="text-center font-bold text-lg text-primary dark:text-red">wellcome to aawiz app</h1>
        <FormWrapper onSubmit={handleSubmit(onsubmit)}>
          <FormInput
            label="Email"
            register={{ ...register("email") }}
            errors={errors?.email}
            isRequire={true}
            placeholder="ali@gmail.com"
          />
          <FormInput
            label="password"
            register={{ ...register("password") }}
            errors={errors?.password}
            isRequire={true}
            placeholder="123456"
          />
          <Button type="submit" name="login" />
        </FormWrapper>
        <div className="text-xs text-stroke-secondary">
          for login
          <p>email: aawiz@gmail.com</p>
          <p>password: 123456</p>
        </div>
      </div>
    </main>
  );
}
