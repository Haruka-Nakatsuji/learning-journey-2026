export const StateCounter = ({ step, onUpdate }) => {
  return (
    <>
      <button onClick={() => onUpdate(step)}>{step}</button>
    </>
  );
};
