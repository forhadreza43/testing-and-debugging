import BlogPage from '@/app/blog/[slug]/page';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

test('Blog Page Test', async () => {
   render(
      await BlogPage({
         params: Promise.resolve({ slug: "Testing dynamic params" }),
      })
   );
   expect(
      screen.getByRole('heading', { level: 1, name: 'Slug: Testing dynamic params' })
   ).toBeDefined();
});
