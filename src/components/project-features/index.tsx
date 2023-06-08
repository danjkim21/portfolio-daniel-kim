function Feature({ features }) {
  let skillPill: string[] = features.map((feature: string) => {
    return (
      <li className='feature__item' key={Math.random() * 100}>
        {feature}
      </li>
    );
  });

  return <>{skillPill}</>;
}

export default Feature;
