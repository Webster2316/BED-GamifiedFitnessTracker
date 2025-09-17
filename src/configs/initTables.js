const pool = require("../services/db");



const SQLSTATEMENT = 
`
      CREATE TABLE User (
        user_id INT PRIMARY KEY AUTO_INCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       skillpoints INT
      );
    CREATE TABLE FitnessChallenge (
    challenge_id INT AUTO_INCREMENT PRIMARY KEY,
    creator_id INT NOT NULL,
    challenge TEXT NOT NULL,
    skillpoints INT NOT NULL
    );
    CREATE TABLE UserCompletion (
    complete_id INT AUTO_INCREMENT PRIMARY KEY,
    challenge_id INT NOT NULL,
    user_id INT NOT NULL,
    completed BOOL NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT
    );

    CREATE TABLE Player (
    player_id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    age INT NOT NULL
);

CREATE TABLE FashionStyle (
    clothing_id INT AUTO_INCREMENT PRIMARY KEY,
    style TEXT NOT NULL,
    item TEXT NOT NULL,
    skillpoints INT NOT NULL
);

CREATE TABLE PlayerFashionStyle (
    player_id INT,
    clothing_id INT,
    PRIMARY KEY (player_id, clothing_id),
    FOREIGN KEY (player_id) REFERENCES Player(player_id) ON DELETE CASCADE,
    FOREIGN KEY (clothing_id) REFERENCES FashionStyle(clothing_id) ON DELETE CASCADE
);

 
    CREATE TABLE PlayerUserRel  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_id INT NOT NULL,
    user_id INT NOT NULL
    );

    CREATE TABLE Reviews (
  id INT PRIMARY KEY AUTO_INCREMENT,
  review_amt INT NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Reviews (review_amt, user_id) VALUES
  (5, 1),
  (4, 2),  
  (3, 3);

    INSERT INTO FitnessChallenge (creator_id, challenge, skillpoints) VALUES
  (1, 'Complete 2.4km within 15 minutes', 50),
  (1, 'Cycle around the island for at least 50km', 100),
  (2, 'Complete a full marathon(42.2km)', 200),
  (2, 'Hold a plank for 5 minutes', 50),
  (2, 'Perform 100 push-ups in one session', 75);

  INSERT INTO FashionStyle (style, item, skillpoints) VALUES
  ('goth', 'dress', 35),
   ('goth', 'Platform boots', 25),
  ('emo', 'T-shirt', 15),
   ('emo', 'skirt', 15),
  ('cottagecore', 'dress', 40),
  ('cottagecore', 'Mary-janes', 25),
  ('acadamia', 'sweater', 35),
  ('acadamia', 'heels', 25),
  ('softGirl', 'skirt', 15),
   ('softGirl', 'cardigan', 35),
  ('preppy', 'blazer', 25),
  ('preppy', 'co-ord set', 60);
    `;

    
pool.query(SQLSTATEMENT, (error, results, fields) => {
    if (error) {
      console.error("Error creating tables:", error);
    } else {
      console.log("Tables created successfully");
    }
    process.exit();
  });
  