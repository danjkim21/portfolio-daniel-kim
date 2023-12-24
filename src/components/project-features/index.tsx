export interface FeatureProps {
	features: string[];
}

function Feature({ features }: FeatureProps) {
	const skillPill = features.map((feature) => {
		return (
			<li className="feature__item" key={Math.random() * 100}>
				{feature}
			</li>
		);
	});

	return <div>{skillPill}</div>;
}

export default Feature;
