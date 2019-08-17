import * as React from 'react';
import { CheckBox, View, Text } from 'native-base';

export interface Props {
  completed: boolean;
  text: string;
}
const Item = ({ completed, text }: Props) => (
  <View>
    <CheckBox />
    <Text>{text}</Text>
  </View>
);
export default Item;
