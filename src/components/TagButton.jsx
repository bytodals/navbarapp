function TagButton({ text }) {
  const handleClick = () => {
    console.log("click!");
  };

  return (
    <button onClick={handleClick} className="tag-btn">
      {text}
    </button>
  );
}

export default TagButton;