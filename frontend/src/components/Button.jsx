function Button({ tagType, style, handleClick }) {
  return (
    <button
      onClick={() => handleClick(tagType.title)}
      className={`rounded px-4 py-1 ${style}`}
    >
      {tagType.title}
    </button>
  );
}

export default Button;
