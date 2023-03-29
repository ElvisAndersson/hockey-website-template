import React from "react";

export default function PlayerProfile({ player }) {
  const averageGoals = player.goals / player.matchesPlayed;
  const handleClick = () => {
    console.log("a button was clicked!", player.name);
    // call the subscribe API
  };
  return (
    <div>
      <h3>
        {player.name} ({player.age})
      </h3>
      {player.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
      {/* goals, matches played, average goals per match */}
      <div>
        <span>Goals: {player.goals}</span>
        <span>Matches Played: {player.matchesPlayed}</span>
        <span>Avg Goals: {averageGoals.toFixed(2)}</span>
      </div>
      <button type="button" onClick={handleClick}>
        See More
      </button>
    </div>
  );
}
