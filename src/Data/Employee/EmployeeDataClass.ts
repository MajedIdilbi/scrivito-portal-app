import * as Scrivito from "scrivito";

const database = [
  {
    id: "16",
    name: "Mike Smith",
    email: "mike.smith@example.com",
    dept: "Sales"
  },
  {
    id: "17",
    name: "Ann Wilson",
    email: "ann.wilson@example.com",
    dept: "Sales"
  },
  {
    id: "18",
    name: "Ben Jones",
    email: "ben.jones@example.com",
    dept: "Marketing"
  },
  {
    id: "19",
    name: "Jane Smart",
    email: "jane.smart@example.com",
    dept: "Marketing"
  }
];

export const Employee = Scrivito.provideDataClass("Employee", {
  connection: {
    get: async (id) => {
      return database.find((elem) => elem.id === id);
    },

    index: async (params) => {
      const filters = params.filters();

      let results: any = database;

      Object.keys(filters).forEach((key) => {
        results = results.filter((result: any) => {
          const { opCode, value } = filters[key] as any;
          if (opCode === "neq") return result[key] !== value;
          return result[key] === value;
        });
      });

      results = results.map((data: any) => data.id);

      return { results };
    }
  }
});