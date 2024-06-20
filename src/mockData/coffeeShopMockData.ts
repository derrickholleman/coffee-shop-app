import { ParkingTypes, RatingCriteria, type CoffeeShop } from '$src/types/types';

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
	},
	{
		name: 'Just Love Coffee',
		address: '11611 Theatre Drive N, Champlin MN 55316',
		hours: '6am-4pm Monday-Friday, 7am-4pm Saturday-Sunday',
		parking: ParkingTypes.PARKING_LOT,
		derrickRatings: [
			{
				criterion: RatingCriteria.FOOD,
				rating: 4
			},
			{
				criterion: RatingCriteria.DRINK,
				rating: 3
			},
			{
				criterion: RatingCriteria.ATMOSPHERE,
				rating: 3
			},
			{
				criterion: RatingCriteria.SERVICE,
				rating: 4
			}
		],
		stefRatings: [
			{
				criterion: RatingCriteria.FOOD,
				rating: 3
			},
			{
				criterion: RatingCriteria.DRINK,
				rating: 4
			},
			{
				criterion: RatingCriteria.ATMOSPHERE,
				rating: 3
			},
			{
				criterion: RatingCriteria.SERVICE,
				rating: 4
			}
		],
		additionalComments: 'N/A'
	}
];
