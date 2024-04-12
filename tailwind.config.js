/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sss: '0.25rem',
        ss: '0.55rem',
        '2rem': '2rem',
        '40px': '2.5rem',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0$',
      },
      borderWidth: {
        '1': '1px',
      },
      padding: {
        '20': '20px',
        '30': '30px',
      },
      width: {
        '4px': '4px',
        '9px': '9px',
        '12px': '12px',
        '10px': '10px',
        '22px': '22px',
        '60px': '60px',
        '28px': '28px',
        '125px': '125px',
        '1/6': '16.66667%',
        '32': '32%',
        '33': '33.333337%',
        '95': '95%',
        '120': '120px',
        '200': '200px',
        '240': '240px',
        '320': '320px',
        '440': '440px',
        '500': '500px',
        '500': '500px',
      },
      height: {
        '1-3': '3px',
        '4px': '4px',
        '1-4': '5px',
        '1-5': "6px",       
        '12px': "12px",       
        '16px': '16px',
        '22px': '22px',
        '90': '91%',
        '70': '70px',
        '91': '90px',
        '84': '84px',
        '15': '10%',
        '120': '120px',
        '150': '150px',
        '200': '200px',
        '3000': '3000px',

      },
      minHeight: {
        '40': '40px',
        '32': '32px',
      },
      minWidth: {
        '40': '40px',
        '32': '32px',
        '107': '107px',
        '190': '190px',
        '235': '235px',
      },
      maxWidth: {
        '200px': '200px',
        '235': '235px',
        '1/44': '14.28571%',
      },
      maxHeight: {
        '200px': '200px',
      },
      spacing: {
        '99': '99%',
        '60%': '60%',
        '120%': '120%',
        '94%': '94%',
      },
      inset: {
        '94%': '94%',
        '15%': '15%',
      },
      gap: {
        '30px': '1,875',
      },
      backgroundImage: {
        
      },
      colors: {
        primary: '#170f23',
        inp: '#2f2739',
        inputs: '#d3d3d3',
        navBar: '#130c1c',
        main: '#231b2e',
        violet: '#9b4de0',
        colo: '#DADADA',
        active: '#3a3344',
        silver: '#a6a6a6',
        colorPopup: '#34224f',
        before: '3px',
        shadowPopup: '0 0 5px 0 rgba(0,0,0,.2)',
        bgOpacity: 'rgba(156, 156, 156, 0.3)',
        musicBgColor: 'rgba(0,0,0, 0.5)',

        blueRose: '#1a3570',
        bluePrimaryRose: '#1A3570',
        searchBarRose: '#061d4f',
        sidebarRose: 'hsla(0,0%,100%,0.05)',
        searchRose: 'hsla(0,0%,100%,0.1)',
        textRose: '#4C7CFF',
        controlAudioRose: '#061641',
        lineActiveRose: '#3560F5',

        sidebarJennie: 'rgba(0,0,0,0.05)',
        searchBarJennie: '#bbb9c4',
        textActiveJennie: '#2a5e6b',
        textJennie: '#32323d',
        textSecondJennie: '#696969',
        textPlaceHolderJennie: '#757575',
        settingIcon: '#495057',
        popupJennie: '#CAC6DD', 
        controlAudioJennie: '#c6c4d1',
        lineActiveJennie: '#8919AE',

        lineActiveJisoo: '#8D22C3',

        sidebarLisa: 'hsla(0,0%,100%,0.3)',
        searchBarLisa: '#f2ddd8',
        popupLisa: '#F9E6E2',
        textLisa: '#CC3373',
        controlAudioLisa: '#f4cbca',
        lineActiveLisa: '#D14781',

        popupUI: '#EFEDEB',
        searchBarIU: '#e6e1de',
        controlAudioIU: '#f5e6e0',
        
        textEiffel: '#a0a0a0',
        searchBarEiffel: '#282828',
        popupEiffel: '#363636',
        controlAudioEiffel: '#181818',

        textZingchart: 'hsla(0,0%,100%,0.5)',
      },
      boxShadow: {
        musicShadow: '0px 0px 7px 3px inset',
      },
      animation: {
        'spin-rotate': 'spinn 4s infinite linear ',
        'm1-animate': 'm1 2s infinite ease-in ',
        'm2-animate': 'm2 2.5s infinite ease-in-out',
        'm3-animate': 'm3 3s infinite linear ',
        'm4-animate': 'm4 3.5s infinite ease-in ',
        'm5-animate': 'm5 2.2s infinite ease-in ',
        'm6-animate': 'm6 1.8s infinite ease-in-out ',
      },
      keyframes: {
        "spinn": {
          '100%' : { transform: 'rotate(360deg)'} 
        },
        'm1': {
          '0%': { transform: 'translateX(-5px) translateY(0) rotateZ(0deg)', scale: 0.1, opacity: 0.2 },
          '5%': { transform: 'translateX(-15px) translateY(-5px) rotateZ(10deg)', opacity: 0.3 },
          '10%': { transform: 'translateX(-20px) translateY(-10px) rotateZ(-10deg)', scale: 0.2, opacity: 0.4 },
          '15%': { transform: 'translateX(-25px) translateY(-15px) rotateZ(10deg)', opacity: 0.4 },
          '20%': { transform: 'translateX(-30px) translateY(-20px) rotateZ(-10deg)', scale: 0.4, opacity: 0.5 },
          // '25%': { transform: 'translateX(-35px) translateY(-25px) rotateZ(10deg)',  opacity: 5 },
          '30%': { transform: 'translateX(-40px) translateY(-30px) rotateZ(10deg)', scale: 0.6, opacity: 0.7 },
          // '35%': { transform: 'translateX(-42px) translateY(-32px) rotateZ(10deg)',  opacity: 0.7 },
          '40%': { transform: 'translateX(-41px) translateY(-34px) rotateZ(-10deg)', scale: 0.8, opacity: 0.8 },
          // '45%': { transform: 'translateX(-41px) translateY(-36px) rotateZ(10deg)',  opacity: 0.9 },
          '50%': { transform: 'translateX(-40px) translateY(-38px) rotateZ(10deg)', scale: 1, opacity: 1 },
          // '55%': { transform: 'translateX(-39px) translateY(-40px) rotateZ(10deg)',  opacity: 0.9 },
          '60%': { transform: 'translateX(-39px) translateY(-42px) rotateZ(-10deg)', scale: 1.1, opacity: 0.8 },
          // '65%': { transform: 'translateX(-38px) translateY(-44px) rotateZ(10deg)',  opacity: 0.7 },
          '70%': { transform: 'translateX(-38px) translateY(-46px) rotateZ(10deg)', scale: 1.2, opacity: 0.6 },
          // '75%': { transform: 'translateX(-37px) translateY(-48px) rotateZ(10deg)',  opacity: 0.5 },
          '80%': { transform: 'translateX(-37px) translateY(-50px) rotateZ(-10deg)', scale: 1.3, opacity: 0.4 },
          // '85%': { transform: 'translateX(-36px) translateY(-52px) rotateZ(10deg)',  opacity: 0.3 },
          '90%': { transform: 'translateX(-36px) translateY(-58px) rotateZ(-10deg)', scale: 1.4, opacity: 0.2 },
          '95%': { transform: 'translateX(-35px) translateY(-64px) rotateZ(10deg)',  opacity: 0.1 },
          '100%': { transform: 'translateX(-34px) translateY(-72px) rotateZ(-10deg)', scale: 1.45 , opacity: 0  }
        },
        'm2': {
          '0%': { transform: 'translateX(-5px) translateY(0) rotateZ(0deg)', scale: 1, opacity: 0.2 },
          '5%': { transform: 'translateX(-15px) translateY(-5px) rotateZ(10deg)', scale: 1, opacity: 0.3 },
          '10%': { transform: 'translateX(-20px) translateY(-10px) rotateZ(-10deg)', scale: 1, opacity: 0.4 },
          '15%': { transform: 'translateX(-25px) translateY(-15px) rotateZ(10deg)', scale: 1, opacity: 0.4 },
          '20%': { transform: 'translateX(-30px) translateY(-20px) rotateZ(-10deg)', scale: 1, opacity: 0.5 },
          // '25%': { transform: 'translateX(-35px) translateY(-25px) rotateZ(10deg)', scale: 1, opacity: 0.5 },
          '30%': { transform: 'translateX(-37px) translateY(-30px) rotateZ(10deg)', scale: 1, opacity: 0.7 },
          // '35%': { transform: 'translateX(-38px) translateY(-32px) rotateZ(10deg)', scale: 1, opacity: 0.7 },
          '40%': { transform: 'translateX(-38px) translateY(-34px) rotateZ(-10deg)', scale: 1, opacity: 0.8 },
          // '45%': { transform: 'translateX(-37px) translateY(-36px) rotateZ(10deg)', scale: 1, opacity: 0.9 },
          '50%': { transform: 'translateX(-37px) translateY(-38px) rotateZ(10deg)', scale: 1, opacity: 1 },
          // '55%': { transform: 'translateX(-36px) translateY(-40px) rotateZ(10deg)', scale: 1, opacity: 0.9 },
          '60%': { transform: 'translateX(-36px) translateY(-39px) rotateZ(-10deg)', scale: 1, opacity: 0.8 },
          // '65%': { transform: 'translateX(-35px) translateY(-44px) rotateZ(10deg)', scale: 1, opacity: 0.7 },
          '70%': { transform: 'translateX(-34px) translateY(-41px) rotateZ(10deg)', scale: 1, opacity: 0.6 },
          // '75%': { transform: 'translateX(-33px) translateY(-48px) rotateZ(10deg)', scale: 1, opacity: 0.5 },
          '80%': { transform: 'translateX(-32px) translateY(-44px) rotateZ(-10deg)', scale: 1, opacity: 0.4 },
          // '85%': { transform: 'translateX(-32px) translateY(-52px) rotateZ(10deg)', scale: 1, opacity: 0.3 },
          '90%': { transform: 'translateX(-31px) translateY(-50px) rotateZ(10deg)', scale: 1, opacity: 0.2 },
          '95%': { transform: 'translateX(-30px) translateY(-60px) rotateZ(-10deg)', scale: 1, opacity: 0.1 },
          '100%': { transform: 'translateX(-29px) translateY(-68px) rotateZ(10deg)', scale: 1, opacity: 0  }
        },
        'm3': {
          '0%': { transform: 'translateX(-2px) translateY(0) rotateZ(0deg)', scale: 1, opacity: 0.2 },
          '5%': { transform: 'translateX(-4px) translateY(-5px) rotateZ(10deg)', scale: 1, opacity: 0.3 },
          '10%': { transform: 'translateX(-6px) translateY(-10px) rotateZ(-10deg)', scale: 1, opacity: 0.4 },
          '15%': { transform: 'translateX(-8px) translateY(-15px) rotateZ(10deg)', scale: 1, opacity: 0.4 },
          '20%': { transform: 'translateX(-10px) translateY(-20px) rotateZ(-10deg)', scale: 1, opacity: 0.5 },
          // '25%': { transform: 'translateX(-12px) translateY(-24px) rotateZ(10deg)', scale: 1, opacity: 0.5 },
          '30%': { transform: 'translateX(-14px) translateY(-28px) rotateZ(10deg)', scale: 1, opacity: 0.7 },
          // '35%': { transform: 'translateX(-16px) translateY(-32px) rotateZ(10deg)', scale: 1, opacity: 0.7 },
          '40%': { transform: 'translateX(-20px) translateY(-32px) rotateZ(-10deg)', scale: 1, opacity: 0.8 },
          // '45%': { transform: 'translateX(-22px) translateY(-36px) rotateZ(10deg)', scale: 1, opacity: 0.9 },
          '50%': { transform: 'translateX(-20px) translateY(-36px) rotateZ(10deg)', scale: 1, opacity: 1 },
          // '55%': { transform: 'translateX(-19px) translateY(-40px) rotateZ(10deg)', scale: 1, opacity: 0.9 },
          '60%': { transform: 'translateX(-19px) translateY(-40px) rotateZ(-10deg)', scale: 1, opacity: 0.8 },
          // '65%': { transform: 'translateX(-18px) translateY(-44px) rotateZ(10deg)', scale: 1, opacity: 0.7 },
          '70%': { transform: 'translateX(-18px) translateY(-44px) rotateZ(10deg)', scale: 1, opacity: 0.6 },
          // '75%': { transform: 'translateX(-17px) translateY(-48px) rotateZ(10deg)', scale: 1, opacity: 0.5 },
          '80%': { transform: 'translateX(-17px) translateY(-48px) rotateZ(-10deg)', scale: 1, opacity: 0.4 },
          // '85%': { transform: 'translateX(-16px) translateY(-52px) rotateZ(10deg)', scale: 1, opacity: 0.3 },
          '90%': { transform: 'translateX(-16px) translateY(-52px) rotateZ(10deg)', scale: 1, opacity: 0.2 },
          '95%': { transform: 'translateX(-15px) translateY(-60px) rotateZ(-10deg)', scale: 1, opacity: 0.1 },
          '100%': { transform: 'translateX(-14px) translateY(-68px) rotateZ(10deg)', scale: 1, opacity: 0  }
        },
        'm4': {
          '0%': { transform: 'translateX(-5px) translateY(0) rotateZ(0deg)', opacity: 0.2 },
          '5%': { transform: 'translateX(-15px) translateY(-5px) rotateZ(10deg)', opacity: 0.3 },
          '10%': { transform: 'translateX(-20px) translateY(-10px) rotateZ(-10deg)', opacity: 0.4 },
          '15%': { transform: 'translateX(-25px) translateY(-15px) rotateZ(10deg)', opacity: 0.4 },
          '20%': { transform: 'translateX(-30px) translateY(-20px) rotateZ(-10deg)', opacity: 0.5 },
          // '25%': { transform: 'translateX(-35px) translateY(-25px) rotateZ(10deg)', opacity: 0.5 },
          '30%': { transform: 'translateX(-40px) translateY(-28px) rotateZ(10deg)', opacity: 0.7 },
          // '35%': { transform: 'translateX(-42px) translateY(-32px) rotateZ(10deg)', opacity: 0.7 },
          '40%': { transform: 'translateX(-44px) translateY(-32px) rotateZ(-10deg)', opacity: 0.8 },
          // '45%': { transform: 'translateX(-46px) translateY(-36px) rotateZ(10deg)', opacity: 0.9 },
          '50%': { transform: 'translateX(-48px) translateY(-36px) rotateZ(10deg)', opacity: 1 },
          // '55%': { transform: 'translateX(-47px) translateY(-40px) rotateZ(10deg)', opacity: 0.9 },
          '60%': { transform: 'translateX(-47px) translateY(-40px) rotateZ(-10deg)', opacity: 0.8 },
          // '65%': { transform: 'translateX(-46px) translateY(-44px) rotateZ(10deg)', opacity: 0.7 },
          '70%': { transform: 'translateX(-46px) translateY(-44px) rotateZ(10deg)', opacity: 0.6 },
          // '75%': { transform: 'translateX(-45px) translateY(-48px) rotateZ(10deg)', opacity: 0.5 },
          '80%': { transform: 'translateX(-44px) translateY(-48px) rotateZ(-10deg)', opacity: 0.4 },
          // '85%': { transform: 'translateX(-43px) translateY(-52px) rotateZ(10deg)', opacity: 0.3 },
          '90%': { transform: 'translateX(-43px) translateY(-54px) rotateZ(10deg)', opacity: 0.2 },
          '95%': { transform: 'translateX(-42px) translateY(-62px) rotateZ(-10deg)', opacity: 0.1 },
          '100%': { transform: 'translateX(-42px) translateY(-72px) rotateZ(10deg)', opacity: 0  }
        },
        'm5': {
          '0%': { transform: 'translateX(-5px) translateY(0) rotateZ(0deg)', opacity: 0.2 },
          '5%': { transform: 'translateX(-15px) translateY(-5px) rotateZ(10deg)', opacity: 0.3 },
          '10%': { transform: 'translateX(-20px) translateY(-10px) rotateZ(-10deg)', opacity: 0.4 },
          '15%': { transform: 'translateX(-25px) translateY(-15px) rotateZ(10deg)', opacity: 0.4 },
          '20%': { transform: 'translateX(-30px) translateY(-20px) rotateZ(-10deg)', opacity: 0.5 },
          // '25%': { transform: 'translateX(-35px) translateY(-25px) rotateZ(10deg)', opacity: 0.5 },
          '30%': { transform: 'translateX(-40px) translateY(-28px) rotateZ(10deg)', opacity: 0.7 },
          // '35%': { transform: 'translateX(-42px) translateY(-32px) rotateZ(10deg)', opacity: 0.7 },
          '40%': { transform: 'translateX(-44px) translateY(-32px) rotateZ(-10deg)', opacity: 0.8 },
          // '45%': { transform: 'translateX(-46px) translateY(-36px) rotateZ(10deg)', opacity: 0.9 },
          '50%': { transform: 'translateX(-48px) translateY(-36px) rotateZ(10deg)', opacity: 1 },
          // '55%': { transform: 'translateX(-47px) translateY(-40px) rotateZ(10deg)', opacity: 0.9 },
          '60%': { transform: 'translateX(-47px) translateY(-40px) rotateZ(-10deg)', opacity: 0.8 },
          // '65%': { transform: 'translateX(-46px) translateY(-44px) rotateZ(10deg)', opacity: 0.7 },
          '70%': { transform: 'translateX(-46px) translateY(-44px) rotateZ(10deg)', opacity: 0.6 },
          // '75%': { transform: 'translateX(-45px) translateY(-48px) rotateZ(10deg)', opacity: 0.5 },
          '80%': { transform: 'translateX(-44px) translateY(-48px) rotateZ(-10deg)', opacity: 0.4 },
          // '85%': { transform: 'translateX(-43px) translateY(-52px) rotateZ(10deg)', opacity: 0.3 },
          '90%': { transform: 'translateX(-43px) translateY(-54px) rotateZ(10deg)', opacity: 0.2 },
          '95%': { transform: 'translateX(-42px) translateY(-62px) rotateZ(-10deg)', opacity: 0.1 },
          '100%': { transform: 'translateX(-42px) translateY(-72px) rotateZ(10deg)', opacity: 0  }
        },
        'm6': {
          '0%': { transform: 'translateX(-5px) translateY(0) rotateZ(0deg)', opacity: 0.2 },
          '5%': { transform: 'translateX(-15px) translateY(-5px) rotateZ(10deg)', opacity: 0.3 },
          '10%': { transform: 'translateX(-20px) translateY(-10px) rotateZ(-10deg)', opacity: 0.4 },
          '15%': { transform: 'translateX(-25px) translateY(-15px) rotateZ(10deg)', opacity: 0.4 },
          '20%': { transform: 'translateX(-30px) translateY(-20px) rotateZ(-10deg)', opacity: 0.5 },
          // '25%': { transform: 'translateX(-35px) translateY(-25px) rotateZ(10deg)', opacity: 0.5 },
          '30%': { transform: 'translateX(-40px) translateY(-28px) rotateZ(10deg)', opacity: 0.7 },
          // '35%': { transform: 'translateX(-42px) translateY(-32px) rotateZ(10deg)', opacity: 0.7 },
          '40%': { transform: 'translateX(-44px) translateY(-32px) rotateZ(-10deg)', opacity: 0.8 },
          // '45%': { transform: 'translateX(-46px) translateY(-36px) rotateZ(10deg)', opacity: 0.9 },
          '50%': { transform: 'translateX(-48px) translateY(-36px) rotateZ(10deg)', opacity: 1 },
          // '55%': { transform: 'translateX(-47px) translateY(-40px) rotateZ(10deg)', opacity: 0.9 },
          '60%': { transform: 'translateX(-47px) translateY(-40px) rotateZ(-10deg)', opacity: 0.8 },
          // '65%': { transform: 'translateX(-46px) translateY(-44px) rotateZ(10deg)', opacity: 0.7 },
          '70%': { transform: 'translateX(-46px) translateY(-44px) rotateZ(10deg)', opacity: 0.6 },
          // '75%': { transform: 'translateX(-45px) translateY(-48px) rotateZ(10deg)', opacity: 0.5 },
          '80%': { transform: 'translateX(-44px) translateY(-48px) rotateZ(-10deg)', opacity: 0.4 },
          // '85%': { transform: 'translateX(-43px) translateY(-52px) rotateZ(10deg)', opacity: 0.3 },
          '90%': { transform: 'translateX(-43px) translateY(-54px) rotateZ(10deg)', opacity: 0.2 },
          '95%': { transform: 'translateX(-42px) translateY(-62px) rotateZ(-10deg)', opacity: 0.1 },
          '100%': { transform: 'translateX(-42px) translateY(-72px) rotateZ(10deg)', opacity: 0  }
        },
      }
    },
  },
  plugins: [],
}