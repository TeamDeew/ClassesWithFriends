// create a course code based on the users picture
export function createUserCode(courseCodes) {
  var code = "";
  for (var i = 0; i < courseCodes.length; i++) {
    let encodedCharacter = encodeCourseCode(courseCodes[i]);
    code += encodedCharacter;
  }
  return code;
}
// change a encode into a list of courses
export function decodeUserCode(userCode) {
  var userCourses = [];
  for (var i = 0; i < userCode.length; i++) {
    let course = decodeCharacter(userCode.charAt(i));
    userCourses.push(course);
  }
  return userCourses;
}

export function compareCourseCodes(userCode, otherCode) {
  var sharedCourses = [];
  for (var i = 0; i < userCode.length; i++) {
    for (var j = 0; j < otherCode.length; j++) {
      if (userCode[i] == otherCode[j]) {
        sharedCourses.push(decodeCharacter(userCode[i]));
      }
    }
  }
  return sharedCourses;
}

export function encodeCourseCode(s) {
  var str = s.trim();
  str = str.toUpperCase();
  if (str == "CIS*1000") {
    return "1";
  } else if (str == "CIS*1200") {
    return "2";
  } else if (str == "CIS*1500") {
    return "3";
  } else if (str == "CIS*1910") {
    return "4";
  } else if (str == "CIS*2170") {
    return "5";
  } else if (str == "CIS*2250") {
    return "6";
  } else if (str == "CIS*2500") {
    return "7";
  } else if (str == "CIS*2750") {
    return "8";
  } else if (str == "CIS*3110") {
    return "9";
  } else if (str == "CIS*3120") {
    return "a";
  } else if (str == "CIS*3190") {
    return "b";
  } else if (str == "CIS*3490") {
    return "c";
  } else if (str == "CIS*3700") {
    return "d";
  } else if (str == "CIS*3750") {
    return "e";
  } else if (str == "CIS*3760") {
    return "f";
  } else if (str == "CIS*4450") {
    return "g";
  } else if (str == "CIS*4520") {
    return "h";
  } else if (str == "CIS*4650") {
    return "i";
  } else if (str == "CIS*4720") {
    return "j";
  } else if (str == "CIS*4820") {
    return "k";
  } else if (str == "CIS*6130") {
    return "l";
  } else if (str == "CIS*6650") {
    return "m";
  } else if (str == "CIS*6890") {
    return "n";
  } else {
    return "";
  }
}

export function decodeCharacter(s) {
  char = s.toLowerCase();
  if (char == "1") {
    return "CIS*1000";
  } else if (char == "2") {
    return "CIS*1200";
  } else if (char == "3") {
    return "CIS*1500";
  } else if (char == "4") {
    return "CIS*1910";
  } else if (char == "5") {
    return "CIS*2170";
  } else if (char == "6") {
    return "CIS*2250";
  } else if (char == "7") {
    return "CIS*2500";
  } else if (char == "8") {
    return "CIS*2750";
  } else if (char == "9") {
    return "CIS*3110";
  } else if (char == "a") {
    return "CIS*3120";
  } else if (char == "b") {
    return "CIS*3190";
  } else if (char == "c") {
    return "CIS*3490";
  } else if (char == "d") {
    return "CIS*3700";
  } else if (char == "e") {
    return "CIS*3750";
  } else if (char == "f") {
    return "CIS*3760";
  } else if (char == "g") {
    return "CIS*4450";
  } else if (char == "h") {
    return "CIS*4520";
  } else if (char == "i") {
    return "CIS*4650";
  } else if (char == "j") {
    return "CIS*4720";
  } else if (char == "k") {
    return "CIS*4820";
  } else if (char == "l") {
    return "CIS*6130";
  } else if (char == "m") {
    return "CIS*6650";
  } else if (char == "n") {
    return "CIS*6890";
  } else {
    return "";
  }
}
