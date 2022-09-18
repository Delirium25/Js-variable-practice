let siameseLike = {
  title: "Siamese Fans",
  imgUrl: "https://facebook.com/SimaeseFansFB/profileImg.jpg",
  totalLikes: 232324,
};

let bengalLike = {
  title: "Bengal Fans",
  imgUrl: "https://facebook.com/BengalFansFB/profileImg.jpg",
  totalLikes: 855644,
};

let plantsLike = {
  title: "Peace Lily Fans",
  imgUrl: "https://facebook.com/PeaceLilyFansFB/profileImg.jpg",
  totalLikes: 5264,
};

let anna = {
  mutualFriends: 2,
  newFriends: 5,
  lastAttendedEventName: "Gyöngyfűző est",
};

let zsófi = {
  mutualFriends: 150,
  newFriends: 6,
  lastAttendedEventName: "Cicasimogató délután",
};

let balázs = {
  mutualFriends: 60,
  newFriends: 6,
  lastAttendedEventName: "WoWHead Meeting",
};


let myProfile = {
  username: "Veronika Szabó",
  friends: [anna, zsófi, balázs],
  likes: [siameseLike, bengalLike, plantsLike],
  birthday: {
    month: 1,
    day: 25,
  },
  gender: "female",
  studies: "ELTE",
  addedPictureInfo: {
    profilePictureCount: 1,
    coverPictureCount: 0,
  },
  contactInfo: {
    county: "Hungary"
  }
  
};

myProfile.likes[3]

console.log(myProfile);
