/** Float Button */
export const FloatButton = ({ text = "버튼" }: { text?: string }) => {
  return (
    <div className="fixed hover:bg-gray-500 border-0 aspect-square border-transparent transition-colors cursor-pointer bottom-20 right-10 shadow-xl bg-gray-400 rounded-full w-16 flex items-center justify-center text-white duration-300">
      {text}
    </div>
  );
};
