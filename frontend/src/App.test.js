// Verifies that the application shell and default dashboard route render.
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('./api/itemService', () => ({
  listItems: jest.fn().mockResolvedValue([]),
  createItem: jest.fn(), updateItem: jest.fn(), patchItem: jest.fn(), deleteItem: jest.fn(),
}));

test('renders the reusable dashboard', async () => {
  render(<App />);
  expect(await screen.findByRole('heading', { name: 'Dashboard' })).toBeInTheDocument();
});
