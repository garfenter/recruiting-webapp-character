import { useCallback, useState } from "react";

const AttributesView = ({ attributes: characterAttributes }) => {
  const [attributes, setAttributes] = useState(characterAttributes);
  
  const calculateModifier = (value) => {
    return Math.trunc(value / 2 - 5);
  }

  const increase = useCallback(
    (attribute) => {
      if (attributes.reduce((acc, a) => acc + a.val, 0) >= 70)
        return alert("Total attributes cannot be more than 70");
      setAttributes((attributes) =>
        attributes.map((a) =>
          a.attribute === attribute.attribute ? { ...a, val: a.val + 1, modifier: calculateModifier(a.val + 1) } : a
        )
      );
    },
    [attributes, setAttributes]
  );

  const decrease = useCallback(
    (attribute) => {
      if (attribute.val === 0) return alert("Attribute cannot be less than 0");

      setAttributes((attributes) =>
        attributes.map((a) =>
          a.attribute === attribute.attribute ? { ...a, val: a.val - 1, modifier: calculateModifier(a.val + 1) } : a
        )
      );
    },
    [setAttributes]
  );

  return (
    <div>
      <h2>Attributes</h2>
      {attributes.map((attribute, index) => (
        <div key={index}>
          {attribute.attribute}: {attribute.val} (Modifier: {attribute.modifier})
          <button onClick={() => increase(attribute)}>+</button>
          <button onClick={() => decrease(attribute)}>-</button>
        </div>
      ))}
    </div>
  );
};
export default AttributesView;
