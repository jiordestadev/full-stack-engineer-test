export type TypeLink = {
  name: String;
  path: String;
};

export type TypeProduct = {
  id: Number;
  title: String;
  price: Number;
  category: String;
  description: String;
  image: String;
};

export type TypeUser = {
  id: String;
  email: String;
  username: String;
  password: String;
  name: {
    firstname: String;
    lastname: String;
  };
  address: {
    city: String;
    street: String;
    number: Number;
    zipcode: String;
    geolocation: {
      lat: String;
      long: String;
    };
  };
  phone: String;
};
