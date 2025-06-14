export default function ContactPage() {
  return (
    <div class
Name="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold">İletişim</h2>
      <form className="mt-4 space-y-4">
        <input type="text" placeholder="Adınız" className="w-full border p-2 rounded" />
        <input type="email" placeholder="E-posta" className="w-full border p-2 rounded" />
        <textarea placeholder="Mesajınız" rows="5" className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Gönder</button>
      </form>
    </div>
  );
}
