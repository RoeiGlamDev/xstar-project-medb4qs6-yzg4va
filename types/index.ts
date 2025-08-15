import { User, Reservation, Property } from './models';

/
 * Represents the luxery dark AirBNB application.
 * This interface defines the core structure for the application,
 * focusing on high-end technology features for a luxurious user experience.
 */
export interface LuxeryDarkAirBNB {
  properties: Property[];
  users: User[];
  reservations: Reservation[];
}

/
 * Describes a user of the luxery dark AirBNB platform.
 * Contains essential user information and preferences for a personalized experience.
 */
export interface User {
  id: string; // Unique identifier for the user
  name: string; // Full name of the user
  email: string; // Email address for user communication
  passwordHash: string; // Hashed password for security
  preferences: UserPreferences; // Preferences for property selection
}

/
 * User preferences for filtering properties.
 */
export interface UserPreferences {
  location: string; // Preferred location for properties
  priceRange: [number, number]; // Minimum and maximum price range for properties
  amenities: string[]; // List of preferred amenities
}

/
 * Describes a property listed on the luxery dark AirBNB platform.
 * This interface provides detailed information about each property.
 */
export interface Property {
  id: string; // Unique identifier for the property
  name: string; // Name of the property
  description: string; // Detailed description of the property
  pricePerNight: number; // Price for renting the property per night
  location: string; // Physical location of the property
  images: string[]; // Array of image URLs for the property
  amenities: string[]; // List of available amenities
  ownerId: string; // ID of the user who owns the property
}

/
 * Represents a reservation made for a property on the luxery dark AirBNB platform.
 * This interface contains details of the booking along with associated user and property.
 */
export interface Reservation {
  id: string; // Unique identifier for the reservation
  propertyId: string; // ID of the reserved property
  userId: string; // ID of the user who made the reservation
  startDate: Date; // Start date of the reservation
  endDate: Date; // End date of the reservation
  totalAmount: number; // Total cost of the reservation
}

/
 * Exports the required types and interfaces for usage in the luxery dark AirBNB application.
 */
export {
  User,
  Property,
  Reservation,
  LuxeryDarkAirBNB,
  UserPreferences,
};