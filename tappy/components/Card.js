import React from 'react';

const Card = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="landingScreen">
                <Stack.Screen name="landingScreen" component={landingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="contactScreen" component={contactsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="loadingScreen" component={loadingScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Card;
