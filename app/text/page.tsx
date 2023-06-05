import { getAllTexts } from "@libs/api/text";

const Text = async () => {
  const data = (await getAllTexts()) as {
    id: string | number;
    title: string;
    body: string;
  }[];
  return (
    <>
      {data.map((row) => (
        <div
          key={row.id}
          className="text-white border rounded-2xl pl-2 space-y-2 mb-3"
        >
          <div>{row.id}</div>
          <div>{row.title}</div>
          <div>{row.body}</div>
        </div>
      ))}
    </>
  );
};

export default Text;
