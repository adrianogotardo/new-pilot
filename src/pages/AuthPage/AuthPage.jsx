import { useState } from "react";
import { Background, TrackContainer } from "./AuthPage.style";
import Slider from "./Slider/Slider";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

export default function AuthPage() {
    const [sliderSide, setSliderSide] = useState('left');

    function switchSliderSide() {
        setSliderSide((prevState) => (prevState === 'left' ? 'right' : 'left'));
    }

    return (
        <Background>
            <TrackContainer>
                <Slider sliderSide={sliderSide} switchSliderSide={switchSliderSide} />
                <SignUp />
                <SignIn />
            </TrackContainer>
        </Background>
    )
}