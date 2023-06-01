/** Button */
export const Button = ({ text = "등록" }: { text?: string }) => {
  return (
    <button className="border border-blue-600 bg-blue-600 hover:bg-blue-700 duration-300 text-white px-3 py-1 rounded-md">
      {text}
    </button>
  );
};
