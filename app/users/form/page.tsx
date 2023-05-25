"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Forms = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  /** 등록 */
  const onRegister = async (form: any) => {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URI}/api/users`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    ).then((res) => {
      return res.json();
    });

    if (result) {
      router.push("/users");
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onRegister)}>
      <div className="">
        <div className="w-24">이름</div>
        <input
          className="form-input"
          {...register("name", { required: true })}
        />
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
