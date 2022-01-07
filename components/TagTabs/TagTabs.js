import React from 'react';

export default function TagTabs({ tags, activeTag, setActiveTag }) {
  const inputChangeHanlder = (e) => {
    e.target.value !== '' && setActiveTag(e.target.value);
  };

  const activeClassName = 'bg-black text-white';

  return (
    <div className="my-6 flex flex-col lg:flex-row flex-wrap">
      <label className={`p-2 pb-1 cursor-pointer ${activeTag === 'todos' ? activeClassName : ''}`}>
        <input
          type="radio"
          value="todos"
          name="tag"
          className="hidden"
          onChange={inputChangeHanlder}
        />
        TODOS
      </label>
      {tags.map((tag) => (
        <label
          key={tag}
          className={`p-2 pb-1 cursor-pointer ${activeTag === tag ? activeClassName : ''}`}>
          <input
            type="radio"
            value={tag}
            name="tag"
            className="hidden"
            onChange={inputChangeHanlder}
          />
          {tag.toUpperCase()}
        </label>
      ))}
    </div>
  );
}
