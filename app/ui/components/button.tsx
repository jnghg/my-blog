/** Button */
export const Button = ({
  text = "등록",
  isMutating = false,
}: {
  text?: string;
  isMutating?: boolean;
}) => {
  return (
    <button className="border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white duration-300 px-3 py-1 rounded-lg">
      {isMutating ? "Loading.." : text}
    </button>
  );
};
