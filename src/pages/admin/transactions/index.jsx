export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Transactions</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">No</th>
            <th className="border p-2">User</th>
            <th className="border p-2">Book</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Jhon</td>
            <td className="border p-2">React JS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
