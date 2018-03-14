Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins '*'
      #security problem !!!
      resource '*', :headers => :any, :methods => [:get, :post, :put, :patch, :head, :options]
    end
  end