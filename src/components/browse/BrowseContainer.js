//packages
import React from 'react'
import { connect } from 'react-redux'
//actions
import { hideBrowse } from '../browse/browseMod'
//components
import BrowseFilter from './BrowseFilter'


const BrowseContainer = ({ hideBrowse }) => {

  const filters = [
    "all",
    "art-&-design",
    "creative-writing-&-poetry",
    "culture-&-lifestyle",
    "gender-&-sexuality",
    "science-&-technology",
    "society-&-capitalism"
    ]

  return (
    <div id="browse"
      className="f1 pl2 tl"
      onMouseLeave={hideBrowse}
      >
      <span className="ml2 words">filters</span>
      <br/>
      {filters.map((genre, index) => {
        return (
          <BrowseFilter
            key={genre}
            index={index}
            genre={genre}
            />
          )}
      )}
    </div>
  )
}

export default connect(null, { hideBrowse })(BrowseContainer)
