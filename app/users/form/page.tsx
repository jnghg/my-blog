"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const Forms = () => {
  const { register, handleSubmit } = useForm();

  const router = useRouter();

  /** 등록 */
  const onRegister = async (form: any) => {
    console.log("watch  : ", form);

    const result = await fetch(`http://localhost:3000/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then((res) => res.json());

    if (result) {
      router.push("/users");
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onRegister)}>
      <div className="">
        <div className="w-24">이름</div>
        <input className="form-input" {...register("name")} />
      </div>
      <div>
        <div className="w-24">나이</div>
        <input className="form-input" {...register("age")} />
      </div>
      <div>
        <div className="w-24">이메일</div>
        <input className="form-input" {...register("email")} />
      </div>

      <div className="pt-10">
        <button className="border border-gray-600 bg-gray-600 text-white px-3 py-1 rounded-md">
          등록
        </button>
      </div>
    </form>
  );
};

export default Forms;
