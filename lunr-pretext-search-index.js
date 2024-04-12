var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This would be the preface  "
},
{
  "id": "ch1",
  "level": "1",
  "url": "ch1.html",
  "type": "Chapter",
  "number": "1",
  "title": "Motion",
  "body": " Motion   In this chapter, we will study how to describe and represent motion    Motion  We will define motion as the change of the positon or orientation of an object. We will study 4 tipes of motions in this course:   Straight Line Motion    Two dimensional Motion (Projectile motion, Circular motion)    Rotational Motion       Position and Time    Units   "
},
{
  "id": "ch2",
  "level": "1",
  "url": "ch2.html",
  "type": "Chapter",
  "number": "2",
  "title": "Displacement, Velocity, Acceleration",
  "body": " Displacement, Velocity, Acceleration   This is chapter 5    Change in Position: Displacement    Velocity, Uniform Motion    Instantenuous Velocity    Acceleration    Motion: Graphical Representation   "
},
{
  "id": "ch3",
  "level": "1",
  "url": "ch3.html",
  "type": "Chapter",
  "number": "3",
  "title": "One Dimensional Kinematics",
  "body": " One Dimensional Kinematics   This is chapter 6    Motion with Constant Acceleration    Solving One-Dimenstional-Problems    Free Fall   "
},
{
  "id": "ch4",
  "level": "1",
  "url": "ch4.html",
  "type": "Chapter",
  "number": "4",
  "title": "Two Dimensional Kinematics",
  "body": " Two Dimensional Kinematics   This is chapter 7    Vectors    Motion in Two Dimensions    Projectile Motion   "
},
{
  "id": "ch5",
  "level": "1",
  "url": "ch5.html",
  "type": "Chapter",
  "number": "5",
  "title": "Forces and Free Body Diagrams",
  "body": " Forces and Free Body Diagrams   This is chapter 2   "
},
{
  "id": "ch6",
  "level": "1",
  "url": "ch6.html",
  "type": "Chapter",
  "number": "6",
  "title": "Newton’s Laws Applications\/title",
  "body": " Newton's Laws Applications\/title   Text before the first section.     Section Title  Text of section.   "
},
{
  "id": "ch7",
  "level": "1",
  "url": "ch7.html",
  "type": "Chapter",
  "number": "7",
  "title": "Newton’s Third Law",
  "body": " Newton's Third Law   This is chapter 2   "
},
{
  "id": "ch8",
  "level": "1",
  "url": "ch8.html",
  "type": "Chapter",
  "number": "8",
  "title": "Impulse, Momentum",
  "body": " Impulse, Momentum   This is chapter 2   "
},
{
  "id": "ch9",
  "level": "1",
  "url": "ch9.html",
  "type": "Chapter",
  "number": "9",
  "title": "Rotational Kinematics",
  "body": " Rotational Kinematics   This is chapter 2   "
},
{
  "id": "ch10",
  "level": "1",
  "url": "ch10.html",
  "type": "Chapter",
  "number": "10",
  "title": "Rotational Dynamics",
  "body": " Rotational Dynamics   This is chapter 2   "
},
{
  "id": "ch11",
  "level": "1",
  "url": "ch11.html",
  "type": "Chapter",
  "number": "11",
  "title": "Equilibrium",
  "body": " Equilibrium   This is chapter 2   "
},
{
  "id": "ch12",
  "level": "1",
  "url": "ch12.html",
  "type": "Chapter",
  "number": "12",
  "title": "Work, Kinetic and Potential Energy",
  "body": " Work, Kinetic and Potential Energy   This is chapter 2   "
},
{
  "id": "ch13",
  "level": "1",
  "url": "ch13.html",
  "type": "Chapter",
  "number": "13",
  "title": "Energy Equation, Conservation of Energy",
  "body": " Energy Equation, Conservation of Energy   This is chapter 2   "
},
{
  "id": "ch14",
  "level": "1",
  "url": "ch14.html",
  "type": "Chapter",
  "number": "14",
  "title": "Fluids",
  "body": " Fluids   This is chapter 2   "
},
{
  "id": "review1",
  "level": "1",
  "url": "review1.html",
  "type": "Chapter",
  "number": "15",
  "title": "Algebra Review",
  "body": " Algebra Review   This is chapter 2   "
},
{
  "id": "review2",
  "level": "1",
  "url": "review2.html",
  "type": "Chapter",
  "number": "16",
  "title": "Trigonometry Review",
  "body": " Trigonometry Review   This is chapter 3   "
},
{
  "id": "review3",
  "level": "1",
  "url": "review3.html",
  "type": "Chapter",
  "number": "17",
  "title": "Functions and Graphs Review",
  "body": " Functions and Graphs Review   This is chapter 3   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
