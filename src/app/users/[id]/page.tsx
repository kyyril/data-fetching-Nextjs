import Link from "next/link";
async function fetchUser(id: string) {
  try {
    let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      cache: "no-store",
    });
    return data.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function userDetail({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const user = await fetchUser(params.id);
  return (
    <div className="w-auto border-black border-2">
      <div>name: {user.name}</div>
      <div>email: {user.email}</div>
      <div>company: {user.company.name}</div>
      <Link href={`/users`} className="bg-red-500">
        Go Back
      </Link>
    </div>
  );
}
