"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";

const UserForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  /** 등록 */
  const onRegister = async (form: any) => {
    const result = await fetch(`/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      next: {
        tags: ["tag"],
      },
    }).then((res) => res.json());

    await fetch(
      "http://localhost:3000/api/revalidate?path=/users&secret=HGJANG_TOKEN"
    );

    if (result) {
      router.push("/users");
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onRegister)}>
      <div className="">
        <div className="w-24 text-white">이름</div>
        <input
          className="form-input"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <div className="w-24 text-white">나이</div>
        <input className="form-input" {...register("age")} />
      </div>
      <div>
        <div className="w-24 text-white">이메일</div>
        <input className="form-input" {...register("email")} />
      </div>

      <div className="pt-10">
        <Button text="등록" />
      </div>
    </form>
  );
};

export default UserForm;
