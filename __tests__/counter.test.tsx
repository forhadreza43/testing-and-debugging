import Counter from '@/components/Counter';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Counter Component', () => {
   render(<Counter />);

   test('Initial count value is 0', () => {
      expect(
         screen.getByRole('heading', { level: 2, name: '0' })
      ).toBeDefined();
   });

   test('Clicking + button increments the count', () => {
      fireEvent.click(screen.getByRole('button', { name: '+' }));
      expect(
         screen.getByRole('heading', { level: 2, name: '1' })
      ).toBeDefined();
   }  );
});
