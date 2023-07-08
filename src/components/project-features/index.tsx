export interface FeatureProps {
  features: string[];
}

function Feature({ features }: FeatureProps) {
  let skillPill = features.map((feature) => {
    return (
      <li className='feature__item' key={Math.random() * 100}>
        {feature}
      </li>
    );
  });

  return <>{skillPill}</>;
}

export default Feature;
