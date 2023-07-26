import { useCallback, useState } from "react";

const SkillsView = ({ skills: characterSkills }) => {
    const [skills, setSkills] = useState(characterSkills);

    const increase = useCallback(
        (skill) => {
            setSkills((skills) =>
            skills.map((a) =>
              a.skill.name === skill.skill.name ? { ...a, val: a.val + 1 } : a
            )
          );
        },
        [setSkills]
      );
    
      const decrease = useCallback(
        (skill) => {
          if (skill.val === 0) return alert("Skill cannot be less than 0");
    
          setSkills((skills) =>
            skills.map((a) =>
              a === skill ? { ...a, val: a.val - 1 } : a
            )
          );
        },
        [setSkills]
      );
    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill) => {
                    return (
                        <div key={skill.skill.name}>
                            {skill.skill.name} (Modifier: {skill.skill.attributeModifier}) {skill.val}
                            <button onClick={()=> increase(skill)}>+</button>
                            <button onClick={()=> decrease(skill)}>-</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default SkillsView