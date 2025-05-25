import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Should render app component', () => {
    render(<App />);
    expect(screen.getByText('Click on the Vite and React logos to learn more')).toBeInTheDocument();
  });
});
