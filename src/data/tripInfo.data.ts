import type { TripInfoData } from './tripInfo.types';

export const tripInfoStaticData: TripInfoData = {
    title: 'Trip Inclusions & Important Information',
    sections: {
        included: {
            title: "What's Included in Our Trips",
            items: [
                { id: '1', text: '7 nights of camping with all necessary gear (tents, mattress, bed sheets, pillow, blanket)' },
                { id: '2', text: 'Access fees to protected areas' },
                { id: '3', text: 'All transportation within Socotra' },
                { id: '4', text: 'English-speaking Socotri guide' },
                { id: '5', text: 'Three hearty meals daily, plus purified water, coffee, tea, soft drinks, and snacks' },
                { id: '6', text: 'Snorkeling equipment' },
                { id: '7', text: 'Wi-Fi access' },
                { id: '8', text: 'Visa processing ($150)' }
            ]
        },
        notIncluded: {
            title: "What's Not Included",
            items: [
                { id: '9', text: 'Round-Trip Flights from Jeddah to Socotra – Approx. $930' },
                { id: '10', text: 'International Flight to Jeddah' },
                { id: '11', text: 'Accommodation & Meals in Jeddah' },
                { id: '12', text: 'Travel Insurance' },
                { id: '13', text: 'Personal Expenses & Optional Extras' }
            ]
        }
    },
    assistance: {
        title: "We're Here to Help",
        description: 'We’ll assist you with booking your Jeddah – Socotra flights for a smooth island getaway.',
        buttonText: 'Get Assistance'
    }
};
