'use client';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  bio: yup.string().required(),
  category: yup.array().min(1, 'Select at least one category'),
  location: yup.string().required(),
  feeRange: yup.string().required(),
  languages: yup.array().min(1, 'Select at least one language')
});

export default function OnboardPage() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      bio: '',
      category: [],
      location: '',
      feeRange: '',
      languages: []
    }
  });

  const onSubmit = (data: any) => {
  const existing = localStorage.getItem('submittedArtists');
  const parsed = existing ? JSON.parse(existing) : [];

  const newEntry = {
    id: Date.now(), // Simple unique ID
    ...data,
  };

  const updated = [...parsed, newEntry];
  localStorage.setItem('submittedArtists', JSON.stringify(updated));

  alert('Artist submitted successfully!');
};

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Artist Onboarding</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label className="block font-medium">Name</label>
          <input {...register('name')} className="w-full border px-3 py-2 rounded" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block font-medium">Bio</label>
          <textarea {...register('bio')} className="w-full border px-3 py-2 rounded" />
          {errors.bio && <p className="text-red-500 text-sm">{errors.bio.message}</p>}
        </div>

        {/* We’ll add category & multi-select fields next */}
        {/* Category Checkboxes */}
<div>
  <label className="block font-medium mb-1">Category</label>
  <div className="flex gap-4">
    {['Singer', 'Dancer', 'DJ', 'Speaker'].map((cat) => (
      <label key={cat} className="flex items-center gap-2">
        <input type="checkbox" value={cat} {...register('category')} />
        {cat}
      </label>
    ))}
  </div>
  {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
</div>

{/* Languages Checkboxes */}
<div>
  <label className="block font-medium mb-1">Languages</label>
  <div className="flex gap-4">
    {['Hindi', 'English', 'Marathi', 'Punjabi'].map((lang) => (
      <label key={lang} className="flex items-center gap-2">
        <input type="checkbox" value={lang} {...register('languages')} />
        {lang}
      </label>
    ))}
  </div>
  {errors.languages && <p className="text-red-500 text-sm">{errors.languages.message}</p>}
</div>

{/* Location Field */}
<div>
  <label className="block font-medium">Location</label>
  <input
    {...register('location')}
    className="w-full border px-3 py-2 rounded"
  />
  {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
</div>

{/* Fee Range Dropdown */}
<div>
  <label className="block font-medium">Fee Range</label>
  <select
    {...register('feeRange')}
    className="w-full border px-3 py-2 rounded"
  >
    <option value="">Select...</option>
    <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
    <option value="₹25,000+">₹25,000+</option>
  </select>
  {errors.feeRange && <p className="text-red-500 text-sm">{errors.feeRange.message}</p>}
</div>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Submit
        </button>
      </form>
    </main>
  );
}
