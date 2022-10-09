import '../App.css';

function Feature(props) {
  let skillPill = props.features.map((feature) => {
    return (
      <li
        className="feature__item"
        key={Math.random() * 100}
      >
        {feature}
      </li>
    );
  });

  return <>{skillPill}</>;
}

export default Feature;