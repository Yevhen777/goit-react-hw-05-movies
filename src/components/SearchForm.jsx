export const SearchForm = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>

        <input type="text" placeholder="Search " name="query" />
      </form>
    </>
  );
};
