import React from 'react'

export default function Navigation() {
  return (
    <div className="nav-wrapper">
      <div className="left-wrapper">
        <h2>IMAGE</h2>
      </div>
      <div className="middle-wrapper">
        <h2>IMDC</h2>
      </div>
      <div className="right-wrapper">
        <button>Home</button>
        <select name="genre-filter" placeholder="Genre">
          <option value="null">Genre</option>
          <option value="null">Family</option>
        </select>
        <select name="mpaa-filter" placeholder="Rating">
          <option value="null">MPAA Rating</option>
        </select>
        <select name="year-filter" placeholder="Release Year">
          <option value="null">Release Year</option>
        </select>
      </div>
    </div>
  )
}
