function Skill(props) {
  let skillPill = props.tools.map((skill) => {
    return (
      <span className='pill__skill' key={Math.random() * 100}>
        {skill}
      </span>
    );
  });

  return <>{skillPill}</>;
}

export default Skill;
