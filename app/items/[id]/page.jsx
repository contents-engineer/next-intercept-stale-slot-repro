export default async function ItemPage({ params }) {
  const { id } = await params;
  return (
    <main style={{ padding: 12 }}>
      <h1>Item {id}</h1>
    </main>
  );
}
