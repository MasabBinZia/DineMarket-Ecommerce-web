import CategoryPage from "../categoryPage";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="py-20 lg:px-20">
      <CategoryPage params={params} />
    </div>
  );
}
