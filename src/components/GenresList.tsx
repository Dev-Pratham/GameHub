import UseGenres from "../hooks/UseGenres";

const GenresList = () => {
  const { genres, error, loading } = UseGenres();

  return (
    //first we w
    // will chek if it working or not

    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
