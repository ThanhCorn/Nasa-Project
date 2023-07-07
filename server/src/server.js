require('dotenv').config();

const port = process.env.PORT || 8000;
const http = require('http');
const app = require('./app');


const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');
const { mongoConnect } = require('./services/mongo');

const server = http.createServer(app);


async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();

    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
}
startServer();