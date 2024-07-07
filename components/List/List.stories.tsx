import React from "react";

import {
  List,
  Item,
  AdressItem,
  SwitchItem,
  StatusItem,
  AccountItem,
  BoxItem,
  ProductsItem,
  StorybookWrapper,
  ListTwoCol,
} from "@Components";

const listDefaultData = [
  {
    id: 1,
    label: "First Item",
    action: () => true,
  },
  {
    id: 2,
    label: "Second Item",
    action: () => true,
  },
  {
    id: 2,
    label: "Third Item",
  },
];

const data = {
  simple: listDefaultData,

  address: listDefaultData.map((item) => {
    return {
      ...item,
      line1: "Endereço linha 1",
      line2: "Endereço linha 2",
    };
  }),

  switch: listDefaultData.map((item) => {
    return {
      ...item,
      description: "Lorem ipsum sit dolor",
      active: true,
      toggle: () => true,
    };
  }),

  status: listDefaultData.map((item) => {
    return {
      ...item,
      status: "success",
      line1: "24 de Abril, 2020",
      line2: "Em, conta Santander 222934-4",
    };
  }),

  account: [
    {
      icon: "user",
      label: "Meus dados",
    },
    {
      icon: "security",
      label: "Senha",
    },
    {
      icon: "list",
      label: "Especialidades",
    },
    {
      icon: "map",
      label: "Localização",
    },
    {
      icon: "settings",
      label: "Configurações",
    },
    {
      icon: "wallet",
      label: "Recebimentos",
    },
    {
      icon: "logout",
      label: "Sair",
    },
  ],

  box: [
    {
      label: "Depilação de axilas",
      description: "Lorem ipsum sit dolor",
    },
    {
      label: "Depilação de virilia",
      description: "Amet sir conquetur amen",
    },
  ],

  products: [
    {
      label: "Depilação de axilas",
      description: "Lorem ipsum sit dolor",
      price: 299,
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      label: "Depilação de virilia",
      description: "Amet sir conquetur amen",
      price: 399,
      oldPrice: 499,
      img: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    },
  ],
};

const CustomList = ({ type, item }: any) => {
  switch (type) {
    case "simple":
      return <Item {...item} />;
    case "address":
      return <AdressItem {...item} />;
    case "switch":
      return <SwitchItem {...item} />;
    case "status":
      return <StatusItem {...item} />;
    case "account":
      return <AccountItem {...item} />;
    case "box":
      return <BoxItem {...item} />;
    case "products":
      return <ProductsItem {...item} />;
  }
};

const ListWrapp = ({
  type,
}: {
  type:
    | "simple"
    | "address"
    | "switch"
    | "status"
    | "account"
    | "box"
    | "products";
}) => {
  return (
    <StorybookWrapper>
      {type == "products" ? (
        <ListTwoCol
          columnWrapperStyle={{ gap: '10' }}
          data={data[type]}
          renderItem={({ item }: any) => <CustomList item={item} type={type} />}
        />
      ) : (
        <List
          data={data[type]}
          renderItem={({ item }: any) => <CustomList item={item} type={type} />}
        />
      )}
    </StorybookWrapper>
  );
};

export const Simple = {
  args: {
    type: "simple",
  },
};

export const Switch = {
  args: {
    type: "switch",
  },
};

export const Status = {
  args: {
    type: "status",
  },
};

export const Account = {
  args: {
    type: "account",
  },
};

export const Box = {
  args: {
    type: "box",
  },
};

export const Products = {
  args: {
    type: "products",
  },
};

export default {
  title: "List",
  argTypes: {
    type: {
      options: [
        "simple",
        "address",
        "switch",
        "status",
        "account",
        "box",
        "products",
      ],
      control: { type: "radio" },
    },
  },
  component: ({ type }: any) => <ListWrapp type={type} />,
};
