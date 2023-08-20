import IdPage from "./idPage";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <IdPage params={params} />
    </>
  );
}
