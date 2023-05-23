const UsersPage = async () => {
  const users = (await fetch(`http://localhost:3000/api/users`, {
    next: { revalidate: 20 },
  }).then((res) => res.json())) as any[];

  console.log("users : ", users);

  return (
    <div>
      <div className="mb-10">User List</div>
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id} className="flex space-x-3">
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
