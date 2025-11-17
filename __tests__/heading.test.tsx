import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Heading from '@/components/Heading';

test('Heading Testing', () => {
   render(<Heading />);
   expect(
      screen.getByRole('heading', { level: 1, name: 'Testing going on' })
   ).toBeDefined();
});
