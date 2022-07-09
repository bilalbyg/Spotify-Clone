export default function Playlists() {
  return (
    <nav className="mx-6 mt-2 flex-auto border-t overflow-auto border-white border-opacity-20 py-2">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-sm text-link hover:text-white h-8 flex items-center"
            >
              My Playlist
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
