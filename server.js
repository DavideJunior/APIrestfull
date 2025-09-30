import http from 'http'

const PORT = 3000;

const server = http.createServer((req, res)=>{

    if (req.url === '/'){

        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<H1>Hello word</h1')
    }

});

        server.listen(PORT, () => {
            console.log(`Conexão bem sucedida em http://localhost:${PORT}`);
        });
