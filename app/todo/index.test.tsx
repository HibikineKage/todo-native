import React from 'react';
import * as renderer from 'react-test-renderer';
import { Todo } from './index';

describe('Todo', () => {
  test('should show no items', () => {
    const tree = renderer.create(<Todo items={[]} />);
    expect(tree.root.findByType('Text').map(v => v.children[0])).toContain(
      'やることはありません。',
    );
  });
});
