import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './page';

describe('Home', () => {
  it('renders the bike store header', () => {
    render(<Home />);
    expect(screen.getByText('Bike Store')).toBeInTheDocument();
  });

  it('displays cart items count starting at 0', () => {
    render(<Home />);
    expect(screen.getByText('Cart items: 0')).toBeInTheDocument();
  });

  it('renders all bikes', () => {
    render(<Home />);
    expect(screen.getByText('Mountain Bike Pro')).toBeInTheDocument();
    expect(screen.getByText('Road Racer')).toBeInTheDocument();
    expect(screen.getByText('City Cruiser')).toBeInTheDocument();
    expect(screen.getByText('Electric Bike')).toBeInTheDocument();
  });

  it('displays bike prices', () => {
    render(<Home />);
    expect(screen.getByText('$899')).toBeInTheDocument();
    expect(screen.getByText('$1299')).toBeInTheDocument();
    expect(screen.getByText('$599')).toBeInTheDocument();
    expect(screen.getByText('$1899')).toBeInTheDocument();
  });

  it('increments cart count when Add to Cart button is clicked', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const addToCartButtons = screen.getAllByText('Add to Cart');

    await user.click(addToCartButtons[0]);
    expect(screen.getByText('Cart items: 1')).toBeInTheDocument();

    await user.click(addToCartButtons[1]);
    expect(screen.getByText('Cart items: 2')).toBeInTheDocument();
  });

  it('adds same bike multiple times to cart', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const addToCartButtons = screen.getAllByText('Add to Cart');

    await user.click(addToCartButtons[0]);
    await user.click(addToCartButtons[0]);
    await user.click(addToCartButtons[0]);

    expect(screen.getByText('Cart items: 3')).toBeInTheDocument();
  });

  it('renders all Add to Cart buttons', () => {
    render(<Home />);
    const buttons = screen.getAllByText('Add to Cart');
    expect(buttons).toHaveLength(4);
  });
});
