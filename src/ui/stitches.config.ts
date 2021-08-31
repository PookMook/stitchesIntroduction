import {createStitches, ScaleValue, PropertyValue} from '@stitches/react';

export const {styled, theme, keyframes, css, globalCss} = createStitches({
    theme:{
        colors:{
            red12: "red",
            yellow12: "yellow",
            accentColour: '$yellow12',
            highContrast: "#f0f0f0"
        },
        fontSizes:{

            minus2: "0.75rem",
            minus1: "1rem",
            plus0: "1.25rem",
            plus1: "1.75rem",
            plus2: "2.25rem",

            extraSmall: "0.75rem",
            small: "1rem",
            normal: "1.25rem",
            large: "1.75rem",
            extraLarge: "2.25rem",

            100: "0.75rem",
            200: "1rem",
            300: "1.25rem",
            400: "1.75rem",
            500: "2.25rem",

        },
        space:{            
            100: "1.75rem",
            200: "2rem",
            300: "2.25rem",
            400: "2.75rem",
            500: "3.25rem",
        }
    },
    utils:{
        marginX: (value: ScaleValue<'space'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        marginY: (value: PropertyValue<'marginTop'>) => ({
            marginTop: value,
            marginBottom: value,
        })
    },
    media:{
        "tablet": "(min-width: 720px)",
        "desktop": "(min-width: 1280px)",
    }

})

export const Global = globalCss({
    body:{
        margin:0,
        backgroundColor:"$accentColour"
    },
    "*":{
        position:"relative",
        boxSizing:"border-box"
    }
})

export const Rotate = keyframes({
    '0%': {transform: "rotate(0)"},
    '100%': {transform: "rotate(360deg)"},
})

