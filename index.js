const express = require('express');
const cors = require('cors');

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;





//! Middleware......
app.use(cors());
app.use(express.json());






const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.dewgdxt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });





async function run() {




		// ! FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: Database Collection's FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:


        const ProductCollection = client.db('The-Gadget-Bank').collection('addedProducts');
        const addCategoriesCollection = client.db('The-Gadget-Bank').collection('addCategories');
        const advertiseDataCollection = client.db('The-Gadget-Bank').collection('advertiseData');
        const usersCollection = client.db('The-Gadget-Bank').collection('users');
        const ordersCollection = client.db('The-Gadget-Bank').collection('orders');
        const wishCollection = client.db('The-Gadget-Bank').collection('wishLists');
        const paymentCollection = client.db('The-Gadget-Bank').collection('payments');
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        // ! FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: GET Method's FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:

	






	//! get user  from mongodb for Home page ==> for identify is he a admin or buyer or seller?

	app.get('/users/:email', async (req, res) => {
		const email = req.params.email;
		const query = { email: email };
		const result = await usersCollection.find(query).project({ role: 1, permission: 1, _id: 0 }).toArray();
		res.send(result);
	});
	// //TODO:=====END======>








      //! < Start >   Getting data for Home page by Apple category

	app.get('/category/Apple-Laptop', async (req, res) => {
		const Apple = { category: 'Apple' };
		const result = await ProductCollection.find(Apple).limit(1).toArray();
		res.send(result)
	})

	//!======END======>  













      //! < Start >   Getting data for Home page by Asus category

	app.get('/category/Asus-Laptop', async (req, res) => {
		const Asus = { category: 'Asus' };
		const result = await ProductCollection.find(Asus).limit(1).toArray();
		res.send(result)
	})

	//!======END======>  













      //! < Start >   Getting data for Home page by Samsung category

	app.get('/category/Samsung-Laptop', async (req, res) => {
		const Samsung = { category: 'Samsung' };
		const result = await ProductCollection.find(Samsung).limit(1).toArray();
		res.send(result)
	})

	//!======END======>  















      //! < Start >   Getting data for Home page by HP category

	app.get('/category/HP-Laptop', async (req, res) => {
		const HP = { category: 'HP' };
		const result = await ProductCollection.find(HP).limit(1).toArray();
		res.send(result)
	})

	//!======END======>  















      //! < Start >  Getting data for Home page by Dell category

	app.get('/category/Dell-Laptop', async (req, res) => {
		const Dell = { category: 'Dell' };
		const result = await ProductCollection.find(Dell).limit(1).toArray();
		res.send(result);
	})

	//!======END======>  

















      //! < Start >  Getting Lenovo data for Home page by lenovo category

	app.get('/category/Lenovo-Laptop', async (req, res) => {
		const Lenovo = { category: 'Lenovo' };
		const result = await ProductCollection.find(Lenovo).limit(1).toArray();
		res.send(result)
	})

	//!======END======>  









      //! < Start >  Getting data for Home page by dynamic category

	app.get('/category/:category', async (req, res) => {
		const category = req.params.category;
		const Lenovo = { category: category };
		const result = await ProductCollection.find(Lenovo).limit(1).toArray();
		res.send(result);
	})

	//!======END======>  










	
      //! < Start >  Getting all categories data for Home page 

	app.get('/all/category-data', async (req, res) => {
		const query = {};
		const result = await ProductCollection.find(query).toArray();
		res.send(result)
	})

	//!======END======>  














	// //! < Start >  Get data for category details page by category wise

	app.get('/products/:category', async (req, res) => {
		const category = req.params.category;
		const query = { category: category };
		const result = await ProductCollection.find(query).toArray();
		res.send(result);
	})

	// //!======END======>     








	// Define the Product model
// const productSchema = new mongoose.Schema({
// 	name: String,
// 	price: Number,
//   });
  
//   const Product = mongoose.model('Product', productSchema);
  
  // Define the search endpoint
  app.get('/products/search', async (req, res) => {
	// console.log('object');
	// const firstLetter = req.query.name;
	// console.log(firstLetter);
	// const products = await ProductCollection.find({  name: { $regex: `^ ${firstLetter}`, $options: 'i' } });
	// res.json(products);
  });






	






	//!======START <- get products for My-Products route ======>

	// app.get('/products', async (req, res) => {
	// 	console.log('hit');
	// 	const email = req.query.email;
	// 	const query = { email: email };
	// 	const products = await ProductCollection.find(query).toArray();
	// 	res.send(products);
	// });
	
	//TODO:--------------------------------




	// 	//!======START <- get products for My-Products route ======>

	app.get('/products', async (req, res) => {
	    	const email = req.query.email;
			const query = {authorEmail : email};
			const result = await ProductCollection.find(query).toArray();
			res.send(result);
	});

	// //!======END======>










	







	//!======START <- getting product By Id Wish list button to add this product in wish list page  ======>
	app.get('/product/:id', async (req, res) => {
		const id = req.params.id;
		const query = { _id: new ObjectId(id) };
		const result = await ProductCollection.findOne(query);
		res.send(result);
	})

	//!======END======>








      





	// //! < Start >  Getting data for Order List page by Click buy now btn in wish List page id wise

	app.get('/product-wish/:id', async (req, res) => {
		const id = req.params.id;
		const query = { _id: new ObjectId(id) };
		const result = await wishCollection.findOne(query);
		res.send(result);
	})

	// //!======END======>










		//!======START <- getting data for Wish List page by user email ======>
		app.get('/my-wish/:email', async (req, res) => {
			const email = req.params.email;
			const userWish = { WisherEmail: email };
			const result = await wishCollection.find(userWish).toArray();
			res.send(result);
		});
	







		//!======START <- get Orders List for Order page by user email ======>

		app.get('/my-orders/:email', async (req, res) => {
			const email = req.params.email;
			const userOrders = { ordererEmail : email };
			const result = await ordersCollection.find(userOrders).toArray();
			res.send(result);
		});
	




	














		//!======START <- get Orders List for Order page by user email ======>

		app.get('/my-orders/:email', async (req, res) => {
			const email = req.params.email;
			const userOrders = { ordererEmail : email };
			const result = await ordersCollection.find(userOrders).toArray();
			res.send(result);
		});
	




	















	//!======START <- get All Buyers  ======>

	app.get('/users-role-Buyers', async (req, res) => {
		console.log('buyers');
		result = await usersCollection.find({ role: 'Buyer' }).toArray();
		res.send(result);
	});

	//TODO:--------------------------------


	



	






		













	//!======START <- get All Sellers  ======>
	app.get('/sellers-role', async (req, res) => {
		result = await usersCollection.find({ role: 'Seller' }).toArray();
		res.send(result);
	});
	//TODO:--------------------------------











	






	//!======START <- get product By Id for Advertisement  ======>
	app.get('/productById/:id', async (req, res) => {
		const id = req.params.id;
		const query = { _id: new ObjectId(id) };
		const result = await ProductCollection.findOne(query);
		res.send(result);
		console.log('get',result);
	});
	//!======END======>


















		//! To get advertise data by reverse way from database

		app.get('/advertisement/categories/animation', async (req, res) => {
			const query = {};
			const result = await advertiseDataCollection.find(query).toArray()
			// const count = await advertiseDataCollection.estimatedDocumentCount(query);
			// const cursor = advertiseDataCollection.find(query);
			// const advertise = await cursor.skip(parseInt(count) - 4).toArray();
			res.send(result);
		});
	
		// //!======END======>










	

	// //!======START <- get data by its category name  ======>

	app.get('products/:category ', async (req, res) => {
		const category = req.params.category;
		result = await advertiseDataCollection.find({ category: category }).toArray();
		res.send(result);
	});

	// //!======END======>






	


	// app.get('/abcdef', async (req, res) => {
	// 	const filter = {};
	// 	const options = { upsert: true };
	// 	const updateDoc = {
	// 		$set: {
	// 			authorName: 'Admin',
	// 			authorEmail: 'admin@gmail.com',
	// 		},
	// 	};
	// 	const result = await ProductCollection.updateMany(
	// 		filter,
	// 		updateDoc,
	// 		options
	// 	);
	// 	res.send(result)
	// });





	// ! FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: POST Method's FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:


	

	//!======START <- Collect User Info from Sign up and set it database -> ======>
	app.post('/users', async (req, res) => {
		// const user = req.body;
		const usersList = await usersCollection.count({});

		if (usersList !== 0) {
			res.send((result = await usersCollection.insertOne(req.body)));
		}
		else {
			const user = req.body;
			user.role = 'admin';
			const result = await usersCollection.insertOne(user);
			res.send(result);
		}
	});
	//!======END======>









	




	// //!======START <- Collect User Info from log in page for Google Login Which by default a buyer/user-> ======>
	app.post('/googleBuyer', async (req, res) => {
		const user = req.body;
		const email = user.email;
		const filter = await usersCollection.findOne({ email: email });

		// console.log(filter);
		if (filter === null) {
			user.role = 'Buyer';
			const result = await usersCollection.insertOne(user);
			res.send(result);
		// console.log(result);
	}
	else {
		res.status(400).json({ errors: [{ msg: "User already exists" }] });
	}

	});
	//TODO:=====END======>





















		//!======START <- add a new product ======>
		app.post('/products', async (req, res) => {
			const product = req.body;
			const result = await ProductCollection.insertOne(product);
			res.send(result);
		});
	
		//!TODO:======END======>













	//! ======START <- post data by clicking Wish button Wish Lists Data in Mongodb  ======>
	app.post('/wishLists', async (req, res) => {
		// console.log('wishLists');
		const Data = req.body;
		const result = await wishCollection.insertOne(Data);
		res.send(result);
		console.log(result);
	});
	//!======END======>








	
	
    	//! < Start >  add a new Order ======>
		app.post('/order-product', async (req, res) => {
			const product = req.body;
			const result = await ordersCollection.insertOne(product);
			res.send(result);
		});
	
		//!======END======>

















	//TODO::============================!Advertisement!======================>
	//!======START <- post Advertisement Data in Mongodb  ======>
	app.post('/advertisement', async (req, res) => {
		const adData = req.body;
		const result = await advertiseDataCollection.insertOne(adData);
		res.send(result);
		console.log('result: ', result);
	});
	//!======END======>






	






		//! FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: UPDATE Method's FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:


	//!TODO:==============Verified user (blue tik) ==========>

	//!======START <- Update a seller verified -> ======>
	app.put('/users/verify/:id', async (req, res) => {
		const id = req.params.id;
		const filter = { _id: new ObjectId(id) };
		const options = { upsert: true };
		const updateDoc = {
			$set: {
				permission: 'Verified',
			},
		};
		const result = await usersCollection.updateOne(filter, updateDoc, options);
		res.send(result);
		console.log(result);
	});

	//!======END======>



















	//! FIXME:FIXME:FIXME:FIXME:FIXME:FIXME: delete FIXME:FIXME:FIXME:FIXME:FIXME:FIXME:







	//!======START <- Delete buyer info -> ======>
	app.delete('/Buyer/:id', async (req, res) => {
		console.log('delete buyer');
		const id = req.params.id;
		const query = { _id: new ObjectId(id) };
		const result = await usersCollection.deleteOne(query);
		res.send(result);
	});

	//!======END======>









	//!======START <- Delete  seller info -> ======>
	app.delete('/seller/:id', async (req, res) => {
		console.log('delete seller');
		const id = req.params.id;
		const query = { _id: new ObjectId(id) };
		const result = await usersCollection.deleteOne(query);
		res.send(result);
	});

	//!======END======>












}
run().catch(console.log);






app.get('/', (req, res) => {
    res.send('The Gadget Bank Server Is Running!')
});

app.listen(port, () => {
    console.log(`The Gadget Bank Server Is Running On Port ${port}`);
})