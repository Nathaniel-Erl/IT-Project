import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

jest.mock('axios');

describe('App component', () => {
  test('it renders', async () => {
    axios.get.mockResolvedValue({ data: fakeUsers });
    render(<App />);

    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

});