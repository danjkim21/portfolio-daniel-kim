function Skill({ tools }: { tools: string[] }) {
  let skillPill = tools.map((skill) => {
    return (
      <span className='pill__skill' key={Math.random() * 100}>
        {skill}
      </span>
    );
  });

  return <>{skillPill}</>;
}

export default Skill;