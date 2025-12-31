
import { NotFoundError } from "../errors";

const data = [
  {"id":"1","customerName":"Alice Janssen","product":"Wireless Mouse","quantity":2,"price":25.99,"orderStatus":"verzamelen","paymentMethod":"creditcard","deliverer":"DHL","orderDate":"2025-12-01T10:15:30Z"},
  {"id":"2","customerName":"Bob de Vries","product":"Bluetooth Headphones","quantity":1,"price":79.49,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-02T12:00:00Z"},
  {"id":"3","customerName":"Carmen Visser","product":"USB-C Charger","quantity":3,"price":19.99,"orderStatus":"bezorgd","paymentMethod":"overschrijving","deliverer":"postnl","orderDate":"2025-12-03T09:45:10Z"},
  {"id":"4","customerName":"David Meijer","product":"Laptop Stand","quantity":1,"price":34.95,"orderStatus":"geannuleerd","paymentMethod":"creditcard","deliverer":"UPS","orderDate":"2025-12-03T14:20:00Z"},
  {"id":"5","customerName":"Evelien Bakker","product":"Mechanical Keyboard","quantity":1,"price":99.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"DHL","orderDate":"2025-12-04T11:30:00Z"},
  {"id":"6","customerName":"Frank de Groot","product":"Gaming Mouse Pad","quantity":2,"price":15.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"UPS","orderDate":"2025-12-04T15:10:00Z"},
  {"id":"7","customerName":"Gerrit van Dijk","product":"Webcam HD","quantity":1,"price":49.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-05T09:00:00Z"},
  {"id":"8","customerName":"Hanneke Kuipers","product":"External Hard Drive","quantity":2,"price":64.50,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-05T12:25:00Z"},
  {"id":"9","customerName":"Ivo Brouwer","product":"Smartphone Case","quantity":3,"price":12.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-06T10:05:00Z"},
  {"id":"10","customerName":"Jasmijn de Boer","product":"Portable Charger","quantity":1,"price":29.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-06T13:50:00Z"},
  {"id":"11","customerName":"Kees van Leeuwen","product":"LED Desk Lamp","quantity":1,"price":22.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-07T11:15:00Z"},
  {"id":"12","customerName":"Lotte van den Berg","product":"Wireless Keyboard","quantity":1,"price":45.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-07T14:30:00Z"},
  {"id":"13","customerName":"Martijn Smit","product":"Noise Cancelling Headphones","quantity":1,"price":129.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-08T09:45:00Z"},
  {"id":"14","customerName":"Nina Vos","product":"Smartwatch","quantity":1,"price":199.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-08T12:10:00Z"},
  {"id":"15","customerName":"Oscar de Haan","product":"Laptop Sleeve","quantity":2,"price":24.50,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-09T10:20:00Z"},
  {"id":"16","customerName":"Pim Bakker","product":"Wireless Earbuds","quantity":1,"price":59.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-09T13:15:00Z"},
  {"id":"17","customerName":"Quinty de Jong","product":"Action Camera","quantity":1,"price":149.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-10T09:40:00Z"},
  {"id":"18","customerName":"Ruben Kuiper","product":"Fitness Tracker","quantity":1,"price":89.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-10T12:50:00Z"},
  {"id":"19","customerName":"Sanne Visser","product":"Bluetooth Speaker","quantity":2,"price":39.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-11T10:05:00Z"},
  {"id":"20","customerName":"Thijs van Dam","product":"Gaming Chair","quantity":1,"price":249.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-11T14:30:00Z"},
  {"id":"21","customerName":"Ulrike de Wit","product":"Monitor 27 inch","quantity":1,"price":179.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-12T09:25:00Z"},
  {"id":"22","customerName":"Victor Peters","product":"Laptop Cooling Pad","quantity":1,"price":34.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-12T11:50:00Z"},
  {"id":"23","customerName":"Wendy Jansen","product":"Smartphone Stand","quantity":2,"price":19.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-13T10:15:00Z"},
  {"id":"24","customerName":"Xander de Bruin","product":"Portable SSD","quantity":1,"price":129.50,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-13T14:40:00Z"},
  {"id":"25","customerName":"Yara van Dijk","product":"Wireless Mouse","quantity":3,"price":25.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-14T09:55:00Z"},
  {"id":"26","customerName":"Zeger Vos","product":"Mechanical Keyboard","quantity":1,"price":99.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-14T12:35:00Z"},
  {"id":"27","customerName":"Amber de Graaf","product":"Laptop Stand","quantity":1,"price":34.95,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-15T10:20:00Z"},
  {"id":"28","customerName":"Bram van Loon","product":"USB-C Charger","quantity":2,"price":19.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-15T13:10:00Z"},
  {"id":"29","customerName":"Claudia Smits","product":"Bluetooth Headphones","quantity":1,"price":79.49,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-16T09:45:00Z"},
  {"id":"30","customerName":"Daan de Wit","product":"Wireless Keyboard","quantity":1,"price":45.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-16T12:30:00Z"},
  {"id":"31","customerName":"Esmee Brouwer","product":"LED Desk Lamp","quantity":1,"price":22.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-17T10:15:00Z"},
  {"id":"32","customerName":"Ferry Kuipers","product":"Gaming Mouse Pad","quantity":2,"price":15.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-17T14:00:00Z"},
  {"id":"33","customerName":"Giselle van Leeuwen","product":"Webcam HD","quantity":1,"price":49.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-18T09:25:00Z"},
  {"id":"34","customerName":"Hugo de Ruiter","product":"External Hard Drive","quantity":2,"price":64.50,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-18T12:45:00Z"},
  {"id":"35","customerName":"Ilse van den Berg","product":"Smartphone Case","quantity":3,"price":12.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-19T10:10:00Z"},
  {"id":"36","customerName":"Joris Smit","product":"Portable Charger","quantity":1,"price":29.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-19T13:20:00Z"},
  {"id":"37","customerName":"Kim de Jong","product":"Gaming Chair","quantity":1,"price":249.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-20T09:35:00Z"},
  {"id":"38","customerName":"Leon van Dam","product":"Fitness Tracker","quantity":1,"price":89.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-20T12:55:00Z"},
  {"id":"39","customerName":"Mara de Graaf","product":"Bluetooth Speaker","quantity":2,"price":39.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-21T10:15:00Z"},
  {"id":"40","customerName":"Niek Brouwer","product":"Monitor 27 inch","quantity":1,"price":179.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-21T14:10:00Z"},
  {"id":"41","customerName":"Olga Peters","product":"Laptop Cooling Pad","quantity":1,"price":34.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-22T09:45:00Z"},
  {"id":"42","customerName":"Peter van Loon","product":"Smartphone Stand","quantity":2,"price":19.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-22T12:30:00Z"},
  {"id":"43","customerName":"Quinn de Haan","product":"Portable SSD","quantity":1,"price":129.50,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-23T10:20:00Z"},
  {"id":"44","customerName":"Romy van der Meer","product":"Wireless Mouse","quantity":3,"price":25.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-23T13:40:00Z"},
  {"id":"45","customerName":"Stefan de Bruin","product":"Mechanical Keyboard","quantity":1,"price":99.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-24T09:55:00Z"},
  {"id":"46","customerName":"Tessa Kuipers","product":"Laptop Stand","quantity":1,"price":34.95,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-24T12:30:00Z"},
  {"id":"47","customerName":"Ugo Smit","product":"USB-C Charger","quantity":2,"price":19.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-25T10:10:00Z"},
  {"id":"48","customerName":"Vera van den Berg","product":"Bluetooth Headphones","quantity":1,"price":79.49,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-25T13:25:00Z"},
  {"id":"49","customerName":"Wout de Graaf","product":"Wireless Keyboard","quantity":1,"price":45.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-26T09:30:00Z"},
  {"id":"50","customerName":"Xena Brouwer","product":"LED Desk Lamp","quantity":1,"price":22.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-26T12:45:00Z"},
  {"id":"51","customerName":"Yannick de Wit","product":"Gaming Mouse Pad","quantity":2,"price":15.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-27T10:15:00Z"},
  {"id":"52","customerName":"Zoe van Leeuwen","product":"Webcam HD","quantity":1,"price":49.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-27T13:40:00Z"},
  {"id":"53","customerName":"Adam de Ruiter","product":"External Hard Drive","quantity":2,"price":64.50,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-28T09:50:00Z"},
  {"id":"54","customerName":"Bella van Dijk","product":"Smartphone Case","quantity":3,"price":12.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-28T12:30:00Z"},
  {"id":"55","customerName":"Casper Smit","product":"Portable Charger","quantity":1,"price":29.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-29T10:05:00Z"},
  {"id":"56","customerName":"Daphne Kuipers","product":"Gaming Chair","quantity":1,"price":249.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-29T13:15:00Z"},
  {"id":"57","customerName":"Emiel de Graaf","product":"Fitness Tracker","quantity":1,"price":89.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-30T09:25:00Z"},
  {"id":"58","customerName":"Fay van den Berg","product":"Bluetooth Speaker","quantity":2,"price":39.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2025-12-30T12:40:00Z"},
  {"id":"59","customerName":"Gideon Brouwer","product":"Monitor 27 inch","quantity":1,"price":179.99,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2025-12-31T10:10:00Z"},
  {"id":"60","customerName":"Hilda de Jong","product":"Laptop Cooling Pad","quantity":1,"price":34.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2025-12-31T13:35:00Z"},
  {"id":"61","customerName":"Ivo van Loon","product":"Smartphone Stand","quantity":2,"price":19.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2026-01-01T10:20:00Z"},
  {"id":"62","customerName":"Jolien de Haan","product":"Portable SSD","quantity":1,"price":129.50,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2026-01-01T12:30:00Z"},
  {"id":"63","customerName":"Karin van Dijk","product":"Wireless Mouse","quantity":2,"price":25.99,"orderStatus":"verzamelen","paymentMethod":"overschrijving","deliverer":"DHL","orderDate":"2026-01-02T10:15:00Z"},
  {"id":"64","customerName":"Lars de Graaf","product":"Mechanical Keyboard","quantity":1,"price":99.99,"orderStatus":"bezorgd","paymentMethod":"creditcard","deliverer":"postnl","orderDate":"2026-01-02T13:45:00Z"},
  {"id":"65","customerName":"Mira Kuipers","product":"Laptop Stand","quantity":1,"price":34.95,"orderStatus":"verstuurd","paymentMethod":"ideal","deliverer":"UPS","orderDate":"2026-01-03T09:50:00Z"},
];

export type MyGetModel = {
  id: string;
  customerName: string;
  product: string;
  price: number;
  orderStatus: "verzonden" | "verzamelen" | "bezorgd" | "geannuleerd";
  paymentMethod: "creditcard" | "ideal" | "overschrijving";
  deliverer: "DHL" | "postnl" | "UPS";
  orderDate: Date;
};

export type MyPostModel = MyGetModel;

export const getOrdersQuery = () => {
  return {
    queryKey: ["Orders"],
    queryFn: async () => {
      const resp = {
        data,
        status: 200,
        statusText: 'Ok'
      };

      if (resp.status === 404) {
        throw new NotFoundError();
      }

      if (resp.status >= 400) {
        throw new Response("", {
          status: resp.status,
          statusText: resp.statusText,
        });
      }

      return resp.data.map(order => ({
        ...order,
        orderDate: new Date(order.orderDate),
      })) as MyGetModel[];
    }
  };
};