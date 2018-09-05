//packages
import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
//components
import square from '../../media/square.png'
import PubStar from './PubStar'

const PubCard = ({pub, user}) => {

    let coverImg = React.createRef()
    let defaultImg = React.createRef()

    const handleLoad = () => {
      defaultImg.current.setAttribute("class", "hidden")
      coverImg.current.setAttribute("class", "w-100 mb2 center cover-image shown")
    }

    const slug = pub.attributes.title.split(" ").join("-").toLowerCase()

    return(
      <div className="ttl">
        <img
          ref={defaultImg}
          alt={"default-image"}
          className="w-100 shown mb2"
          src={square}
          />
        <img
          ref={coverImg}
          alt={pub.attributes.title}
          className="w-100 mb2 center cover-image hidden"
          src={pub.attributes['cover-image-url']}
          onLoad={handleLoad}
          />
        <div className="mt2 pt1 bg-washed-blue center flex justify-between">
        <div className="f5 ilb ml1 tl w-80 text b">{pub.attributes.title}</div>
        <div className="ilb mt1 mr1 tr w-20">
        <CSSTransition
          in={user !== null}
          timeout={300}
          classNames="fade-in"
          unmountOnExit
          >
          <PubStar pubId={pub.id} userId={user == null ? null : user.id} />
          </CSSTransition>
          <a href={"/publications/" + slug}>
            ↗
          </a>
        </div>
      </div>
      <div className="f6 pt1 pl1 bg-washed-blue center text">{pub.attributes.tagline}</div>
    </div>
  )
 }

 const mapStateToProps = ({ app }) => {
   return {
     user: app.user
   }
 }

export default connect(mapStateToProps)(PubCard)
