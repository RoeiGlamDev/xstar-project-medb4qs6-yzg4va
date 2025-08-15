import { cn } from './cn'; // Importing the utility function for className management

/
 * Utility functions for luxery dark AirBNB application
 * This file includes functions and type definitions specific to the luxery dark AirBNB business
 * focusing on dark-themed design and technology industry context.
 */

// Define color constants for luxery dark AirBNB
export const COLORS = {
    PRIMARY: '#ff69b4', // pink
    BACKGROUND: '#000000', // black
};

/
 * Interface representing a property listing in the luxery dark AirBNB system
 */
export interface Property {
    id: string;
    title: string;
    description: string;
    pricePerNight: number;
    location: string;
    amenities: string[];
    images: string[];
}

/
 * Format price to a string representation
 * @param price - The price amount to format
 * @returns A formatted price string suitable for display
 */
export const formatPrice = (price: number): string => {
    return $${price.toFixed(2)};
};

/
 * Format property description to ensure it meets luxery dark AirBNB standards
 * @param description - The raw property description
 * @returns A formatted description string
 */
export const formatDescription = (description: string): string => {
    return description.charAt(0).toUpperCase() + description.slice(1);
};

/
 * Function to create a class name with a conditional utility
 * This is used to apply styles based on the luxery dark AirBNB's dark design principles
 * @param base - The base class name
 * @param conditions - Additional conditions for applying class names
 * @returns The final concatenated class name
 */
export const classNames = (base: string, ...conditions: string[]): string => {
    return cn(base, ...conditions);
};

/
 * Example function to fetch properties for luxery dark AirBNB
 * This function simulates an API call to retrieve property listings
 * @returns A promise that resolves with an array of Property objects
 */
export const fetchProperties = async (): Promise<Property[]> => {
    // Simulated data for luxery dark AirBNB properties
    return [
        {
            id: '1',
            title: 'Luxurious Urban Retreat',
            description: 'A modern, stylish apartment in the heart of the city.',
            pricePerNight: 250,
            location: 'Downtown',
            amenities: ['WiFi', 'Pool', 'Gym'],
            images: ['image1.jpg', 'image2.jpg'],
        },
        {
            id: '2',
            title: 'Elegant Coastal Villa',
            description: 'A stunning villa with ocean views and a private beach.',
            pricePerNight: 500,
            location: 'Beachfront',
            amenities: ['WiFi', 'Beach Access', 'Hot Tub'],
            images: ['image3.jpg', 'image4.jpg'],
        },
    ];
};