import Articles from "../pages/blog/Articles";

export const meta = () => {
  return [
    { title: "F1Lab | Блог" },
    { name: "Блог", content: "Блог компании F1Lab" },
  ];
};

export default function Blog() {
  return (
    <div className="2xl:border-x border-gray-200 border-dashed lg:pt-90 pt-[70px]">
      <Articles />
    </div>
  );
}
