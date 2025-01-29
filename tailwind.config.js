/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        style:'Great Vibes',
        robo:'Roboto',
        head:'Kaisei Opti',
      }, 
      screens:{
       'sd':{'max':'410px',},
       'nd':{'min':'411px','max':'576px'},//normal device
       'st':{'min':'577px','max':'760px'},// small tables
       'lt':{'min':'761px','max':'992px'},// large tablets
       'ld':{'min':'993px','max':'1200px'},//desktop and laptop
       'ls':{'min':'1201px'},//large screens
       'lds': {'raw': '(max-height:500px)'} 
      },
      colors: {
        "black":"var(--black)",
        "grey":"var(--grey)",
        "blue":"var(--blue)",
        "white":"var(--white)",
        "bg":"var(--bg)",
      },
      // backgroundImage: {
      //   'mc': "url('mc.webp')",
      //   'sld': "url('sld.webp')",
      //   'de': "url('de.webp')",
      // }
    },
  },
  plugins: [],
}

