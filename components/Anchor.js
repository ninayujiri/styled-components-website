import styled, { css } from 'styled-components'
import rem from 'polished/lib/helpers/rem'

import { LinkIcon } from 'react-octicons-svg'
import { Header, SubHeader } from './Layout'
import { mobile } from '../utils/media'

const Anchor = styled.a`
  display: none;
  position: absolute;
  left: 0;
  color: inherit;
`

const AnchorIcon = styled(LinkIcon).attrs({
  width: null,
  height: null
})`
  width: ${rem(20)};
  opacity: 0.7;
  margin-top: ${rem(-5)};

  &:hover {
    opacity: 0.9;
  }
`

const AnchorHeader = styled(Header)`
  position: relative;
  margin-left: ${rem(-30)};
  padding-left: ${rem(30)};
  transition: all 0.3s ease-in-out;

  ${mobile(css`
    margin-left: 0;

    ${Anchor} {
      display: inline-block;
    }
  `)}

  &:hover ${Anchor} {
    display: inline-block;
  }
`

const AnchorSubHeader = AnchorHeader.extendWith(SubHeader)``

export default ({ children, href, sub }) => {
  const Child = sub ? AnchorSubHeader : AnchorHeader

  return (
    <Child>
      <Anchor href={href}>
        <AnchorIcon />
      </Anchor>

      {children}
    </Child>
  )
}
