import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../components/home_bg.jpg"),
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(178,213,95,0.1);
`;

export const AccountContainer = styled.View`
    background-color: rgba(255,255,255,0.5);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
    color: colors.palette.sungglow,
})`
    padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
    width: 300px;
`;

export const Title = styled(Text)`
    font-size: 30px;
    color:  #fff; 
`;

export const ErrorContainer = styled.View`
    max-width: 300px;
    align-items: center;
    align-self: center;
    margin-top: ${(props) => props.theme.space[2]};
    margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
    width: 100%;
    height: 50%;
    position: absolute;
    top: 10px;   
    scaleX: 0.7px;
    scaleY: 0.7px;
    padding: ${(props) => props.theme.space[2]};
`;