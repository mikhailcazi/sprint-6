function NewComment() {
  return (
    <input
      value={text}
      onChange={(event) => setText(event.target.value)}
      className="comment"
      type="text"
      placeholder="Add a comment..."
      onKeyDown={handleOnkeyDown}
    />
  );
}
