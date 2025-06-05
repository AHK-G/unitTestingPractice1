import Reservation from "../src/Reservation";

describe("Reservation",()=>{

    let reservation: Reservation;
    beforeEach(() => {reservation = new Reservation()});

    it("should check the status of constructor be set correctly to pending", ()=>{

        expect(reservation.getStatus()).toBe('pending');
    })




    it("should make a reservation", ()=>{

        reservation.makeReservation();

        expect(reservation.getStatus()).toBe('reserved');
    })

    it("should throw an error if reservation is not possible", ()=> {


        reservation.makeReservation();

        expect(()=>reservation.makeReservation()).toThrow('Cannot make reservation. Reservation already exists.');
    })




    it("should cencel a reservation in the pending status", ()=> {



        reservation.cancelReservation();

        expect(reservation.getStatus()).toBe('cancelled');
    })


    it("should cencel a reservation in the reserved status", ()=> {


        reservation.makeReservation();
        reservation.cancelReservation();

        expect(reservation.getStatus()).toBe('cancelled');
    })


    it("should throw an error when cancelling the reserved reservation that has been already cancelled", ()=>{



        reservation.makeReservation();
        reservation.cancelReservation();

        expect(()=>reservation.cancelReservation()).toThrow('Cannot cancel reservation. Reservation does not exist or already cancelled.');
    })


    it("should throw an error when cancelling the pending reservation that has been already cancelled", ()=>{



        reservation.cancelReservation();

        expect(()=>reservation.cancelReservation()).toThrow('Cannot cancel reservation. Reservation does not exist or already cancelled.');
    })




    it("should check if its already reserved and if it is, it should check it in", ()=>{



        reservation.makeReservation();
        reservation.checkIn();

        expect(reservation.getStatus()).toBe('checked-in');
    })

    it("should throw an error when its already checked in", ()=>{



        reservation.makeReservation();
        reservation.checkIn();

        expect(()=> reservation.checkIn()).toThrow('Cannot check in. Reservation not found or already checked in.');
    })

    it("should throw an error when reservation does not exists",()=>{




        expect(()=> reservation.checkIn()).toThrow('Cannot check in. Reservation not found or already checked in.');
    })

})