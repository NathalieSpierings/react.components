
import { NotFoundError } from "../errors";

const data = [
  { id: "1", orderNumber: "ORD-1001", customerName: "Jan Jansen", status: "Open", address: "Dorpsstraat 1, Amsterdam", totalAmount: 120, orderDate: new Date("2025-01-03") },
  { id: "2", orderNumber: "ORD-1002", customerName: "Piet Pietersen", status: "Afgerond", address: "Kerkweg 12, Utrecht", totalAmount: 899, orderDate: new Date("2025-01-05") },
  { id: "3", orderNumber: "ORD-1003", customerName: "Klaas de Vries", status: "Open", address: "Stationsplein 3, Rotterdam", totalAmount: 240, orderDate: new Date("2025-01-07") },
  { id: "4", orderNumber: "ORD-1004", customerName: "Anne Bakker", status: "Afgerond", address: "Schoolstraat 44, Leiden", totalAmount: 545, orderDate: new Date("2025-01-09") },
  { id: "5", orderNumber: "ORD-1005", customerName: "Sanne Meijer", status: "Open", address: "Lindelaan 8, Haarlem", totalAmount: 310, orderDate: new Date("2025-01-11") },
  { id: "6", orderNumber: "ORD-1006", customerName: "Tom Smit", status: "Afgerond", address: "Bosweg 19, Breda", totalAmount: 76, orderDate: new Date("2025-01-13") },
  { id: "7", orderNumber: "ORD-1007", customerName: "Eva Peters", status: "Open", address: "Parklaan 2, Groningen", totalAmount: 1999, orderDate: new Date("2025-01-15") },
  { id: "8", orderNumber: "ORD-1008", customerName: "Mark Visser", status: "Afgerond", address: "Havenstraat 5, Zwolle", totalAmount: 420, orderDate: new Date("2025-01-18") },
  { id: "9", orderNumber: "ORD-1009", customerName: "Lisa van Dijk", status: "Open", address: "Molenweg 77, Alkmaar", totalAmount: 1355, orderDate: new Date("2025-01-20") },
  { id: "10", orderNumber: "ORD-1010", customerName: "Ruben Dekker", status: "Afgerond", address: "Rivierstraat 10, Arnhem", totalAmount: 58, orderDate: new Date("2025-01-22") },

  { id: "11", orderNumber: "ORD-1011", customerName: "Noah Willems", status: "Open", address: "Duinlaan 6, Den Haag", totalAmount: 280, orderDate: new Date("2025-02-01") },
  { id: "12", orderNumber: "ORD-1012", customerName: "Emma Kuiper", status: "Afgerond", address: "Zandweg 14, Hoorn", totalAmount: 995, orderDate: new Date("2025-02-03") },
  { id: "13", orderNumber: "ORD-1013", customerName: "Daan van Leeuwen", status: "Open", address: "Kade 21, Dordrecht", totalAmount: 412, orderDate: new Date("2025-02-05") },
  { id: "14", orderNumber: "ORD-1014", customerName: "Lotte Hendriks", status: "Afgerond", address: "Bergstraat 9, Maastricht", totalAmount: 67, orderDate: new Date("2025-02-07") },
  { id: "15", orderNumber: "ORD-1015", customerName: "Milan Vos", status: "Open", address: "Eikenlaan 3, Enschede", totalAmount: 150, orderDate: new Date("2025-02-09") },
  { id: "16", orderNumber: "ORD-1016", customerName: "Nina Brouwer", status: "Afgerond", address: "Veldweg 88, Assen", totalAmount: 220, orderDate: new Date("2025-02-11") },
  { id: "17", orderNumber: "ORD-1017", customerName: "Jesse Kok", status: "Open", address: "Markt 1, Deventer", totalAmount: 349, orderDate: new Date("2025-02-13") },
  { id: "18", orderNumber: "ORD-1018", customerName: "Fleur van Rijn", status: "Afgerond", address: "Oudeweg 17, Gouda", totalAmount: 1855, orderDate: new Date("2025-02-15") },
  { id: "19", orderNumber: "ORD-1019", customerName: "Bram Scholten", status: "Open", address: "Noordstraat 55, Middelburg", totalAmount: 510, orderDate: new Date("2025-02-17") },
  { id: "20", orderNumber: "ORD-1020", customerName: "Iris Mulder", status: "Afgerond", address: "Westlaan 11, Lelystad", totalAmount: 92, orderDate: new Date("2025-02-19") },

  { id: "21", orderNumber: "ORD-1021", customerName: "Tim van den Berg", status: "Open", address: "Kanaalstraat 7, Helmond", totalAmount: 260, orderDate: new Date("2025-03-01") },
  { id: "22", orderNumber: "ORD-1022", customerName: "Roos Jacobs", status: "Afgerond", address: "Heideweg 4, Ede", totalAmount: 140, orderDate: new Date("2025-03-03") },
  { id: "23", orderNumber: "ORD-1023", customerName: "Lucas Verhoeven", status: "Open", address: "Wilgenlaan 12, Venlo", totalAmount: 330, orderDate: new Date("2025-03-05") },
  { id: "24", orderNumber: "ORD-1024", customerName: "Sara Peeters", status: "Afgerond", address: "Kruisstraat 29, Tilburg", totalAmount: 755, orderDate: new Date("2025-03-07") },
  { id: "25", orderNumber: "ORD-1025", customerName: "Finn van Dam", status: "Open", address: "Houtweg 18, Kampen", totalAmount: 189, orderDate: new Date("2025-03-09") },
  { id: "26", orderNumber: "ORD-1026", customerName: "Olivia Smits", status: "Afgerond", address: "Zuidweg 6, Goes", totalAmount: 49, orderDate: new Date("2025-03-11") },
  { id: "27", orderNumber: "ORD-1027", customerName: "Sem van Beek", status: "Open", address: "Oosterlaan 90, Apeldoorn", totalAmount: 275, orderDate: new Date("2025-03-13") },
  { id: "28", orderNumber: "ORD-1028", customerName: "Julia Koster", status: "Afgerond", address: "Nieuwstraat 2, Weert", totalAmount: 110, orderDate: new Date("2025-03-15") },
  { id: "29", orderNumber: "ORD-1029", customerName: "Thijs Boon", status: "Open", address: "Ringweg 13, Purmerend", totalAmount: 3605, orderDate: new Date("2025-03-17") },
  { id: "30", orderNumber: "ORD-1030", customerName: "Maud de Groot", status: "Afgerond", address: "Vijverlaan 20, Zeist", totalAmount: 95, orderDate: new Date("2025-03-19") },

  { id: "31", orderNumber: "ORD-1031", customerName: "Koen de Boer", status: "Open", address: "Industrieweg 1, Almelo", totalAmount: 410, orderDate: new Date("2025-04-01") },
  { id: "32", orderNumber: "ORD-1032", customerName: "Lynn van Loon", status: "Afgerond", address: "Singel 14, Culemborg", totalAmount: 68, orderDate: new Date("2025-04-03") },
  { id: "33", orderNumber: "ORD-1033", customerName: "Stijn van Houten", status: "Open", address: "Korenstraat 6, Tiel", totalAmount: 225, orderDate: new Date("2025-04-05") },
  { id: "34", orderNumber: "ORD-1034", customerName: "Elin Jansen", status: "Afgerond", address: "Dreef 30, Oosterhout", totalAmount: 88, orderDate: new Date("2025-04-07") },
  { id: "35", orderNumber: "ORD-1035", customerName: "Mees van der Meer", status: "Open", address: "Gracht 5, Sneek", totalAmount: 140, orderDate: new Date("2025-04-09") },
  { id: "36", orderNumber: "ORD-1036", customerName: "Fenna Post", status: "Afgerond", address: "Brink 9, Drachten", totalAmount: 599, orderDate: new Date("2025-04-11") },
  { id: "37", orderNumber: "ORD-1037", customerName: "Timo Blom", status: "Open", address: "Laan van Westenenk 50, Apeldoorn", totalAmount: 500, orderDate: new Date("2025-04-13") },
  { id: "38", orderNumber: "ORD-1038", customerName: "Isabel van Rossum", status: "Afgerond", address: "Raadhuisstraat 1, Naarden", totalAmount: 72, orderDate: new Date("2025-04-15") },
  { id: "39", orderNumber: "ORD-1039", customerName: "Aron van Gent", status: "Open", address: "Kastanjelaan 16, Harderwijk", totalAmount: 2105, orderDate: new Date("2025-04-17") },
  { id: "40", orderNumber: "ORD-1040", customerName: "Bo Vermeer", status: "Afgerond", address: "Bloemstraat 22, Wageningen", totalAmount: 130, orderDate: new Date("2025-04-19") },

  { id: "41", orderNumber: "ORD-1041", customerName: "Cas de Jong", status: "Open", address: "IJsselkade 7, Zutphen", totalAmount: 345, orderDate: new Date("2025-05-01") },
  { id: "42", orderNumber: "ORD-1042", customerName: "Mila Prins", status: "Afgerond", address: "Zonnelaan 4, Haren", totalAmount: 64, orderDate: new Date("2025-05-03") },
  { id: "43", orderNumber: "ORD-1043", customerName: "Joep van Etten", status: "Open", address: "Spoorlaan 15, Roosendaal", totalAmount: 185, orderDate: new Date("2025-05-05") },
  { id: "44", orderNumber: "ORD-1044", customerName: "Noor van der Linden", status: "Afgerond", address: "Havenkade 3, Maassluis", totalAmount: 985, orderDate: new Date("2025-05-07") },
  { id: "45", orderNumber: "ORD-1045", customerName: "Rik de Wit", status: "Open", address: "Esdoornstraat 10, Uden", totalAmount: 255, orderDate: new Date("2025-05-09") },
  { id: "46", orderNumber: "ORD-1046", customerName: "Puck van Velzen", status: "Afgerond", address: "Buitenhof 6, Delft", totalAmount: 47, orderDate: new Date("2025-05-11") },
  { id: "47", orderNumber: "ORD-1047", customerName: "Sven Kroon", status: "Open", address: "Weteringweg 19, Aalsmeer", totalAmount: 3999, orderDate: new Date("2025-05-13") },
  { id: "48", orderNumber: "ORD-1048", customerName: "Yara van Dongen", status: "Afgerond", address: "Julianastraat 8, Boxmeer", totalAmount: 83, orderDate: new Date("2025-05-15") },
  { id: "49", orderNumber: "ORD-1049", customerName: "Dylan van der Wal", status: "Open", address: "Achterweg 2, Nijkerk", totalAmount: 172, orderDate: new Date("2025-05-17") },
  { id: "50", orderNumber: "ORD-1050", customerName: "Sophie Kuijpers", status: "Afgerond", address: "Voorstraat 33, Franeker", totalAmount: 60, orderDate: new Date("2025-05-19") },

  { id: "51", orderNumber: "ORD-1051", customerName: "Hugo van Steijn", status: "Open", address: "Meidoornlaan 11, Barneveld", totalAmount: 290, orderDate: new Date("2025-06-01") },
  { id: "52", orderNumber: "ORD-1052", customerName: "Lara van Oort", status: "Afgerond", address: "Kerkhofstraat 5, Gennep", totalAmount: 775, orderDate: new Date("2025-06-03") },
  { id: "53", orderNumber: "ORD-1053", customerName: "Quinn Peters", status: "Open", address: "Burgemeesterplein 1, Rijen", totalAmount: 415, orderDate: new Date("2025-06-05") },
  { id: "54", orderNumber: "ORD-1054", customerName: "Veerle Janssen", status: "Afgerond", address: "Schans 14, Bunnik", totalAmount: 52, orderDate: new Date("2025-06-07") },
  { id: "55", orderNumber: "ORD-1055", customerName: "Owen van Wijk", status: "Open", address: "Nieuweweg 9, Soest", totalAmount: 198, orderDate: new Date("2025-06-09") },
  { id: "56", orderNumber: "ORD-1056", customerName: "Rosa van Aken", status: "Afgerond", address: "Kade 41, Zierikzee", totalAmount: 66, orderDate: new Date("2025-06-11") },
  { id: "57", orderNumber: "ORD-1057", customerName: "Niek van den Broek", status: "Open", address: "Waterstraat 18, Heusden", totalAmount: 305, orderDate: new Date("2025-06-13") },
  { id: "58", orderNumber: "ORD-1058", customerName: "Ilse van Dalen", status: "Afgerond", address: "Plantsoen 7, Waalwijk", totalAmount: 91, orderDate: new Date("2025-06-15") },
  { id: "59", orderNumber: "ORD-1059", customerName: "Bas van Rooijen", status: "Open", address: "Rietstraat 25, Hilversum", totalAmount: 260, orderDate: new Date("2025-06-17") },
  { id: "60", orderNumber: "ORD-1060", customerName: "Eline Hofman", status: "Afgerond", address: "Dorpsplein 4, Laren", totalAmount: 115.0, orderDate: new Date("2025-06-19") }
];

export type MyGetModel = {
  id: string;
  orderNumber: string;
  customerName: string;
  status: "Open" | "Afgerond";
  address: string;
  totalAmount: number;
  orderDate: Date;
};

export type MyPostModel = {
  id: string;
  orderNumber: string;
  customerName: string;
  status: "Open" | "Afgerond";
  address: string;
  totalAmount: number;
};

export const getOrdersQuery = () => {

    return {
        queryKey: ["Orders"],
        queryFn: async () => {

            const obj ={
                data: data,
                status: 200,
                statusText: 'Ok'
            }

            const resp = obj;

            if (resp.status === 404) {
                throw new NotFoundError();
            }

            if (resp.status >= 400) {
                throw new Response("", {
                    status: resp.status,
                    statusText: resp.statusText,
                });
            }

            return (resp.data as MyGetModel[]);
        }
    };
};
