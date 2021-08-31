import {styled, Rotate, css} from 'ui/stitches.config'

export const Text = styled('span',{
    color: "$accentColour",
    fontSize: "$100",
    display: "block",
    cursor: 'pointer',
    $$topGradient: "black",
    $$bottomGradient: "grey",
    "&::before":{
        content: "test"
    },
    marginX: "$100",
    marginY: "4rem",
    variants:{
        Color:{
            blue:{
                color: "blue",
                backgroundColor: "Aqua",
                $$topGradient: "blue",
                $$bottomGradient: "cyan",
            },
            red: {
                color: 'red',
                backgroundColor: "Orange",
                $$topGradient: "red",
                $$bottomGradient: "orange",
            }
        },
        Gradient:{
            true:{
                backgroundImage: "linear-gradient($$topGradient, $$bottomGradient)",
            }
        },
        Disabled:{
            true:{
                cursor: "not-allowed",
                color:"grey"
            }
        },
        Rotate:{
            true:{
                transform: "rotate(0deg)",
                animation: `${Rotate} 2s infinite`,
            }
        }
    },
})

export const PageTitle = css('h1',Text, {
    defaultVariants:{
        Color: "blue",
        Gradient: true,
    },
})