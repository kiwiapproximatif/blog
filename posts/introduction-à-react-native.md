---
title: Introduction à React Native
description: Une « brève » introduction à React Native et à la bibliothèque Expo, le tout en TypeScript.
publishedAt: 24/10/2022
tags: ["Android", "Android Studio", "Expo", "React Native", "TypeScript"]
---

## Installation de l'environnement Android

Pour lancer une application React Native, nous allons avoir besoin de JDK 11 de Java et d'Android Studio.

### Via Aptitude

Téléchargement d'Android Studio possible via la Jetbrains Toolbox ou bien depuis ce [Téléchargement Android Studio](https://developer.android.com/studio "lien").

Installation de la JDK 11 :
```shell
sudo apt install openjdk-11-jdk
```
Ne pas oublier de rajouter ces variables d'environnement à votre shell :
```shell
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
```


### Via Homebrew

Pour installer Homebrew, veuillez suivre ce [Installation de Homebrew](https://brew.sh/index_fr "lien").

Installation d'Android Studio :
```shell
brew install --cask android-studio
```

Installation de JDK 11 :
```shell
brew install openjdk@11
```

Ne pas oublier de rajouter ces variables d'environnement à votre shell :
```shell
export PATH="/opt/homebrew/opt/openjdk@11/bin:$PATH"
export ANDROID_HOME=/Users/$WHOAMI/Library/Android/sdk
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
```

## Installation de NodeJS

Il est nécessaire d'installer NodeJS pour faire fonctionner React Native.

### Via Aptitude

```shell
sudo apt install nodejs npm
```

### Via Homebrew

```shell
brew install node
```

### Via ASDF (conseillée)

Pour installer asdf, veuillez suivre ce [Installation d'ASDF](https://asdf-vm.com/guide/getting-started.html "lien").

```shell
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf install nodejs lts
asdf global nodejs lts
```

## Hello World comme autrefois

Nous allons créer une application React Native à l'aide d'une template TypeScript :
```shell
npx react-native init Hello --template react-native-template-typescript
```

On se déplace vers la racine du projet et on démarre un serveur Metro :
```shell
npm run start
```

**Note** : ***Ne pas oublier de lancer un émulateur Android via Android Studio.***

Ensuite dans un autre terminal, on démarre l'application :
```shell
npm run android
```

Si tout se passe correctement vous devriez voir apparaître « Welcome to React Native » sur l'émulateur (cela peut mettre un certain temps au premier build).

## Hello World avec Expo

Nous allons créer une application React Native à l'aide d'une template Expo TypeScript. Veuillez choisir l'option **Blank (TypeScript)** :
```shell
npx create-expo-app Hello --template
```

Ensuite, on démarre l'application pour un émulateur Android. Comme pour la première application, le premier build peut être long :
```shell
npm run android
```

Vous avez certainement remarqué que nous n'avons pas eu besoin de démarrer un serveur Metro, Expo s'en charge.










