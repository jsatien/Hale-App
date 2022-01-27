import React from "react";
import { Spacer } from "../../../components/spacer/spacer.component";

import { 
    AccountBackground, 
    AccountCover,
    AccountContainer,
    AuthButton,
    Title,
} from "../components/account.style";

export const AccountScreen = ({ navigation }) => {
    return <AccountBackground>
        <AccountCover/>
        <Title>Hale App Logo Here</Title>
        <AccountContainer>
            <AuthButton 
                icon="lock-open-outline"
                mode="contained"
                color="#fecc47"
                onPress={() => navigation.navigate("Login")}
            >
                Login
            </AuthButton>
            <Spacer size="large">
                <AuthButton 
                    icon="email"
                    mode="contained"
                    color="#fecc47"
                    onPress={() => navigation.navigate("Register")}
                >
                    Register
                </AuthButton>
            </Spacer>
        </AccountContainer>
    </AccountBackground>;
};