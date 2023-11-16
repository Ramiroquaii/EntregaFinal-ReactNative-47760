# ReactNativeApp
Aplicacion React Native con Expo para dispositivos móviles multiplataforma.

## Construccion a lo largo del curso Coderhouse Desarollo de Aplicaciones

- Comision 47760
 **Profesor: Rocio Martin**

 **Tutor: German Koning**

 **Alumno: Ramiro Vechiola**

>> No se desarrolla app personalizada, el curso fue de gran utilidad para conocer la metodología de desarrollo a través de la librería EXPO, la utilización e implementación de sus librerías propias, la adaptación de React a React Native para aplicaciones Móviles y por sobre todas las cosas el conjunto de herramientas que propone Expo Go para compilar y publicar el desarrollo.

>>IMPORTANTE: no se profundizo lo suficiente en temas fundamentales como REDUX o la PUBICACIÓN FINAL de la aplicación, siendo estas partes de gran expectativa sobre el curso quedando estas de manera muy superficial.

>>El curso me pareció de todos modos MUY ADECUADO y el dictado de clases fue muy aceptable, pero la carga horaria en temas fundamentales no fue suficiente desde mi punto de vista, la aplicación personal que pretendía desarrollar no fue posible de alcanzar debido a la incorporación de REDUX como sustitución de "CONTEXT".

>>Les dejo como referencia la pequeña app REACT desarollada como ejemplo -> https://github.com/Ramiroquaii/ReactJS-Comision-38110.git

>>Siendo esta la cual pretendia a modo dicactico traspasar a React Native pero al intentar inplementar REDUX no me fue posible aún, de todos modos continuo realizando pruebas y ejercitaciones hasta lograr el cometido final.

> Aplicación desarollada en conjunto durante el curso que implemente todos los contenidos vistos. Esta aplicación no es de desarollo personal y simplemente se utiliza para entender y comprender la estructuración, modularización y uso de todas las librerias visatas a lo largo de la capacitación.

    "@expo/webpack-config": "^19.0.0",
    "@react-native-async-storage/async-storage": "^1.19.3",
    "@react-navigation/bottom-tabs": "^6.5.9",
    "@react-navigation/native": "^6.1.8",
    "@react-navigation/native-stack": "^6.9.14",
    "@reduxjs/toolkit": "^1.9.7",
    "@stripe/stripe-react-native": "0.28.0",
    "eas-cli": "^5.4.0",
    "expo": "~49.0.13",
    "expo-av": "~13.4.1",
    "expo-font": "~11.4.0",
    "expo-image-picker": "~14.3.2",
    "expo-location": "~16.1.0",
    "expo-status-bar": "~1.6.0",
    "firebase": "^10.4.0",
    "react": "18.2.0",
    "react-dom": "^18.2.0",
    "react-native": "0.72.5",
    "react-native-maps": "1.7.1",
    "react-native-safe-area-context": "4.6.3",
    "react-native-screens": "~3.22.0",
    "react-native-web": "^0.19.9",
    "react-redux": "^8.1.3"

> npm expo start // yarn star --> para ejecutar la aplicacion a traves de Expo Go y montar el servidor local.

- No se utiliza environment (.env) por motivos didácticos y de prueba todas las credenciales estan expuestas publicamente para prueba.
- Se cotinua utilizando los set de datos de prueba provistos pero de manera online desde firebase.
- Se deben simular de manera forzada muchas interfases por no tener un backend funcional o API propio (Fontenf + Backend sin division marcada).

** Simulación: Android Studio en API 34 con dispositivo 1080x2400 - 420dpi (Pixel 7) **
** Terminal de prueba física: Motorola G-52 Android 12 Compilación S1SRS32.38-132-15 **

