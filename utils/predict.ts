import { client } from "@gradio/client"
async function predict() {
  const app = await client("http://127.0.0.1:7860/", {});
  const result = await app.predict(1, [		
    "Default", // string  in 'Decoder' Radio component
  ]);
  console.log(result);
}


export default predict;