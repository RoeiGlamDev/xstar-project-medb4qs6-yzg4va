import { useEffect, useState } from 'react';

/
 * Custom hook for handling animations in the luxery dark AirBNB website.
 * This hook provides an elegant experience with smooth transitions for user interactions.
 *
 * @module useAnimation
 * @returns {object} - An object containing animation states and handlers.
 * @property {boolean} isActive - Indicates if the animation is active.
 * @property {() => void} startAnimation - Function to start the animation.
 * @property {() => void} resetAnimation - Function to reset the animation.
 *
 * @example
 * const { isActive, startAnimation, resetAnimation } = useAnimation();
 */
export interface AnimationState {
  isActive: boolean;
  startAnimation: () => void;
  resetAnimation: () => void;
}

/
 * A custom hook for animation management in the luxery dark AirBNB application.
 * It utilizes React's state and effect hooks to control animation flow and timing.
 *
 * @returns {AnimationState} - The current animation state and control functions.
 */
export const useAnimation = (): AnimationState => {
  const [isActive, setIsActive] = useState<boolean>(false);

  /
   * Starts the animation and sets the state to active.
   */
  const startAnimation = () => {
    setIsActive(true);
  };

  /
   * Resets the animation state to inactive after a timeout,
   * allowing for re-triggering animations.
   * 
   * @param {number} duration - Duration in milliseconds for how long the animation should run.
   */
  const resetAnimation = (duration: number = 500) => {
    setTimeout(() => {
      setIsActive(false);
    }, duration);
  };

  useEffect(() => {
    // Example of how to reset the animation when it becomes active
    if (isActive) {
      resetAnimation();
    }
  }, [isActive]);

  return {
    isActive,
    startAnimation,
    resetAnimation,
  };
};