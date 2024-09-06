import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, filterCategory } from '../features/categorySlice';

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleFilter = (category) => {
    dispatch(filterCategory(category));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{category.name}</h2>
            <button
              onClick={() => handleFilter(category.name)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Filter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
