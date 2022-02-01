const Section = (props) => {
  return (
    <section>
      <h3>{props.category}</h3>
      <div className="movie">
        {props.images.map((img, index) => {
          return <img src={img} alt="" />;
        })}
      </div>
    </section>
  );
};

export default Section;
