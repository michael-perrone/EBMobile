import { Dimensions } from 'react-native';

export const utils = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    pink: 'lavender',
    gray: 'rgb(180, 180, 180)',
    font: 'ChalkboardSE-Bold',
    blue: 'rgb(66, 188, 245)',
    post: async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    }
}
