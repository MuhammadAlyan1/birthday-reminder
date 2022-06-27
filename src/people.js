export function People(props) {
  const { image, name, age } = props;
  return (
    <section className="person">
      <div className="image-div">
        <img src={image} alt={name} />
      </div>
      <div className="content-div">
        <p className="name">{name}</p>
        <p className="age">{age} years</p>
      </div>
    </section>
  );
}
