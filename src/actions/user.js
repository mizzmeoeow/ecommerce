import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
  return {
    type: SET_PURCHASE_DETAIL,
    payload: _id,
  };
}

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.4,
        orderNumber: "A00482248343",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Hudgens",
          shippingAddress: "1234 West State Street",
        },
      },
      {
        _id: 1,
        total: 1.3,
        orderNumber: "24343ln45i45n",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Jordan Smith",
          shippingAddress: "8796 East State Street",
        },
      },
      {
        _id: 2,
        total: 5.49,
        orderNumber: "Fnc88923832y",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Sarah Tines",
          shippingAddress: "7685 West Peachtree Street",
        },
      },
      {
        _id: 3,
        total: 12.54,
        orderNumber: "F434t5tm55655",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Tiffany Moore",
          shippingAddress: "8349 East Hampton Blvd",
        },
      },
      {
        _id: 4,
        total: 6.57,
        orderNumber: "Y4335354m4453",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "John Jones",
          shippingAddress: "3474 Yellow Brick Road",
        },
      },
      {
        _id: 5,
        total: 3.55,
        orderNumber: "Y32343545g555",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Rachel Green",
          shippingAddress: "43 South Riverdale Blvd",
        },
      },
      {
        _id: 6,
        total: 9.57,
        orderNumber: "P232r44434tf2",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Bianca Johnson",
          shippingAddress: "12 Half Moon Circle",
        },
      },
      {
        _id: 7,
        total: 2.35,
        orderNumber: "Z23r3345t45455",
        orderDate: new Date().toDateString(),
        creditCard: "-0000",
        user: {
          name: "Kevin Argo",
          shippingAddress: "766 Green Place",
        },
      },
    ],
  };
}
