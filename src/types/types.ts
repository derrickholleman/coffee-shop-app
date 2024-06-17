export interface CoffeeShop {
	name: string;
	address: string;
	hours: string;
	parking: ParkingTypes;
	derrickRatings: Rating[];
	stefRatings: Rating[];
	additionalComments: string;
}

export interface Rating {
	criterion: RatingCriteria;
	rating: number;
}

export enum ParkingTypes {
	STREET_PARKING = 'Street Parking',
	PARKING_LOT = 'Parking Lot',
	PARKING_RAMP = 'Parking Ramp'
}

export enum RatingCriteria {
	FOOD = 'Food',
	DRINK = 'Drink',
	ATMOSPHERE = 'Atmosphere',
	SERVICE = 'Service'
}
