import express from "express";
import session from "express-session";
import passport from "./middlewares/passportSetup";
import authRoutes from "./routes/authRoute";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/auth", authRoutes);

app.use((err :any, req:any, res:any, next:any) => { 
  console.error(err.stack);
  res.status(500).send("Something broke!");
  next();
})
export default app;
