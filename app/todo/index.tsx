import * as React from 'react';
import {
  Body, Right, Container, Text, Header, Content, Left, Title,
} from 'native-base';
import { connect } from 'react-redux';
import Item, { Props as ItemProps } from './item';
import { State } from '../reducer';

export interface Props {
  items: ItemProps[];
}

export const Todo = ({ items }: Props) => (
  <Container>
    <Header>
      <Left />
      <Body>
        <Title>やることリスト</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      {items.length === 0 && <Text>やることはありません。</Text>}
      {items.map(i => (
        <Item {...i} />
      ))}
    </Content>
  </Container>
);
const mapStateToProps = (state: State) => ({ items: state.todo.todo });
export default connect(mapStateToProps)(Todo);
