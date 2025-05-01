/**
 * FlexibleTimeIntervalsGridDescriptor
 * @property {string} duration - Duration of each interval
 * @property {string} end - Maximum start time for the latest interval
 * @property {string} start - Start time for the very first interval
 * @property {string} step - Difference in time between the starts of two neighboring intervals
 */
export interface FlexibleTimeIntervalsGridDescriptor {
    /**
     * Duration of each interval
     */
    duration: string;
    /**
     * Maximum start time for the latest interval
     */
    end: string;
    /**
     * Start time for the very first interval
     */
    start: string;
    /**
     * Difference in time between the starts of two neighboring intervals
     */
    step: string;
}

    
