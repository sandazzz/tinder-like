# 🚀 Énoncé de l’exercice : Création d’une app Tinder-like avec Expo, NativeWind, Expo Router et React Query

## 📌 Contexte

Tu vas développer une application mobile de type Tinder où les utilisateurs peuvent swiper à gauche ou à droite sur des profils.  
L’objectif est d’utiliser **Expo, Expo Router, NativeWind, Zustand** pour la gestion d’état, et **React Query** pour les requêtes API et les mutations (connexion, récupération des profils, etc.).

---

## 🎯 Objectifs de l’exercice

### 1️⃣ Mettre en place la navigation avec **Expo Router**

- Un écran **principal (/)** pour swiper les profils
- Un écran **“Matchs” (/matches)** pour afficher les profils acceptés
- Un écran **“Profil” (/profile)** qui affiche les infos de l’utilisateur connecté

### 2️⃣ Implémenter le swipe avec **react-native-deck-swiper**

- Utiliser **react-native-deck-swiper** pour gérer les interactions
- Un **swipe à gauche** = rejet
- Un **swipe à droite** = acceptation
- Une **transition fluide** entre les profils

### 3️⃣ Gérer l’état global avec **Zustand**

- Stocker les profils acceptés et l’utilisateur connecté

### 4️⃣ Utiliser **React Query** pour gérer les requêtes API

- **GET /api/profiles** → Récupérer la liste des profils
- **POST /api/login** → Authentification utilisateur
- **POST /api/match** → Enregistrer un match

### 5️⃣ Créer une page de connexion obligatoire au lancement

- Un écran **/login** avec un formulaire simple (email + mot de passe)
- Une **redirection automatique** vers **/** après connexion

### 6️⃣ Créer une icône d’application personnalisée (obligatoire pour iOS)

- Configurer **app.json** pour inclure une icône

---

## 📂 Données des profils (Mock JSON)

Tu peux utiliser ces données pour l’affichage des profils :

```json
[
  {
    "name": "Alice",
    "age": 24,
    "bio": "Fan de React et de voyages",
    "image": "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    "name": "Bob",
    "age": 27,
    "bio": "Développeur mobile et amateur de café",
    "image": "https://randomuser.me/api/portraits/men/2.jpg"
  }
]
```
