type UserListProps = {
  id: number;
  name: string;
}

async function getUser(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Lucas', },
        { id: 2, name: 'João', },
      ])
    }, 3000)
  })
}

async function UserList() {
  const userList = await getUser();

  return (
    <div className="mt-20 text-white">
      {userList.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default function UserPage() {
  return (
    <div>
      <UserList />
    </div>
  )
}