export default function serverConfig(app){
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    
    const corsOption = {
      origin: true,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      exposedHeaders: ['x-auth-token']
    };
    app.use(session({secret: 'currentSession'}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    })); 
    app.use(cors(corsOption));
    // define the folder that will be used for static assets
    app.use(Express.static(path.join(__dirname, 'static')));    
}