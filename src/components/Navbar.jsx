import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Kerim Tetik</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Anasayfa</Link>
        <Link to="/hakkimda" className="hover:text-blue-500">Hakkımda</Link>
        <Link to="/projeler" className="hover:text-blue-500">Projeler</Link>
        <Link to="/iletisim" className="hover:text-blue-500">İletişim</Link>
      </div>
    </nav>
  );
}
