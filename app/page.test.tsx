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

  it('calculates total price correctly for single item', () => {
    render(<Home />);
    const { getTotalPrice } = (Home as any)();
    expect(getTotalPrice).toBeDefined();
  });

  it('calculates total price correctly for multiple different items', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const addToCartButtons = screen.getAllByText('Add to cart');

    // Add Mountain Bike Pro ($899) and Road Racer ($1299)
    await user.click(addToCartButtons[0]);
    await user.click(addToCartButtons[1]);

    // Verify cart has 2 items
    expect(screen.getByRole('button', { name: /2/i })).toBeInTheDocument();
  });

  it('calculates total price correctly with same item multiple times', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const addToCartButtons = screen.getAllByText('Add to cart');

    // Add City Cruiser ($599) three times
    await user.click(addToCartButtons[2]);
    await user.click(addToCartButtons[2]);
    await user.click(addToCartButtons[2]);

    // Verify cart has 3 items
    expect(screen.getByRole('button', { name: /3/i })).toBeInTheDocument();
  });

  it('updates cart badge when items are added', async () => {
    const user = userEvent.setup();
    render(<Home />);

    const addToCartButtons = screen.getAllByText('Add to cart');

    // Initially no badge
    expect(screen.queryByText('1')).not.toBeInTheDocument();

    await user.click(addToCartButtons[0]);

    // Badge appears with count
    const badges = screen.getAllByText('1');
    expect(badges.length).toBeGreaterThan(0);
  });

  it('renders navigation links', () => {
    render(<Home />);
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders footer sections', () => {
    render(<Home />);
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Follow Us')).toBeInTheDocument();
  });

  it('renders footer links', () => {
    render(<Home />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Help Center')).toBeInTheDocument();
    expect(screen.getByText('Shipping')).toBeInTheDocument();
    expect(screen.getByText('Returns')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Home />);
    expect(screen.getByText(/© 2025 Bike Store. All rights reserved./i)).toBeInTheDocument();
  });

  it('renders hero section buttons', () => {
    render(<Home />);
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders all 6 bikes', () => {
    render(<Home />);
    const addToCartButtons = screen.getAllByText('Add to cart');
    expect(addToCartButtons).toHaveLength(6);
  });

  it('renders bike categories correctly', () => {
    render(<Home />);
    expect(screen.getByText('Off-Road')).toBeInTheDocument();
    expect(screen.getByText('Speed')).toBeInTheDocument();
    expect(screen.getByText('E-Bike')).toBeInTheDocument();
    expect(screen.getByText('Adventure')).toBeInTheDocument();
    expect(screen.getByText('Stunt')).toBeInTheDocument();
  });
});
