export default function Testimonial() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
      <div className="shadow-lg p-5 rounded-lg">
        <p>"Website nya keren"</p>
        <h2 className="font-bold mt-3">Andi</h2>
      </div>

      <div className="shadow-lg p-5 rounded-lg">
        <p>"Belajar React jadi mudah"</p>
        <h2 className="font-bold mt-3">Budi</h2>
      </div>

      <div className="shadow-lg p-5 rounded-lg">
        <p>"UI nya modern"</p>
        <h2 className="font-bold mt-3">Sinta</h2>
      </div>
    </div>
  );
}
