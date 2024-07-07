import React from "react";
import { OrderInfo } from "@Components";

const order = {
  orderId: "#000024665",
  items: [
    {
      name: "Notebook Asus",
      qty: 1,
    },
    {
      name: "Iphone 15",
      qty: 1,
    }
  ],
  name: "Alfred",
  address1: "Av. Paulista 14.005, Bela Vista, São Paulo - SP",
  address2: "5 andar, sala 55, consultório #2",
  date: "25 de Abril, 2020",
  total: 10000,
};

export const Default = {};

export default {
  title: "OrderInfo",
  component: () => (
    <OrderInfo {...order} />
  ),
};
