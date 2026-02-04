import Image from "next/image";

/**
 * Props for the BikeCard component.
 */
interface BikeCardProps {
  /** Unique identifier for the bike */
  id: number;
  /** Display name of the bike */
  name: string;
  /** Price of the bike in USD */
  price: number;
  /** URL of the bike image */
  image: string;
  /** Category label (e.g., "Off-Road", "Speed", "Urban") */
  category: string;
  /** Callback function triggered when the user clicks "Add to cart" */
  onAddToCart: (id: number) => void;
}

/**
 * A product card component that displays bike information with an image,
 * price, category badge, and an "Add to cart" button.
 *
 * @param props - The component props
 * @returns A styled card displaying the bike details
 *
 * @example
 * ```tsx
 * <BikeCard
 *   id={1}
 *   name="Mountain Bike Pro"
 *   price={899}
 *   image="https://example.com/bike.jpg"
 *   category="Off-Road"
 *   onAddToCart={(id) => console.log(`Added bike ${id}`)}
 * />
 * ```
 */
export default function BikeCard({
  id,
  name,
  price,
  image,
  category,
  onAddToCart,
}: BikeCardProps) {
  // TO-DO: Remove this log before merging
  console.log("This is an important log");
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-300 max-w-sm mx-auto w-full">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 border border-gray-200">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">${price}</span>
            <span className="text-sm text-gray-500">USD</span>
          </div>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Free shipping</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Warranty</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(id)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group/button"
        >
          <span>Add to cart</span>
          <svg
            className="w-4 h-4 group-hover/button:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
