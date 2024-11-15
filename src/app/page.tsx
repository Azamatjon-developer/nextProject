async function fetchData () {
  const res = await fetch ("https://jsonplaceholder.typicode.com/photos");
  const result = await res.json()
  return result
}

export default async function Home () {
  const res = await fetchData()
  console.log(res)
  return (
    <div>
      <h2 className="text-[32px] text-slate-700">Main page </h2>
      <p>
        {res.title}
      </p>
    </div>
  )
}