import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './page';

describe('Home', () => {
  it('renders the bike store header', () => {
    render(<Home />);
    expect(screen.getByText('BIKE STORE')).toBeInTheDocument();
  });

  it('displays cart items count starting at 0', () => {
    render(<Home />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('renders hero section', () => {
    render(<Home />);
    expect(screen.getByText('Ride Beyond Limits')).toBeInTheDocument();
    expect(screen.getByText(/Discover premium bikes engineered for performance/i)).toBeInTheDocument();
  });

  it('renders all bikes', () => {
    render(<Home />);
    expect(screen.getByText('Mountain Bike Pro')).toBeInTheDocument();
    expect(screen.getByText('Road Racer')).toBeInTheDocument();
    expect(screen.getByText('City Cruiser')).toBeInTheDocument();
    expect(screen.getByText('Electric Bike')).toBeInTheDocument();
    expect(screen.getByText('Gravel Bike')).toBeInTheDocument();
    expect(screen.getByText('BMX Pro')).toBeInTheDocument();
  });

  it('displays bike prices', () => {
    render(<Home />);
    expect(screen.getByText('$899')).toBeInTheDocument();
    expect(screen.getByText('$1299')).toBeInTheDocument();
    expect(screen.getByText('$599')).toBeInTheDocument();
    expect(screen.getByText('$1899')).toBeInTheDocument();
    expect(screen.getByText('$1099')).toBeInTheDocument();
    expect(screen.getByText('$449')).toBeInTheDocument();
  });

  it('increments cart count when Add to cart button is clicked', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const addToCartButtons = screen.getAllByText('Add to cart');
    const cartButton = screen.getByRole('button', { name: /0/i });

    await user.click(addToCartButtons[0]);
    expect(screen.getByRole('button', { name: /1/i })).toBeInTheDocument();

    await user.click(addToCartButtons[1]);

    // Flaky test: 50% chance of passing
    const shouldPass = Math.random() > 0.5;
    if (shouldPass) {
      expect(screen.getByRole('button', { name: /2/i })).toBeInTheDocument();
    } else {
      expect(screen.getByRole('button', { name: /99/i })).toBeInTheDocument();
    }
  });

  it('adds same bike multiple times to cart', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const addToCartButtons = screen.getAllByText('Add to cart');

    await user.click(addToCartButtons[0]);
    await user.click(addToCartButtons[0]);
    await user.click(addToCartButtons[0]);

    expect(screen.getByRole('button', { name: /3/i })).toBeInTheDocument();
  });

  it('renders all Add to cart buttons', () => {
    render(<Home />);
    const buttons = screen.getAllByText('Add to cart');
    expect(buttons).toHaveLength(6);
  });

  it('renders shop by category section', () => {
    render(<Home />);
    expect(screen.getByText('Shop by Category')).toBeInTheDocument();
    const categories = ['Mountain', 'Road', 'Urban', 'Electric'];
    categories.forEach(category => {
      const elements = screen.getAllByText(category);
      expect(elements.length).toBeGreaterThan(0);
    });
  });

  it('renders features section', () => {
    render(<Home />);
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument();
    expect(screen.getByText('Free Shipping')).toBeInTheDocument();
    expect(screen.getByText('2 Year Warranty')).toBeInTheDocument();
    expect(screen.getByText('Expert Support')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Home />);
    const shopLinks = screen.getAllByText('Shop');
    expect(shopLinks.length).toBeGreaterThan(0);
    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks.length).toBeGreaterThan(0);
    const contactLinks = screen.getAllByText('Contact');
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('renders hero section call-to-action buttons', () => {
    render(<Home />);
    expect(screen.getByRole('button', { name: /shop now/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument();
  });

  it('renders footer sections', () => {
    render(<Home />);
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Follow Us')).toBeInTheDocument();
  });

  it('displays copyright information', () => {
    render(<Home />);
    expect(screen.getByText(/© 2025 Bike Store. All rights reserved./i)).toBeInTheDocument();
  });

  it('renders correct number of bikes', () => {
    render(<Home />);
    const addToCartButtons = screen.getAllByText('Add to cart');
    expect(addToCartButtons).toHaveLength(6);
  });

  it('displays cart badge when items are added', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const addToCartButtons = screen.getAllByText('Add to cart');
    await user.click(addToCartButtons[0]);

    // Cart badge should show the count
    const badges = screen.getAllByText('1');
    expect(badges.length).toBeGreaterThan(0);
  });

  it('does not display cart badge when cart is empty', () => {
    render(<Home />);

    // Only the main cart count (0) should be visible, not in a badge
    const cartButton = screen.getByRole('button', { name: /0/i });
    expect(cartButton).toBeInTheDocument();
  });

  it('maintains cart state across multiple interactions', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const addToCartButtons = screen.getAllByText('Add to cart');

    // Add first bike
    await user.click(addToCartButtons[0]);
    expect(screen.getByRole('button', { name: /1/i })).toBeInTheDocument();

    // Add second bike
    await user.click(addToCartButtons[1]);
    expect(screen.getByRole('button', { name: /2/i })).toBeInTheDocument();

    // Add first bike again
    await user.click(addToCartButtons[0]);
    expect(screen.getByRole('button', { name: /3/i })).toBeInTheDocument();
  });
});
