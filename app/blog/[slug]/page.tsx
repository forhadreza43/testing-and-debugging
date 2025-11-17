export default async function BlogPage({
   params,
}: {
   params: Promise<{ slug: string | number}>;
}) {
   const { slug } = await params;
   return <h1>Slug: {slug}</h1>;
}
