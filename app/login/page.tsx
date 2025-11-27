"use client";
import FormInput from "@/components/common/FormInput";
import FormWrapper from "@/components/common/FormWrapper";
import { loginSchema, LoginSchemaType } from "@/schemas/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState : { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onsubmit = (data: LoginSchemaType) => {
    console.log(data);
  };

  return (
    <main
      className={`w-full min-h-screen flex flex-col justify-center items-center bg-gray-500 `}
    >
      <div className="w-10/12 max-w-sm bg-white p-6 rounded-xl shadow-lg flex flex-col gap-6">
        <h1 className="text-center font-bold text-lg">wellcome to aawiz app</h1>
        <FormWrapper onSubmit={handleSubmit(onsubmit)}>
          <FormInput
            label="Email"
            register={{ ...register("email") }}
            errors={errors?.email}
            isRequire={true}
          />
        </FormWrapper>
      </div>
    </main>
  );
}
