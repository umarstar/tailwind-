/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      '4xl-max': { 'max': '1920px' },
      '3xl-max': { 'max': '1735px' },
      '2xl-max': { 'max': '1535px' },
      'xl-max': { 'max': '1279px' },
      'lg-max': { 'max': '992px' },
      'md-max': { 'max': '767px' },
      'sm-max': { 'max': '639px' },
      'xs-max': { 'max': '530px' },
      'xxs-max': { 'max': '420px' }
    },
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      fontFamily: {
        Inter: ['Inter'],
        Lexend: ['Lexend']
      },
      spacing: {
        px: '1px',
        0: '0px',
        0.5: '0.125rem',
        btn_10: '10px',
        btn_24: '24px',
      },
      colors: {
        Alpha: '#1C64F2',
        Beta: '#111928',
        Gama: '#4B5563',
        Pi: '#DFF6FF',
        Light: '#FFFFFF',
        Dark: '#000000',
        Gray: {
          Shade1: '#4B5563',
          Shade2: '#9CA3AF',
          Shade3: '#cfcfcf',
          Shade4: '#374151',
        }
      },
      fontSize: {
        'h1': ['52px', { lineHeight: '66px' }],
        'h2': ['44px', { lineHeight: '58px' }],
        'h3': ['36px', { lineHeight: '50px' }],
        'h4': ['28px', { lineHeight: '42px' }],
        'h5': ['26px', { lineHeight: '40px' }],
        'h6': ['24px', { lineHeight: '38px' }],
        'large': ['20px', { lineHeight: '34px' }],
        'medium': ['18px', { lineHeight: '32px' }],
        'small': ['16px', { lineHeight: '30px' }],
        'x-small': ['14px', { lineHeight: '28px' }]
      },
      boxShadow: {
        'Alpha1': '0px 15px 20px rgb(0 0 0 / 5%)',
        'Beta1': '0px 17px 45px rgb(0 0 0 / 8%)'
      },
    },
  },
  plugins: [
    // nav start
    (function ({ addUtilities }) {
      const dropdownHome = {
        ".btn-inr": {
          color:"#4B5563",
          transition:".4s",
          "&:hover": {
            backgroundColor:"#1C64F2",
            color: "#FFF",
          },
        },
        ".li-item":{
          ".a-item": {
            color:"#4B5563",
            transition:".4s",
            "&:hover": {
              color: "black"
            },
          }
        },
      }

      addUtilities(dropdownHome, ['responsive', 'hover'])
    }),
    // end
    // hero-start
    (function ({ addUtilities }) {
      const dropdownHome = {
        ".hero-btn": {
          color:"#4B5563",
          transition:".4s",
          "&:hover": {
            backgroundColor:"#111928",
            color: "#FFF",
          },
        },
      }

      addUtilities(dropdownHome, ['responsive', 'hover'])
    }),
    // hero-end
     // section2
     (function ({ addUtilities }) {
      const dropdownHome = {
        ".tab-otr": {
          transition:".4s",
          "&:hover": {
            backgroundColor:"rgba(255, 255, 255, 0.10)",
            
          },
        },
        ".bottom-detail": {
          backgroundColor:"#E2E8F0",
        },
      }

      addUtilities(dropdownHome, ['responsive', 'hover'])
    }),
    // sec-end
    // section3
    (function ({ addUtilities }) {
      const dropdownHome = {
        ".box-inr": {
          transition:".4s",
          "&:hover": {
            ".icon-inr":{

              color: "#1C64F2",
            },
            ".p-box":{

              color: "#1C64F2",
            },
          },
        },
        ".bottom-detail": {
          backgroundColor:"#E2E8F0",
        },
      }

      addUtilities(dropdownHome, ['responsive', 'hover'])
    }),
    // sec-end
    // busniess
    (function ({ addUtilities }) {
      const dropdownHome = {
        ".inr-business": {
           boarder: "1px solid black",
           boxshadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)",
          // "&:hover": {
          //   backgroundColor: "#2D31FA",
          // },
          ".bottom-line":{
            backgroundColor:"#F3F4F6",
          },
        }
      }

      addUtilities(dropdownHome, ['responsive', 'hover'])
    }),
    (function ({ addUtilities }) {
      const dropdownHome = {
        ".footer-span": {
           
            backgroundColor:"#E5E7EB",
        
        }
      }

      addUtilities(dropdownHome, ['responsive', 'hover'])
    }),
    // price
    (function ({ addUtilities }) {
      const dropdownHome = {
        ".price-inr": {
          transition:".4s",
           "&:hover":{
            ".btn-inr5":{
              backgroundColor:"white",
              color:"black"
            },
             backgroundColor:"#1C64F2",
           }
        
        }
      }

      addUtilities(dropdownHome, ['responsive', 'hover'])
    }),
    function ({ addBase, config }) {
      addBase({
        body: {
          padding: '0',
          margin: '0',
          boxSizing: 'border-box',
          backgroundColor: "#FFF"
        },
        html: {
          boxSizing: 'border-box',
        },
        a: {
          display: 'Block',
          textDecoration: 'none',
          "&:hover": {
            textDecoration: 'none',
          }
        },
        p: {
          margin: '0px',
          padding: '0px'
        },
        h1: {
          margin: '0px',
          padding: '0px'
        },
        h2: {
          margin: '0px',
          padding: '0px'
        },
        h3: {
          margin: '0px',
          padding: '0px'
        },
        h4: {
          margin: '0px',
          padding: '0px'
        },
        h5: {
          margin: '0px',
          padding: '0px'
        },
        h6: {
          margin: '0px',
          padding: '0px'
        },
        ul: {
          listStyle: 'none',
          margin: '0px',
          padding: '0px'
        },
        li: {
          listStyle: 'none',
          margin: '0px',
          padding: '0px'
        },
      });
    },
    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".next-button": {
          transform: "translatey(-50%)",
          
          "&::after": {
            display:"none",
            
          },
          ".right-icon":{
            "&:hover":{
              backgroundColor:"red",
              color:"white"
            },
          },
         
        },
        ".prev-button": {
          transform: "translatey(-50%)",
          "&::after": {
            display:"none",
            
          },
          ".left-icon":{
            "&:hover":{
              backgroundColor:"red",
              color:"white"
            },
          },
        },
        
      };

      addUtilities(dropdownptherpages, ["responsive", "hover"]);
    }),

    (function ({ addUtilities }) {
      const dropdownHome = {
        ".col-box-inr": {
          transition: ".4s",
          "&:hover": {
            backgroundColor: "#2D31FA",
            ".icon": {
              color: "#FFF"

            },
            ".heading": {
              color: "#FFF"

            },
            ".detail": {
              color: "#FFF"

            },
          },
        }
      }

      addUtilities(dropdownHome, ['responsive', 'hover'])
    }),

    (function ({ addUtilities }) {
      const dropdownHome = {
        ".swiper-pagination-bullet-active": {
          backgroundColor:"red!important",
          color:"black!important",
          
          border:"none!important"
          
        },
        ".swiper-pagination-bullet": {
          backgroundcolor: "#f30000",
        },
      }

      addUtilities(dropdownHome, ['responsive', 'hover'])
    }),

    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".li-uppar": {
          position: "relative",
          "&:hover": {
            ".menu-drop-otr": {
              opacity: '1',
              visibility: 'visible',
              paddingTop: "30px",
            }
          },
          ".menu-drop-otr": {
            position: "absolute",
            zIndex: "9999",
            paddingTop: "10px",
            opacity: "0",
            visibility: 'hidden',
            transition: ".4s"
          }
        }
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".drop-li": {
          position: "relative",
          "&:hover": {
            ".other-drop": {
              opacity: '1',
              visibility: 'visible',
              paddingTop: "30px",
            }
          },
          ".other-drop": {
            position: "absolute",
            zIndex: "9999",
            paddingTop: "10px",
            opacity: "0",
            right:"-216px",
            top:"-37px",
            visibility: 'hidden',
            transition: ".4s"
          }
        }
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    // (function ({ addUtilities }) {
    //   const dropdownptherpages = {
    //     ".li-item": {
    //       position: "relative",
    //       "&:hover": {
    //         ".a-item": {
    //           color: "#5D8BF4",
    //         }
    //       },
    //       ".a-item": {
    //         transition: ".4s"
    //       }
    //     }
    //   }
    //   addUtilities(dropdownptherpages, ['responsive', 'hover'])
    // }),

    // (function ({ addUtilities }) {
    //   const dropdownptherpages = {
    //     ".other-li-item": {
    //       position: "relative",
    //       "&:hover": {
    //         ".other-a-item": {
    //           color: "#5D8BF4",
    //         },
    //         ".mail": {
    //           color: "#5D8BF4",
    //         },
    //       },
    //       ".other-a-item": {
    //         transition: ".4s"
    //       },
    //       ".mail": {
    //         transition: ".4s"
    //       },
    //     }
    //   }
    //   addUtilities(dropdownptherpages, ['responsive', 'hover'])
    // }),

    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".theme-btn": {
          color: "#FFFFFF",
          padding: "10px 24px",
          borderRadius: "4px",
          backgroundColor: "#2D31FA",
          transition: ".4s",
          position: "relative",
          '&:hover': {
            '&:after': {
              animation: "btn-animation .5s linear",
            },
          },
          '&:after': {
            content: "''",
            position: "absolute",
            backgroundColor: "#5D8BF4",
            zIndex: "9999",
            width: "0%",
            height: "100%",
            transition: ".4s",
            top: "0",
            left: "0",
          },

        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".close-icon-otr": {
          transition: ".3s",
          "&:hover": {
            backgroundColor: "#DFF6FF",
            // color:"#051367",
            ".cross": {
              color: "#2D31FA",
            },
          },
        },
        ".cross": {
          transition: ".3s",
        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".modal-backdrop.show": {
          opacity: ".7",
          height: "100vh",
        },
        ".modal-backdrop": {
          height: "27vh",
          transition: ".4s",
        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".offcanvas-backdrop.show": {
          opacity: ".7",
          width: "100%",
        },
        ".offcanvas-backdrop": {
          width: "0",
          right: "0",
          left: "initial",
          transition: ".6s",
        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        "..offcanvas-backdrop.show": {
          opacity: ".7",
          width: "100%",
        },
        ".offcanvas-backdrop": {
          width: "0",
          left: "0",
          transition: ".6s",
        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".modal.fade": {
          ".modal-dialog": {
            transform: "translateY(-230px)",
          },
        },
        ".modal.show": {
          ".modal-dialog": {
            transform: "none",
          },
        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),

    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".li-icons": {

          "&:hover": {
            ".a-icons": {
              backgroundColor: "#051367",
            },
            ".socials": {
              color: "#2D31FA",
            }
          },
          ".a-icons": {
            transition: ".4s"
          },
          ".socials": {
            transition: ".4s"
          }
        }
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".btn-close": {
          transition: ".3s",
          "&:hover": {
            backgroundColor: "#DFF6FF",
            // color:"#051367",
            ".cross": {
              color: "#2D31FA",
            },
          },
        },
        ".cross": {
          transition: ".3s",
        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".li-icons": {
          transition: ".3s",
          "&:hover": {

            ".a-icons": {
              backgroundColor: "#DFF6FF",
            },
            ".socials": {
              color: "#2D31FA",
            },
          },
        },
        ".cross": {
          transition: ".3s",
        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".col-portfilio-inr": {

          transition: ".4s",
          position: "relative",
          '&:hover': {
            '&:after': {
              animation: "porfolio-animation .5s linear",
            },
            ".arrow-otr": {
              backgroundColor: "#DFF6FF",
              opacity: "1",
              visibility: "visible",
              '&:hover': {
                ".arrow-inr": {
                  color: "##2D31FA",
                },
              }
            },
            ".arrow-inr": {
              color: "##2D31FA",
              opacity: "1",
              visibility: "visible",
            },
          },
          '&:after': {
            content: "''",
            position: "absolute",
            backgroundColor: "#5D8BF4",
            zIndex: "9999",
            width: "100%",
            height: "0%",
            transition: ".4s",
            top: "0",
          },

        },
        ".arrow-otr": {
          transition: ".3s",
          opacity: "0",
          visibility: "hidden",

        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".accordion-button": {
            position:"relative",
          '&:hover': {
            '&:after': {
              
            },
          },
          '&:after': {
            content: "''",
            position: "absolute",
            backgroundImage:"url('/assets/img/add-line.png')",
            top:"50%",
            transform:"translatey(-50%)",
            right:"20px",
            width:"20px",
            height:"20px",
            zIndex:"9999",
            transition:".2s",
          },
         

        },
        ".accordion-button:not(.collapsed):after":{
          position: "absolute",
          backgroundImage:"url('/assets/img/close-line.png')",
          top:"50%",
          transform:"translatey(-50%)",
          right:"20px",
          width:"20px",
          height:"20px",
          zIndex:"9999",
          transition:".2s",
        },
        ".accordion-button:not(.collapsed)":{
          color:"#000000",
          webkitboxshadow:" none",
          boxShadow:"none",
        },
        ".accordion-item:last-of-type .accordion-button.collapsed":{
          borderRadius:"0px!important",
        }
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),

    (function ({ addUtilities }) {
      const dots = {


        '.swiper-pagination-bullet-active': {
          height: "10px",
          width: "10px",
          borderRadius: "100%",
          border: "2px solid #2D31FA",
        },
        '.swiper-pagination-bullet': {
          backgroundColor: "#2D31FA",
          height: "10px",
          width: "10px",
          borderRadius: "100%",
        },
      }
      addUtilities(dots, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".footer-box-inr": {
          transition: ".4s",
          position: "relative",
          zIndex:"4",
          '&:after': {
            content: "''",
            position: "absolute",
            backgroundColor: "#051367",
            zIndex: "-1",
            width:"100px",
            height: "400px",
            transition: ".4s",
            transform:"rotate(-37deg)",
            top: "0px",
            left: "111px",
            filter:"blur(70px)"
          },

        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),

    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".col-address-inr": {
          "&:hover": {
            ".address-icon":{
              backgroundColor: "#DFF6FF",
            },
            ".icon-socials": {
              color: "#2D31FA",
            },
          },
        },
        ".icon-socials": {
          transition: ".3s",
        },
        ".address-icon":{
          transition: ".3s",
        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),
   


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".li-circle-icon": {
            position:"relative",
          '&:after': {
            content: "''",
            position: "absolute",
            backgroundColor:"#2D31FA",
            backgroundImage:"url('/assets/img/check-fill.svg')",
            backgroundRepeat:"no-repeat",
            borderRadius:"100%",
            display:"flex",
            width:"45px",
            height:"45px",
            top:"0",
            left:"0",
            backgroundPosition:"center",
            zIndex:"9999",
          },
         

        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),


    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".pricing-box": {
          "&:hover": {
            ".lable":{
              top:"0px",
            },
            '&:after': {
              
            },
          },
          ".lable":{
            transition:".4s",
            overflow:"hidden",
            '&:after': {
              content: "''",
              position: "absolute",
              width:"45px",
              height:"45px",
              rotate:"45deg",
              bottom:"-28px",
              zIndex:"1",
              backgroundColor:"#FFFFFF",
            },
          },

        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),

    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".li-icons-box": {
          transition: ".3s",
          "&:hover": {

            ".a-icons-box": {
              backgroundColor: "#999999",
            },
            ".socials-box": {
              color: "#2D31FA",
            },
          },
        },
        ".cross": {
          transition: ".3s",
        },
        ".a-icons-box": {
          transition:".4s",
        },
        ".socials-box": {
          transition:".4s",
        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),
  

    (function ({ addUtilities }) {
      const dropdownptherpages = {
        ".col-box-suppourt": {

          transition: ".4s",
          '&:hover': {
            backgroundColor:"#2D31FA",
            ".icon-otr":{
              color:"#FFFFFF",
            },
            ".detail":{
              color:"#FFFFFF",
            },
          },
          ".icon-otr":{
            transition: ".4s",
          },
          ".detail":{
            transition: ".4s",
          },

        },
      }
      addUtilities(dropdownptherpages, ['responsive', 'hover'])
    }),
  ]
}
