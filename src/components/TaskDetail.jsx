// TaskDetail.jsx
import React, { useState } from 'react';

export default function TaskDetail({ task }) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div>
      <h5 onClick={() => setIsHidden(!isHidden)} style={{ cursor: 'pointer' }}>
        {task.title} {isHidden ? '▶' : '▼'}
      </h5>
      {!isHidden && (
        <ul>
          {task.subtitles.map((subtitle) => (
            <li>{subtitle}</li>
          ))}
        </ul>
      )}
    </div>
  );
}