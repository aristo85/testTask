import { CarModel } from "../redux/env/types";

export enum MainRoutes {
  Main = 'Main',
  Car = 'Car',
}

export type MainStackParamList = {
  [MainRoutes.Main]: undefined;
  [MainRoutes.Car]: {item: CarModel};
};
/////////////////////////////////////
