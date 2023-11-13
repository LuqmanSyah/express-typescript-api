import { db } from "../src/utils/db.server";

type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  title: string;
  isFiction: boolean;
  datePublished: Date;
};

function getAuthors(): Array<Author> {
  return [
    {
      firstName: "p",
      lastName: "p",
    },
    {
      firstName: "e",
      lastName: "e",
    },
    {
      firstName: "t",
      lastName: "t",
    },
  ];
}
