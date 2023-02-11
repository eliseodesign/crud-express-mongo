import app from "./src/app"
require('dotenv').config()

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
