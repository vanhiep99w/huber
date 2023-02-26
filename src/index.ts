import App from "./app";

const PORT: number | string = process.env.PORT || 4000;

const app = new App().app;

app.listen(PORT, () => {
  console.log("Server is listening on port: " + PORT);
});
