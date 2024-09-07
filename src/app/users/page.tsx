import Link from "next/link";

async function fetchUsers() {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/users/", {
      cache: "no-store",
    });
    return data.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function Users() {
  const users = await fetchUsers();
  return (
    <div className="grid grid-cols-5 m-5">
      {users.map((user: any) => {
        return (
          <div className="w-auto border-black border-2 m2">
            <div>name: {user.name}</div>
            <div>email: {user.email}</div>
            <Link href={`/users/${user.id}`} className="bg-red-500">
              Go Detail
            </Link>
          </div>
        );
      })}
    </div>
  );
}
