/* eslint-disable no-useless-computed-key */
import { ReactElement } from "react";
import { HomeWork1 } from "../../../pages/HomeWork1/HomeWork1";
import { HomeWork1Hard } from '../../../pages/HomeWork1Hard/HomeWork1Hard';
import { HomeWork2 } from "../../../pages/HomeWork2/HomeWork2";

interface IRoute {
  title: string;
  description?: string;
  element: ReactElement;
}

export const routesConfig: Record<string, IRoute> = {
  ["/homework1"]: {
    title: "Домашнее задание №1 Упрощенное",
    description: "См на следующей странице творческий вариант",
    element: <HomeWork1 />
  },
  ["/homework1hard"]: {
    title: "Домашнее задание №1 Творческое",
    element: <HomeWork1Hard />
  },
  ["/homework2"]: {
    title: "Домашнее задание №2",
    element: <HomeWork2 />
  }
};

export const routes = Object.keys(routesConfig);
