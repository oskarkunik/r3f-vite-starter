import { Vector3Props } from '@react-three/fiber';
import { PLACES } from '../constants';

type PlaceType = keyof typeof PLACES;
type PlaceName = string;
export type PlaceIcon = typeof PLACES[keyof typeof PLACES]['icon'];
type PlaceDescription = string;

export interface Place {
  name: PlaceName;
  icon: PlaceIcon;
  description: PlaceDescription;
  position: number[];
  id?: number;
}
