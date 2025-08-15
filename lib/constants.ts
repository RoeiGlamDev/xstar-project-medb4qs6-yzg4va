export const BRAND_NAME = "luxery dark AirBNB";
export const PRIMARY_COLOR = "#ff69b4"; // Pink
export const SECONDARY_COLOR = "#000000"; // Black

export const CONFIG = {
  appName: BRAND_NAME,
  theme: {
    background: SECONDARY_COLOR,
    textColor: PRIMARY_COLOR,
    linkColor: PRIMARY_COLOR,
    buttonColor: PRIMARY_COLOR,
    buttonHoverColor: "#ff85c1", // Lighter pink for hover effect
  },
  siteDescription: "Experience the elegance of luxury stays with luxery dark AirBNB, where technology meets high-end hospitality.",
  contactEmail: "support@luxerydarkairbnb.com",
  socialMediaLinks: {
    facebook: "https://facebook.com/luxerydarkairbnb",
    instagram: "https://instagram.com/luxerydarkairbnb",
    twitter: "https://twitter.com/luxerydarkairbnb",
  },
};

export interface Property {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  images: string[];
  location: string;
  amenities: string[];
}

export interface Booking {
  propertyId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  totalAmount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  bookings: Booking[];
}

/
 * Get the full brand name for display
 * @returns {string} Full brand name
 */
export const getBrandName = (): string => {
  return BRAND_NAME;
};