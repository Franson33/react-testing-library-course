export const UserList = ({ users }) => (
  <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
    <tbody>
      {users.map(({ name, email }) => (
        <tr key={name}>
          <td>{name}</td>
          <td>{email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
