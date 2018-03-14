10.times do |d|
    FreelanceDocument.create!(title: "Document #{d}", 
        description: "ers, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text", 
        file_url:"https://docs.google.com/document/d/1BFZc17SHED7FtgWCoxtoZCfiQ5cB9ZvsLUxj_vUUA-g/edit?usp=sharing",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg",
        )
end

FreelanceDocument.create!(title: "Totally New One", 
description: "ers, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text", 
file_url:"https://docs.google.com/document/d/1BFZc17SHED7FtgWCoxtoZCfiQ5cB9ZvsLUxj_vUUA-g/edit?usp=sharing",
image_url: "https://i.kinja-img.com/gawker-media/image/upload/s--SVmSinLZ--/c_scale,fl_progressive,q_80,w_800/1230313095261956967.jpg",
)