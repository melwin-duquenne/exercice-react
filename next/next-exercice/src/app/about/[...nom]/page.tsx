export default async function nomPostPage({
  params,
}: {
  params: Promise<{ nom: string }>
}) {
  const { nom } = await params
 
  return (
    <div>
      <h1>{nom}</h1>
    </div>
  )
}