# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
demo = User.create({
  email: 'demo@gmail.com',
  username: 'guest',
  bio: 'Just poking around',
  img_url: 'https://source.unsplash.com/WLUHO9A_xik/1600x900',
  password: 'guestguest'
})
michael = User.create({
  email: 'pinky@gmail.com',
  username: 'pinky',
  bio: 'Living in a Pink, Pink, Pink World!',
  img_url: 'https://source.unsplash.com/T4pyizC6G1k',
  password: 'testing'
})
nancy = User.create({
  email: 'outside@gmail.com',
  username: 'lovethdays',
  bio: 'all fluff',
  img_url:'https://source.unsplash.com/16MhQnEhUTk',
  password: 'lovethedays'
})
sparks = User.create({
  email: 'parker@gmail.com',
  username: 'sparks',
  bio: 'professional dream chaser',
  img_url: 'https://source.unsplash.com/hAzhOdGngxc',
  password: 'sparks'
})
joey = User.create({
  email: 'threedot@gmail.com',
  username: 'woofly',
  bio: 'Ruff Ruff',
  img_url: 'https://source.unsplash.com/XE87arvN3oo',
  password: 'woofly'
})
kitten = User.create({
  email: 'giantworm@gmail.com',
  username: 'giantworm',
  bio: 'Taking photos of cats because... Cats.',
  img_url: 'https://source.unsplash.com/inLUHAdcSAw',
  password: 'giantworm'
})

michael = User.find_by(username: "pinky")
nancy = User.find_by(username: "lovethedays")
kitten = User.find_by(username: "giantworm")
demo = User.find_by(username: "guest")
joey = User.find_by(username: "woofly")
sparks = User.find_by(username: "sparks")




Photo.create({ img_url: "https://source.unsplash.com/aZOqcEK2KuQ", author_id: michael.id, caption: "fancy nachos", location: "Queens, NY"})
Photo.create({ img_url: "https://source.unsplash.com/ptW67z7Y4-s", author_id: nancy.id, caption: "party time!!", location: "Morristown, NJ"})
Photo.create({ img_url: "https://source.unsplash.com/waTo4DNZ4zE", author_id: michael.id, caption: "Camping fun!", location: "Boston, MA"})
Photo.create({ img_url: "https://source.unsplash.com/yuAEcsAe4lk", author_id: sparks.id, caption: "Holiday Cookies", location: "Philadelphia, PA"})
Photo.create({ img_url: "https://source.unsplash.com/pChE-f_gqVc", author_id: joey.id, caption: "Pensive puppy? Happy times 😋", location: "Columbus, OH"})
Photo.create({ img_url: "https://source.unsplash.com/FTMfgstdJm8", author_id: sparks.id, caption: "All the Balloons", location: "Key West"})
Photo.create({ img_url: "https://source.unsplash.com/-N2Jdazh03Y", author_id: demo.id, caption: "Delish Tart", location: "Paris, France"})


Photo.create({ img_url: "https://source.unsplash.com/em4Y1-kswPU", author_id: kitten.id, caption: "Sleepytime", location: "Paris, TX"})
Photo.create({ img_url: "https://source.unsplash.com/pLKgCsBOiw4", author_id: michael.id, caption: "What is this bit of heaven?!", location: "Columbus, OH"})
Photo.create({ img_url: "https://source.unsplash.com/-r5KSMkyoSc", author_id: demo.id, caption: "Eating all natural and healthy", location: "Sunset Park, Brooklyn"})
Photo.create({ img_url: "https://source.unsplash.com/D-vDQMTfAAU", author_id: nancy.id, caption: "yummy yummy", location: "Somers, NJ"})
Photo.create({ img_url: "https://source.unsplash.com/nGEhLj236V8", author_id: sparks.id, caption: "Concert time", location: "NYC"})
Photo.create({ img_url: "https://source.unsplash.com/gxyfJQg7Lno", author_id: joey.id, caption: "Hey there! Pet me!", location: "Greenwood, BK"})
Photo.create({ img_url: "https://source.unsplash.com/rjhvXX7JBPc", author_id: michael.id, caption: "J's going to practice", location: "LA"})
Photo.create({ img_url: "https://source.unsplash.com/R18ecx07b3c", author_id: demo.id, caption: "Them FRIES!!!", location: "LA"})
Photo.create({ img_url: "https://source.unsplash.com/hfIheOEJp9M", author_id: demo.id, caption: "💅", location: "NYC"})


