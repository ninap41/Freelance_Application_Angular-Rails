
10.times do |proposal|
Proposal.create!(
    customer: "Customer #{proposal}",
    portfolio_url: 'http://www.ninapalumbo.com',
    tools: "Angular2, Postgres, rails",
    estimated_hours: 80,
    hourly_rate: 100,
    client_email: 'ninapalumbo@gmail.com',
    ) 
end
