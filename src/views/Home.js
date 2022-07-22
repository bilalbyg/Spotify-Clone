import Section from "../components/Section";

function Home() {
  const items = [
    {
      id: 1,
      title: 'Don\'s TunesDon\'s Tunes Don\'s TunesDon\'s Tunes',
      description: 'Spotify',
      image: 'https://i.scdn.co/image/ab67706c0000bebbd0fa8e8d4c5dce43d9b60a29',
      type: 'album',
      src: 'https://cdn.freesound.org/previews/498/498368_542096-lq.mp3',
      artis: 'Bilal Beygo'
    },
    {
      id: 2,
      title: "Don's TunesDon's Tunes",
      description: "Spotify",
      image: "https://i.scdn.co/image/ab67706c0000bebbd0fa8e8d4c5dce43d9b60a29",
      type: "album",
      src: "https://cdn.freesound.org/previews/498/498368_542096-lq.mp3"
    },
    {
      id: 3,
      title: "Don's TunesDon's Tunes",
      description: "Spotify",
      image: "https://i.scdn.co/image/ab67706c0000bebbd0fa8e8d4c5dce43d9b60a29",
      type: "album",
      src: "https://cdn.freesound.org/previews/498/498368_542096-lq.mp3"
    },
    {
      id: 4,
      title: "Don's TunesDon's Tunes",
      description: "Spotify",
      image: "https://i.scdn.co/image/ab67706c0000bebbd0fa8e8d4c5dce43d9b60a29",
      type: "artist",
    },
    {
      id: 5,
      title: "Don's TunesDon's Tunes",
      description: "Spotify",
      image: "https://i.scdn.co/image/ab67706c0000bebbd0fa8e8d4c5dce43d9b60a29",
      type: "album",
    }
  ];

  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/asdasd" items={items}></Section>
      <Section title="Shows to try" more="/asdasdasd" items={items}></Section>
      <Section title="Made for you" more="/asd" items={items}></Section>
    </div>
  );
}

export default Home;
