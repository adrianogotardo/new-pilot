import useWindowSize from "../../../hooks/useWindowSize";
import { LogoStyle, SliderStyle, SwitchAuthButton } from "./Slider.styles";

export default function Slider({ switchSliderSide, sliderSide }) {

    const animationBoundaries = (useWindowSize().width * 0.8) / 2;
    const animationConfig = {
        variants: {
            left: { x: 20 },
            right: { x: animationBoundaries - 20 }
        },
        transition: {
            type: "spring",
            stiffness: 250,
            damping: 30,
            duration: 0.1
        }
    }

    const isShowingLogin = sliderSide === "left";
    const switchAuthText = {
        goToSignUp: 'Ainda não possui uma conta? Cadastre-se >>',
        goToSignIn: '<< Já possui uma conta? Entre'
    }

    return (
        <SliderStyle
            variants={animationConfig.variants}
            transition={animationConfig.transition}
            initial={sliderSide} animate={sliderSide}
        >
            <LogoStyle src={"./assets/piottoAuthLogo.png"} />
            <SwitchAuthButton onClick={switchSliderSide}>
                {isShowingLogin ? switchAuthText.goToSignUp : switchAuthText.goToSignIn}
            </SwitchAuthButton>
        </SliderStyle>
    );
}