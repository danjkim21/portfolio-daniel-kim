function Skill({ tools }) {
  let skillPill: string[] = tools.map((skill: string) => {
    return (
      <span className='pill__skill' key={Math.random() * 100}>
        {skill}
      </span>
    );
  });

  return <>{skillPill}</>;
}

export default Skill;
