import React from "react";

interface Props {
  name: string;
  category: string;
  location: string;
  priceRange: string;
}

const ArtistCard: React.FC<Props> = ({ name, category, location, priceRange }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="text-lg font-bold">{name}</h2>
    <p>{category}</p>
    <p>{location}</p>
    <p className="font-semibold">{priceRange}</p>
    <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">Ask for Quote</button>
  </div>
);

export default ArtistCard;