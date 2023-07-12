"use client";

import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import { useState, useTransition } from "react";

const UserForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  /** 등록 */
  const onRegister = async (form: any) => {
    setIsFetching(true);

    const result = await fetch(`/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then((res) => res.json());

    const { revalidated } = await fetch(
      `http://localhost:3000/api/revalidate?path=/users&secret=HGJANG_TOKEN`
    ).then((res) => res.json());

    setIsFetching(false);

    if (result && revalidated) {
      startTransition(() => {
        if (pathname === "/users/form") {
          router.push(`/users/${result.id}`);
        } else {
          router.refresh();
        }
      });
    }
  };

  return (
    <form className="space-y-2 pt-7" onSubmit={handleSubmit(onRegister)}>
      <div className="">
        <div className="w-24 text-white">이름</div>
        <input
          className="form-input"
          {...register("name", { required: true })}
        />
      </div>
      <div>
        <div className="w-24 text-white">이메일</div>
        <input className="form-input" {...register("email")} />
      </div>

      <div className="pt-5">
        <Button text={"등록"} isMutating={isMutating} />
      </div>
    </form>
  );
};

export default UserForm;
