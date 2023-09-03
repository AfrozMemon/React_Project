import React from 'react'
import "./SearchResult.css"

export const SearchResult = ({result}) => {
    const debugMessage = "You selected";
    // const notify = () => toast(`You Selected on $(result.name)`);
  return (
    <div 
        className = "search-result"
        onClick = {(e) => alert(`${ debugMessage }: ${result}`)}
        >
    {result}
    </div>
  )
}
