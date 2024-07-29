export default function Category({ categories, filterCategory }) {
  return (
    <>
      {categories.map((category) => (
        <button
          type="button"
          className="px-2 py-1 max-w-32 bg-transparent rounded-lg border-2 border-blue shadow-lg hover:bg-blue text-blue text-sm hover:text-white duration-300 cursor-pointer active:scale-[0.98] md:px-5 "
          onClick={() => filterCategory(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </>
  );
}
