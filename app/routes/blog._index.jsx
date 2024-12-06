import Articles from "../pages/blog/Articles";

export const meta = () => {
  return [{ title: "F1LAB" }, { name: "Блог", content: "Welcome to Remix!" }];
};

export default function Blog() {
  return (
    <div className="2xl:border-x border-gray-200 border-dashed lg:pt-90 pt-[70px]">
      <Articles />
    </div>
  );
}
