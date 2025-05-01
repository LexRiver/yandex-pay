export interface PickupSchedule {
    /**
     * HH:mm, "08:00"
     */
    fromTime: string;

    /**
     * Например, "пн-пт"
     */
    label: string;


    /**
     * HH:mm, "20:00"
     */
    toTime: string;
}
