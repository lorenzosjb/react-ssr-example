import React from 'react';
import express from 'express';

import { StaticRounter } from 'react-router-dom';
import { renderToString } from'react-dom/server';
import path from 'path';
import fs from 'fs';

import App from './src/';

/***/

const app = express();
app.use(express.static("./build", { index: false }));

app.get('/*', (req, res) => {
    const reactApp = renderToString(
    <StaticRouter location={req.url}>
        <App />
    </StaticRouter>
    );
    
    res.send(
        `<html>
            <head>
                <title>Hello from the server side!</title>
            </head>
            <body>
                ${reactApp}
            </body>
        </html>`
    );
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
