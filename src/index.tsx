import * as React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components' // styleが定義されたコンポーネントを作成出来る

const Header = styled.h1`
  color: red;
`;

const Main = (<Header>Markdown Editor</Header>);

render(Main, document.getElementById('app'));
