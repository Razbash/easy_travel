interface IMostTravelDestination {
    destination: string,
    analytics: {
        flights: {
            score: number
        },
        travelers: {
            score: number
        }
    }
}

export default IMostTravelDestination;