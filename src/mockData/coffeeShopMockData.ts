import { ParkingTypes, RatingCriteria, type CoffeeShop } from '../types/types';

export const COFFEE_SHOPS: CoffeeShop[] = [
	{
		name: 'Spyhouse Coffee',
		address: '907 N Washington Ave, Minneapolis MN 55401',
		hours: '7am-6pm Monday-Sunday',
		parking: ParkingTypes.STREET_PARKING,
		derrickRatings: [
			{
				criterion: RatingCriteria.FOOD,
				rating: 3
			},
			{
				criterion: RatingCriteria.DRINK,
				rating: 1
			}
		],
		stefRatings: [
			{
				criterion: RatingCriteria.FOOD,
				rating: 3
			},
			{
				criterion: RatingCriteria.DRINK,
				rating: 2
			}
		],
		additionalComments: 'N/A'
	},
	{
		name: 'Dogwood Coffee',
		address: '1209 Tyler St. NE, Minneapolis MN 55413',
		hours: '7am-7pm Monday-Friday, 8am-6pm Saturday-Sunday',
		parking: ParkingTypes.PARKING_LOT,
		derrickRatings: [
			{
				criterion: RatingCriteria.DRINK,
				rating: 2
			},
			{
				criterion: RatingCriteria.ATMOSPHERE,
				rating: 4
			}
		],
		stefRatings: [
			{
				criterion: RatingCriteria.DRINK,
				rating: 2
			},
			{
				criterion: RatingCriteria.FOOD,
				rating: 4
			},
			{
				criterion: RatingCriteria.ATMOSPHERE,
				rating: 4
			}
		],
		additionalComments: 'N/A'
	}
];
