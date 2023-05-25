const Detail = async ({ params }: { params: { id: string } }) => {
  const user = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URI}/api/users/${params.id}`
  ).then((res) => res.json());

  return (
    <div className="">
      <div className="flex space-x-2">
        <div>이름 : </div>
        <div>{user?.name || ""}</div>
      </div>
      <div className="flex space-x-2">
        <div>나이 : </div>
        <div>{user?.age || ""}</div>
      </div>
      <div className="flex space-x-2">
        <div>이메일 : </div>
        <div>{user?.email || ""}</div>
      </div>
    </div>
  );
};

export default Detail;
