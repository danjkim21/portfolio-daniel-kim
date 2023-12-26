import pillStyles from './index.module.scss';

export interface SkillProps {
	tools: string[];
}

function Skill({ tools }: SkillProps) {
	const skillPill = tools.map((skill) => {
		return (
			<span className={pillStyles.pill__skill} key={Math.random() * 100}>
				{skill}
			</span>
		);
	});

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{skillPill}</>;
}

export default Skill;
