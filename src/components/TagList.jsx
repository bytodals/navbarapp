import TagButton from './TagButton';

function TagList() {
  const tags = ['React', 'JavaScript', 'Frontend', 'UI', 'Components'];

  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <TagButton key={index} text={`Click Tag BTN: ${tag}`} />
      ))}
    </div>
  );
}

export default TagList;