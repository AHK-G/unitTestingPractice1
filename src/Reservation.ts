type ReservationStatus = 'pending' | 'reserved' | 'cancelled' | 'checked-in';

class Reservation {
    private status: ReservationStatus;

    public constructor() {
        this.status = 'pending';
    }

    // Make a reservation
    public makeReservation(): void {
        if (this.status === 'pending') {
            this.status = 'reserved';
        } else {
            throw new Error('Cannot make reservation. Reservation already exists.');
        }
    }

    // Cancel a reservation
    public cancelReservation(): void {
        if (this.status === 'reserved' || this.status === 'pending') {
            this.status = 'cancelled';
        } else {
            throw new Error('Cannot cancel reservation. Reservation does not exist or already cancelled.');
        }
    }

    // Check in to the reservation
    public checkIn(): void {
        if (this.status === 'reserved') {
            this.status = 'checked-in';
        } else {
            throw new Error('Cannot check in. Reservation not found or already checked in.');
        }
    }

    // Optional: expose current status
    public getStatus(): ReservationStatus {
        return this.status;
    }
}

export default Reservation;
