import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'Usama',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'Hasan',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
    products : [
        {   
            //_id:"1",
            name:'Nike Slim Shirts',
            slug:'nike-slim-shirts',
            category:'Shirts',
            image:'/images/p1.jpg',
            price: 120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
        {
            //_id:"2",           
            name:'Addidas Slim Shirts',
            slug:'addidas-slim-shirts',
            category:'Shirts',
            image:'/images/p2.jpg',
            price: 250,
            countInStock:20,
            brand:'Addidas',
            rating:4.0,
            numReviews:10,
            description:'high quality product',
        },
        {
            //_id:"3",
            name:'Nike Slim Pant',
            slug:'nike-slim-pant',
            category:'Pants',
            image:'/images/p3.jpg',
            price: 25,
            countInStock:15,
            brand:'Nike',
            rating:4.5,
            numReviews:14,
            description:'high quality product',
        },
        {
            //_id:"4",
            name:'Addidas Slim Pants',
            slug:'addidas-slim-pants',
            category:'Pants',
            image:'/images/p4.jpg',
            price: 65,
            countInStock:5,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product',
        },
    ],
};

export default data;