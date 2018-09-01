import React from 'react'
import square from '../../media/square.png'

const Pub = ({pub}) => {

    let coverImg = React.createRef()
    let defaultImg = React.createRef()

    const handleLoad = () => {
      defaultImg.current.setAttribute("class", "hidden")
      coverImg.current.setAttribute("class", "w-100 mb2 center cover-image visible")
    }

    return(
      <div className="ttl">
        <img
          ref={defaultImg}
          alt={"default-image"}
          className="w-100 visible mb2"
          src={square}
          />
        <img
          ref={coverImg}
          alt={pub.title}
          className="w-100 mb2 center cover-image hidden"
          src={pub['cover-image-url']}
          onLoad={handleLoad}
          />
        <div className="mt2 pt1 bg-washed-blue center flex justify-between">
        <div className="f5 ilb ml1 tl w-80 title b">{pub.title}</div>
        <div className="ilb mt1 mr1 tr w-20">
          <a href="#">☆</a>
          <a href={pub.url}>
            ↗
          </a>
        </div>
      </div>
      <div className="f6 pt1 pl1 bg-washed-blue center tagline">{pub.tagline}</div>
    </div>
  )
 }

export default Pub
