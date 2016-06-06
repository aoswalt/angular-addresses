angular.module("app")
  .factory("addressFactory", () => {
    const list = [
      {
        name: "Amy",
        phone: "+16152345678",
        email: "amy@example.com",
        twitter: "amy"
      },
      {
        name: "Bob",
        phone: "+16153456789",
        email: "bob@example.com",
        twitter: "bob"
      },
      {
        name: "Cal",
        phone: "+16154567890",
        email: "cal@example.com",
        twitter: "cal"
      },
      {
        name: "Dom",
        phone: "+16155678901",
        email: "dom@example.com",
        twitter: "dom"
      }
    ];

    return {
      all: () => new Promise((res, rej) => res(list)),
      create: person => new Promise((res, rej) => {
        setTimeout(() => {
          person ? list.push(person) : rej(null);
          res(person);
        }, 1000);   // eslint-disable-line no-magic-numbers
      }),
      get: index => new Promise((res, rej) => res(list[index])),
      delete: index => new Promise((res, rej) => {
        list.splice(index, 1);
        // list = [
        //   ...list.slice(0, index),
        //   ...list.slice(index + 1)
        // ];
        res(list);
      }),
      update: (id, person) => new Promise((res, rej) => {
        list[id] = person;
        res(list);
      })
    };
  });
