'use client';

import { useState } from 'react';
import ArtistCard from '../../components/Artistcard';
import artistsData from '../../data/artist.json' assert { type: 'json' };

type Artist = {
  id: number;
  name: string;
  category: string;
  location: string;
  priceRange: string;
};

const artists: Artist[] = artistsData;

export default function ArtistListPage() {
  const [filter, setFilter] = useState('');

  const filteredArtists = artists.filter(artist =>
    filter ? artist.category === filter : true
  );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Artists</h1>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6">
        {['All', 'Singer', 'Dancer'].map(category => (
          <button
            key={category}
            onClick={() => setFilter(category === 'All' ? '' : category)}
            className={`px-4 py-2 rounded border ${
              filter === category ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Artist Cards Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
        {filteredArtists.map(artist => (
          <ArtistCard key={artist.id} {...artist} />
        ))}
      </div>
    </main>
  );
}