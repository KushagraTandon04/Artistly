'use client';
import { useEffect, useState } from 'react';

type Artist = {
  id: number;
  name: string;
  category: string[];
  languages: string[];
  location: string;
  feeRange: string;
};

export default function DashboardPage() {
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    // Try to load from localStorage if available
    const stored = localStorage.getItem('submittedArtists');
    if (stored) {
      setArtists(JSON.parse(stored));
    }
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Submitted Artists</h1>

      {artists.length === 0 ? (
        <p>No artist submissions yet.</p>
      ) : (
        <table className="w-full border mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Category</th>
              <th className="border p-2 text-left">Languages</th>
              <th className="border p-2 text-left">Location</th>
              <th className="border p-2 text-left">Fee</th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist, index) => (
              <tr key={index}>
                <td className="border p-2">{artist.name}</td>
                <td className="border p-2">{artist.category.join(', ')}</td>
                <td className="border p-2">{artist.languages.join(', ')}</td>
                <td className="border p-2">{artist.location}</td>
                <td className="border p-2">{artist.feeRange}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}