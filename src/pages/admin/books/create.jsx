export default function Create() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Create Book</h1>

      <form className="space-y-4">
        <input type="text" placeholder="Book Title" className="w-full border p-3 rounded" />

        <input type="text" placeholder="Author" className="w-full border p-3 rounded" />

        <button className="bg-green-500 text-white px-5 py-3 rounded">Save</button>
      </form>
    </div>
  );
}
