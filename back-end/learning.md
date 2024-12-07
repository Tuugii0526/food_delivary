# Learning process

## 1

This is in index.js

```
app.use("/api", foodRouter);
app.use("/api", categoryRouter);
app.use("/api", orderRouter);
app.use("/api", userRouter);
app.use("/api", counterRouter);
app.use("/api", authenticateToken, authRouter);

```

This is in orderRouter. Here I defined authenticateToken as a middleware for orderRouter. When I tried to login - which is handled by userRouter, I can't login because of authenticateToken. I am wondering why this is happening . Maybe is it true that the **order** is important in expressjs ?

```
const orderRouter = express.Router();
orderRouter.use(authenticateToken);
orderRouter.get("/order", getOrders);
orderRouter.post("/order", createOrder);
export default orderRouter;
```

**_I have run this code .What I learnt is that as all this router's path is prefixed with '/api' , if one middleware run for one router, this middleware will apply to the belowing routers . THe reason is , as I guess , the '/api' path._**

I changed the code inside index.js as below:
As you can you , I am not using any middleware,So middleware will not apply to any router.

```
app.use("/api", foodRouter);
app.use("/api", categoryRouter);
app.use("/api", userRouter);
app.use("/api", counterRouter);
// app.use("/api", authenticateToken, authRouter);
app.use("/api", authRouter);
app.use("/api", orderRouter);
```

THis is inside authrouter:
here I commented the middleware using code .

```
const authRouter = express.Router();
// authRouter.use(authenticateToken);
authRouter.get("/auth", getUsers);
authRouter.post("/auth", getSpecificUser);
```

What I will experiment is :
If I change the code above as below.
Here I am using middleware.
As all routers' initial path starts with '/api',
the middleware will apply to all the routers defined below authRouter.
So I assume that If send a request to get orders, I will jwt authentication error.

```
const authRouter = express.Router();
authRouter.use(authenticateToken);
authRouter.get("/auth", getUsers);
authRouter.post("/auth", getSpecificUser);
```

**_Yeah it was correct_**

So I will try this code as this .
What I am assuming is that I can get orders because middleware is applying to specific method . This will generalize the middleware.

```
const authRouter = express.Router();
//authRouter.use(authenticateToken);
authRouter.get("/auth",authenticateToken, getUsers);
authRouter.post("/auth", getSpecificUser);
```

**_Yeah That was correct_**

## What I learnt from 1

1. exampleRouter.use(exampleMiddleware) will apply this exampleMiddleware to the router and its sub routers .

I also tried this. I assumed this will take same effect as in the index.js.But it didn't . I can get orders . I think this is because we defined specific method e.g. post ,get.

```
orderRouter.post("/order", authenticateToken, createOrder);
orderRouter.get("/order", getOrders);
```

2. So routes are more general . It's like application .
3. By the way , I heard global error handling principle .

```
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
```

4. Same route path can lead into route conflict. Same path is not good .