Photo.create({ img_url: "https://source.unsplash.com/EcBBbfNpeYA", author_id: kitten.id, caption: "sad kitty", location: "Bangkok"})
Photo.create({ img_url: "https://source.unsplash.com/CwphSEN_V5A", author_id: michael.id, caption: "Dark Rose", location: "Italy"})
Photo.create({ img_url: "https://source.unsplash.com/eCre0iMGtEA", author_id: sparks.id, caption: "love these", location: "Provence Region, France"})
Photo.create({ img_url: "https://source.unsplash.com/Q_2p94h8rjI", author_id: nancy.id, caption: "Trip Time!", location: "Philadelphia, PA"})
Photo.create({ img_url: "https://source.unsplash.com/Q6BSPSn4RxQ", author_id: joey.id, caption: "I'm on holiday!", location: "Scotland"})
Photo.create({ img_url: "https://source.unsplash.com/pwOlZpN2blUI", author_id: kitten.id, caption: "getting up for what?", location: "LA"})
Photo.create({ img_url: "https://source.unsplash.com/0WYgxbK0wWw", author_id: demo.id, caption: "camera test :P", location: "LA"})

Photo.create({ img_url: "https://source.unsplash.com/op-Quaf4Ljk", author_id: michael.id, caption: "Pretty Cool!", location: "Italy"})
Photo.create({ img_url: "https://source.unsplash.com/lu0L50ZJ2GM", author_id: demo.id, caption: "Exploring the beachtown", location: "Far Rockaways"})
Photo.create({ img_url: "https://source.unsplash.com/DyD9hx5lvpg", author_id: kitten.id, caption: "Trying on some shoes", location: "Long Island"})
Photo.create({ img_url: "https://source.unsplash.com/s0oNVwpU9NE", author_id: demo.id, caption: "lovely flowers", location: "LA"})
Photo.create({ img_url: "https://source.unsplash.com/Bcd8RvZ-Ccc", author_id: michael.id, caption: "So pink!", location: "Florida"})
Photo.create({ img_url: "https://source.unsplash.com/CwkiN6_qpDI", author_id: nancy.id, caption: "Moo??", location: "Berlin"})
Photo.create({ img_url: "https://souce.unsplash.com/DY8avafdbqo", author_id: michael.id, caption: "Market at night", location: "Chinatown"})
Photo.create({ img_url: "https://souce.unsplash.com/jnR7FpNCWCA", author_id: demo.id, caption: "photo melting...", location: "LA"})
Photo.create({ img_url: "https://source.unsplash.com/Mv9hjnEUHR4", author_id: joey.id, caption: "Need some sunglasses 👓", location: "Chinatown"})
Photo.create({ img_url: "https://source.unsplash.com/5LED2xbiKvk", author_id: demo.id, caption: "Trying out new filters for lens", location: "Berlin"})
Photo.create({ img_url: "https://source.unsplash.com/p2TQ-3Bh3Oo", author_id: michael.id, caption: "Exploration", location: "Nevada"})
Photo.create({ img_url: "https://source.unsplash.com/7hvuzoyFAgY", author_id: joey.id, caption: "Peeking out!", location: "NYC"})


car = Photo.find_by(caption: "Trip Time!")
tacos = Photo.find_by(caption: "No tacos like SoCal tacos")
shoes = Photo.find_by(caption: "Trying on some shoes")
cow = Photo.find_by(caption: "Moo?")
burger = Photo.find_by(caption: "What is this bit of heaven?")

