export class Proposal {
    constructor (
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http://',
    public tools?: string,
    public estimated_hours?: number,
    public hourly_rate?: number,
    public client_email?: string,
    ) {}
}


const proposals: Proposal[] = [
 {
   id: 1,
   customer: 'Evan Munz',
   portfolio_url: 'http://www.evanmunz.com',
   tools: 'VSCode, MVC, C#',
   estimated_hours: 24,
   hourly_rate: 25,
   client_email: 'evanmunz@gmail.com',
 },
 {
    id: 2,
    customer: 'Nina Palumbo',
    portfolio_url: 'http://www.ninapalumbo.com',
    tools: 'Photoshop, Adobe Suites, Angular2 on Rails',
    estimated_hours: 12,
    hourly_rate: 50,
    client_email: 'ninapalumbo@gmail.com',
  },
  {
    id: 2,
    customer: 'Nina Palumbo',
    portfolio_url: 'http://www.ninapalumbo.com',
    tools: 'Photoshop, Adobe Suites, Angular2 on Rails',
    estimated_hours: 12,
    hourly_rate: 50,
    client_email: 'ninapalumbo@gmail.com',
  },
  {
    id: 2,
    customer: 'Nina Palumbo',
    portfolio_url: 'http://www.ninapalumbo.com',
    tools: 'Photoshop, Adobe Suites, Angular2 on Rails',
    estimated_hours: 12,
    hourly_rate: 50,
    client_email: 'ninapalumbo@gmail.com',
  },
  {
    id: 2,
    customer: 'Nina Palumbo',
    portfolio_url: 'http://www.ninapalumbo.com',
    tools: 'Photoshop, Adobe Suites, Angular2 on Rails',
    estimated_hours: 12,
    hourly_rate: 50,
    client_email: 'ninapalumbo@gmail.com',
  },
  {
    id: 2,
    customer: 'Nina Palumbo',
    portfolio_url: 'http://www.ninapalumbo.com',
    tools: 'Photoshop, Adobe Suites, Angular2 on Rails',
    estimated_hours: 12,
    hourly_rate: 50,
    client_email: 'ninapalumbo@gmail.com',
  },
  {
    id: 2,
    customer: 'Nina Palumbo',
    portfolio_url: 'http://www.ninapalumbo.com',
    tools: 'Photoshop, Adobe Suites, Angular2 on Rails',
    estimated_hours: 12,
    hourly_rate: 50,
    client_email: 'ninapalumbo@gmail.com',
  },
  {
    id: 3,
    customer: 'Rachel Adams',
    portfolio_url: 'http://www.RachelAdams.com',
    tools: 'Adobe Sketch',
    estimated_hours: 72,
    hourly_rate: 75,
    client_email: 'racheladams@hotmail.com',
  },
  {
    id: 4,
    customer: 'Tanya Tugboat',
    portfolio_url: 'http://www.tanyatuggy.com',
    tools: 'React and Redux',
    estimated_hours: 72,
    hourly_rate: 80,
    client_email: 'thetugs@outlook.com',
  },
];

export { proposals };
