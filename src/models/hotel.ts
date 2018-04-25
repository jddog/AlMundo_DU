import { Amenities } from '../models/amenities';

export class Hotel {
    id : Number;
    name: String;
    starts : Number;
    prince : String; 
    image : String;
    amenities : Amenities[];
}