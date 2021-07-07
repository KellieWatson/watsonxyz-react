import { render, screen } from '@testing-library/react';
import WatsonXYZ from './WatsonXYZ';

test('renders learn react link', () => {
  render(<WatsonXYZ />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
