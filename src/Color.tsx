import React, { CSSProperties } from 'react'
import styled from 'styled-components'

export interface ColorProps {
  style?: CSSProperties
}

const Color = styled(({ style }: ColorProps) => (
  <div
    style={{
      ...style,
      background: `anything`,
    }}
  />
))``

export default Color
