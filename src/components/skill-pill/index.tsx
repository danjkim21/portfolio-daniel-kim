export interface SkillProps {
	tools: string[];
}

function Skill({ tools }: SkillProps) {
	const skillPill = tools.map((skill) => {
		return (
			<span className="pill__skill" key={Math.random() * 100}>
				{skill}
			</span>
		);
	});

	return <div>{skillPill}</div>;
}

export default Skill;
