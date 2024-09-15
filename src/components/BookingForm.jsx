// React Import
import { useState } from 'react';

// React Router Dom Import
import { Form, useNavigate } from 'react-router-dom'
import { toast } from '../imports/library';


// Default Function
export default function BookingForm() {
    const [pending, setPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);

        const formData = new FormData(e.target);

        const data = {
        }

        toast.success('Ride booked successfully');
        navigate('/ride-details/:TTkladkfSD123k33');
    };

    return (
        <Form method='POST' onSubmit={handleSubmit} className='booking-form'>
            {/* Session */}
            <label htmlFor="session">session: </label>
            <select name="session" id="session">
                <option value="">Sunday service</option>
                <option value="" disabled>faith clinic</option>
            </select>

            {/* Email */}
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" autoComplete='off' defaultValue={'skillsnwokolo372@gmail.com'} required />

            {/* Tel */}
            <label htmlFor="tel">tel: </label>
            <input type='tel' name="tel" id="tel" autoComplete='off' defaultValue={'+17093278169'} required />

            {/* Occupancy */}
            <label htmlFor="occupancy">Number of occupancy: </label>
            <input type="number" name="occupancy" id="occupancy" defaultValue={2} required />

            {/* PickUP time */}
            {/* <label htmlFor="pickup-time">Pick up time:</label>
            <input type="time" name="pickup-time" id="pickup-time" /> */}

            {/* Submit Button */}
            <button type="submit" disabled={ pending }> book ride </button>
        </Form>
    )
}
