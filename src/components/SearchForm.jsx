import { Input, Form } from './SharedLayout.styled';

export const SearchForm = ({ handleSubmit, onChange, query }) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={e => onChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </Form>
    </>
  );
};
