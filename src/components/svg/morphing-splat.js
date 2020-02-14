// import React from 'react';

// import SplatSVG from "../../images/splat.svg"

// class Checked extends React.Component {
//     render() {
//         return (
//             <SplatSVG />
//         );
//     }
// }

// class CheckBox extends React.Component {
//     render() {
//         return (
//             <svg width="24" height="24" fill="#666666" viewBox="0 0 24 24">
//                 <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
//             </svg>
//         );
//     }
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             checked: false
//         };
//     }
//     toggleChecked() {
//         this.setState({checked: !this.state.checked});
//     }
//     render() {
//         return (
//             <div onClick={this.toggleChecked.bind(this)}>
//                 <MorphReplace width={100} height={100}>
//                     {this.state.checked ? <Checked key="checked" /> : <CheckBox key="checkbox" />}
//                 </MorphReplace>
//             </div>
//         );
//     }
// }

// export default App;

import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { MorphReplace, MorphTransition } from "react-svg-morph"
import SplatSVG from "../../images/splat.svg"
import SplatReverseSVG from "../../images/splat-reverse.svg"

const StyledDiv = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => (props.position === "right" ? "40vw" : "-10vw")};
  /* overflow: hidden; */

  svg {
    height: 100%;
  }

  path {
    fill: ${props =>
      props.color ? props.theme[props.color] : props.theme.mainColor};
  }
`

const SVG = ({ position = "right" }) => {
  const [reversed, setReversed] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setReversed(reversed => !reversed)
    }, 10000)
    return () => clearInterval(interval)
  }, [])
  return (
    <StyledDiv position={position} className="MorphingSVG">
      <MorphReplace width="100%" rotation="none" duration="8000">
        {reversed ? (
          <SplatReverseSVG key="perro" />
        ) : (
          <SplatSVG key="perrote" />
        )}
      </MorphReplace>
    </StyledDiv>
  )
}

export default SVG
