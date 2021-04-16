

// const STYLES = ['btn--primary', 'btn--outline']

// const SIZES = ['btn--medium', 'btn--large']


// export const Button = ({
//     children,
//     type,
//     onClick,
//     buttonStyle,
//     buttonSize,
// }) => {
//     const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle: STYLES[0];
//     const checkButtonSize = SIZES.includes(buttonSize)? buttonSize: SIZES[0]

//     return (
//         <div></div>
//     )
// }

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  border-radius: 30px;
  background: ${({primary}) => (primary ? '#01BF71' : '#010505')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 18px': '12px 10px')};
  color: ${({dark}) => (dark ? '#010505': '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '15px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  ${'' /* width: 50%; */}
  justify-content: center;
  ${'' /* text-align: center; */}
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};

  }
`

